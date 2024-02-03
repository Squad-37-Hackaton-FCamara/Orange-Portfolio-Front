export function CheckIcon({
  size = 24,
  color = "white",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1777 27.1543L31.666 11.666L34.0227 14.0227L16.1777 31.8677L6.66602 22.356L9.02268 19.9993L16.1777 27.1543Z"
        fill={color}
      />
    </svg>
  );
}
