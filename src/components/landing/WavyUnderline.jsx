export default function WavyUnderline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8 C 25 2, 50 2, 75 8 S 125 14, 150 8 S 175 2, 200 8"
        stroke="var(--color-lime)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
