"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryPhoto = {
  _id: string;
  label?: string;
  src: string;
  srcLarge: string;
};

export default function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const open = useCallback((idx: number) => setLightboxIdx(idx), []);
  const close = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() =>
    setLightboxIdx((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    [photos.length]);
  const next = useCallback(() =>
    setLightboxIdx((i) => (i !== null ? (i + 1) % photos.length : null)),
    [photos.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, close, prev, next]);

  const current = lightboxIdx !== null ? photos[lightboxIdx] : null;

  if (photos.length === 0) {
    return (
      <div className="gallery-empty">
        No photos uploaded yet — add them in Sanity Studio under Event Photos.
      </div>
    );
  }

  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, idx) => (
          <button
            key={photo._id}
            className="gallery-item"
            onClick={() => open(idx)}
            aria-label={photo.label ?? `Photo ${idx + 1}`}
          >
            <Image
              src={photo.src}
              alt={photo.label ?? ""}
              fill
              sizes="(max-width: 599px) 50vw, (max-width: 1023px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
            />
            {photo.label && (
              <div className="gallery-overlay">
                <span className="gallery-label">{photo.label}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Close">
            <X size={22} />
          </button>

          {photos.length > 1 && (
            <button
              className="lightbox-nav lightbox-nav--prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.srcLarge}
              alt={current.label ?? ""}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {photos.length > 1 && (
            <button
              className="lightbox-nav lightbox-nav--next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>
          )}

          <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
            {current.label && <strong>{current.label}</strong>}
            <span className="lightbox-counter">
              {(lightboxIdx ?? 0) + 1} / {photos.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
