export function ColecoesIcon({
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
      viewBox="0 0 46 46"
      fill={color}
    >
      <g clip-path="url(#clip0_529_9788)">
        <path
          d="M42.1673 30.6663V7.66634C42.1673 5.55801 40.4423 3.83301 38.334 3.83301H15.334C13.2257 3.83301 11.5007 5.55801 11.5007 7.66634V30.6663C11.5007 32.7747 13.2257 34.4997 15.334 34.4997H38.334C40.4423 34.4997 42.1673 32.7747 42.1673 30.6663ZM21.084 22.9997L24.9748 28.1938L30.6673 21.083L38.334 30.6663H15.334L21.084 22.9997ZM3.83398 11.4997V38.333C3.83398 40.4413 5.55898 42.1663 7.66732 42.1663H34.5007V38.333H7.66732V11.4997H3.83398Z"
          fill="#323232"
        />
      </g>
      <defs>
        <clipPath id="clip0_529_9788">
          <rect width="46" height="46" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
