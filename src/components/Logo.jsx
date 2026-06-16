export default function Logo({ light = false }) {
  const node = light ? "#fff" : "#0b6e4f";
  const link = light ? "rgba(255,255,255,.55)" : "#0057b8";
  return (
    <span className="brand">
      <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="6.5" fill="#13a37f" />
        <circle cx="8" cy="9" r="3.1" fill={node} />
        <circle cx="32" cy="9" r="3.1" fill={node} />
        <circle cx="8" cy="31" r="3.1" fill={node} />
        <circle cx="32" cy="31" r="3.1" fill={node} />
        <path
          d="M20 20 8 9M20 20 32 9M20 20 8 31M20 20 32 31"
          stroke={link}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-name" style={light ? { color: "#fff" } : undefined}>
        Nexus&nbsp;Hub
      </span>
    </span>
  );
}
