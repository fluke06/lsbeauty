interface SparkleIconProps {
  size?: number
  className?: string
  color?: string
  style?: React.CSSProperties
}

export default function SparkleIcon({
  size = 16,
  className = '',
  color,
  style,
}: SparkleIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={`sparkle-icon ${className}`}
      style={{ color, ...style }}
    >
      <path
        d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z"
        fill="currentColor"
      />
    </svg>
  )
}
