import { createClient } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

export type SanityImage = {
  asset: { _ref: string; _type: string };
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export function urlFor(source: SanityImageSource) {
  return builder ? builder.image(source) : null;
}
