// Tweaks panel — controlled by parent App.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "emphasis": "balanced",
  "density": "standard",
  "devanagari": "on"
}/*EDITMODE-END*/;

const TweaksPanel = ({ tweaks, setTweaks, visible }) => {
  const set = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*'); } catch {}
  };
  const Chip = ({ name, val, cur, onClick }) => (
    <div className={`chip ${cur === val ? "on" : ""}`} onClick={onClick}>{name}</div>
  );
  return (
    <div className={`tweaks-panel ${visible ? "open" : ""}`}>
      <h5>Tweaks</h5>
      <div className="group">
        <span className="label">Hero style</span>
        <div className="chips">
          <Chip name="Editorial" val="editorial" cur={tweaks.heroVariant} onClick={() => set("heroVariant", "editorial")} />
          <Chip name="Split" val="split" cur={tweaks.heroVariant} onClick={() => set("heroVariant", "split")} />
          <Chip name="Full-bleed" val="bleed" cur={tweaks.heroVariant} onClick={() => set("heroVariant", "bleed")} />
          <Chip name="Stat-led" val="stat" cur={tweaks.heroVariant} onClick={() => set("heroVariant", "stat")} />
        </div>
      </div>
      <div className="group">
        <span className="label">Color emphasis</span>
        <div className="chips">
          <Chip name="Balanced" val="balanced" cur={tweaks.emphasis} onClick={() => set("emphasis", "balanced")} />
          <Chip name="Navy-heavy" val="navy" cur={tweaks.emphasis} onClick={() => set("emphasis", "navy")} />
          <Chip name="Amber-heavy" val="amber" cur={tweaks.emphasis} onClick={() => set("emphasis", "amber")} />
        </div>
      </div>
      <div className="group">
        <span className="label">Density</span>
        <div className="chips">
          <Chip name="Compact" val="compact" cur={tweaks.density} onClick={() => set("density", "compact")} />
          <Chip name="Standard" val="standard" cur={tweaks.density} onClick={() => set("density", "standard")} />
          <Chip name="Roomy" val="roomy" cur={tweaks.density} onClick={() => set("density", "roomy")} />
        </div>
      </div>
      <div className="group">
        <span className="label">Devanagari accents</span>
        <div className="chips">
          <Chip name="On" val="on" cur={tweaks.devanagari} onClick={() => set("devanagari", "on")} />
          <Chip name="Off" val="off" cur={tweaks.devanagari} onClick={() => set("devanagari", "off")} />
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { TWEAK_DEFAULTS, TweaksPanel });
