type Props = {
  size?: number;
  color?: string;
};

const EyeIcon = ({ size = 16, color = "#313944" }: Props) => (
  <svg
    data-testid="eye-icon"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M2 12c1.335-4.637 5.308-8 10-8s8.665 3.363 10 8c-1.335 4.637-5.308 8-10 8s-8.665-3.363-10-8Z"
    ></path>
    <path
      stroke="#313944"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    ></path>
  </svg>
);

export default EyeIcon;