type Props = {
  size?: number;
  color?: string;
};

const MoveUpDownIcon = ({ size = 16, color = "#00C5CB" }: Props) => (
  <svg
    data-testid="move-up-down-icon"
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
      d="M1.333 10.571 4.667 14m0 0L8 10.571M4.667 14V4.667m10 .762L11.333 2m0 0L8 5.429M11.333 2v9.333"
    ></path>
  </svg>
);

export default MoveUpDownIcon;