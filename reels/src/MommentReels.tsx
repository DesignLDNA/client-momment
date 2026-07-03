import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Img,
  OffthreadVideo,
  staticFile,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadFraunces } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadNunito } from "@remotion/google-fonts/Nunito";

const { fontFamily: fraunces } = loadFraunces();
const { fontFamily: nunito } = loadNunito();

/* ---- Tokens (DESIGN.md) ---- */
const C = {
  ink: "#101010",
  cream100: "#FFF6F2",
  cream200: "#F5E7DF",
  coral500: "#FF7262",
  coral400: "#FF8674",
};

/* Vídeo do cliente em reels/public/video.mp4 */
const HAS_VIDEO = true;

/* Fade-up helper */
const useFadeUp = (start: number, dur = 18, dy = 28) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - start, fps, config: { damping: 200 }, durationInFrames: dur });
  return { opacity: s, transform: `translateY(${(1 - s) * dy}px)` };
};

const Background: React.FC = () => {
  if (HAS_VIDEO) {
    return (
      <AbsoluteFill>
        <OffthreadVideo src={staticFile("video.mp4")} muted={false} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </AbsoluteFill>
    );
  }
  // Placeholder enquanto o vídeo não chega
  return (
    <AbsoluteFill style={{ background: `radial-gradient(120% 80% at 30% 25%, #2a2522 0%, ${C.ink} 70%)` }}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: nunito, fontWeight: 700, fontSize: 30, letterSpacing: 4, color: "rgba(255,246,242,0.25)" }}>
          VÍDEO DO CLIENTE (placeholder)
        </span>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Tag: React.FC<{ text: string; light?: boolean }> = ({ text }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
    <div style={{ width: 16, height: 16, borderRadius: 999, background: C.coral500 }} />
    <span style={{ fontFamily: nunito, fontWeight: 800, fontSize: 28, letterSpacing: "0.16em", textTransform: "uppercase", color: C.coral400 }}>
      {text}
    </span>
  </div>
);

const SceneTag: React.FC = () => {
  const a = useFadeUp(6);
  return (
    <AbsoluteFill style={{ padding: 96, justifyContent: "flex-end" }}>
      <div style={{ ...a, marginBottom: 40 }}>
        <Tag text="Abertura especial" />
      </div>
    </AbsoluteFill>
  );
};

const SceneDates: React.FC = () => {
  const words = ["01", "·", "02", "·", "03"];
  const sub = useFadeUp(38);
  return (
    <AbsoluteFill style={{ padding: 96, justifyContent: "flex-end" }}>
      <div style={{ marginBottom: 120 }}>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {words.map((w, i) => {
            const a = useFadeUp(8 + i * 6, 16, 36);
            return (
              <span key={i} style={{ ...a, fontFamily: fraunces, fontWeight: 600, fontSize: 150, lineHeight: 0.92, letterSpacing: "-0.03em", color: C.cream100 }}>
                {w}
              </span>
            );
          })}
        </div>
        <div style={{ ...sub, fontFamily: fraunces, fontWeight: 600, fontSize: 66, color: C.cream100, marginTop: 10, letterSpacing: "-0.02em" }}>
          de junho
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Callout: React.FC<{ text: string; index: number }> = ({ text, index }) => {
  const a = useFadeUp(index * 14, 16, 24);
  return (
    <div style={{ ...a, display: "flex", alignItems: "center", gap: 20, background: "rgba(255,246,242,0.10)", backdropFilter: "blur(6px)", borderRadius: 18, padding: "22px 30px" }}>
      <div style={{ width: 14, height: 14, borderRadius: 999, background: C.coral400, flexShrink: 0 }} />
      <span style={{ fontFamily: nunito, fontWeight: 700, fontSize: 38, color: C.cream100 }}>{text}</span>
    </div>
  );
};

const SceneCallouts: React.FC = () => {
  const items = ["Conheça o espaço", "Tome um café", "Escolha seu plano"];
  return (
    <AbsoluteFill style={{ padding: 96, justifyContent: "flex-end" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 120 }}>
        {items.map((t, i) => (
          <Callout key={i} text={t} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

const SceneEnd: React.FC = () => {
  const frame = useCurrentFrame();
  const cover = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp" });
  const logo = useFadeUp(10, 18, 24);
  const date = useFadeUp(22, 18, 24);
  const handle = useFadeUp(34, 18, 20);
  return (
    <AbsoluteFill style={{ background: C.ink, opacity: cover, alignItems: "center", justifyContent: "center", padding: 96 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 44, textAlign: "center" }}>
        <Img src={staticFile("logo-branca.svg")} style={{ ...logo, width: 360 }} />
        <div style={{ ...date }}>
          <div style={{ fontFamily: nunito, fontWeight: 800, fontSize: 26, letterSpacing: "0.14em", textTransform: "uppercase", color: C.coral400, marginBottom: 14 }}>
            Inauguração oficial
          </div>
          <div style={{ fontFamily: fraunces, fontWeight: 600, fontSize: 96, color: C.cream100, letterSpacing: "-0.02em", lineHeight: 1 }}>
            08 de junho
          </div>
        </div>
        <div style={{ ...handle, fontFamily: nunito, fontWeight: 700, fontSize: 36, color: C.cream100 }}>
          @momment.coworking
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* Vinheta escura constante p/ legibilidade do texto */
const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "linear-gradient(to bottom, rgba(16,16,16,0.45) 0%, rgba(16,16,16,0.10) 38%, rgba(16,16,16,0.78) 100%)",
    }}
  />
);

export const MommentReels: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: C.ink }}>
      <Background />
      <Vignette />

      {/* 0–2s: tag */}
      <Sequence from={0} durationInFrames={60}>
        <SceneTag />
      </Sequence>

      {/* 1.5–6s: datas */}
      <Sequence from={45} durationInFrames={135}>
        <SceneDates />
      </Sequence>

      {/* 6–11s: callouts */}
      <Sequence from={180} durationInFrames={150}>
        <SceneCallouts />
      </Sequence>

      {/* 11–15s: end card */}
      <Sequence from={330} durationInFrames={120}>
        <SceneEnd />
      </Sequence>
    </AbsoluteFill>
  );
};
