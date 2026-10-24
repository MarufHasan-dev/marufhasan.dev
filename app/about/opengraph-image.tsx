import { ImageResponse } from "next/og";

export const alt = "Maruf Hasan — Full-Stack Web Developer · Dhaka, Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px 92px",
          backgroundColor: "#f5f5f7",
          color: "#1d1d1f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#6e6e73",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#0a84ff",
            }}
          />
          About
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -5,
            lineHeight: 1.02,
          }}
        >
          Maruf Hasan
        </div>
        <div
          style={{
            marginTop: 24,
            color: "#6e6e73",
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: -0.5,
          }}
        >
          Full-Stack Web Developer · Dhaka, Bangladesh
        </div>
        <div
          style={{
            marginTop: 64,
            width: 120,
            height: 6,
            borderRadius: 999,
            backgroundColor: "#0a84ff",
          }}
        />
      </div>
    ),
    size,
  );
}
