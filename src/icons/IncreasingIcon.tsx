type Props = {
  size?: number;
  color?: string;
};

const IncreasingIcon = ({ size = 16, color = "#00C5CB" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m2 12.667 5.333-5.334 1.334 1.334L14 3.333m0 0V6.35m0-3.016h-3.167"
    ></path>
  </svg>
);

export default IncreasingIcon;