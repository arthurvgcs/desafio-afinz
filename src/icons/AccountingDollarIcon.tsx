type Props = {
  size?: number;
  color?: string;
};

const AccountingDollarIcon = ({ size = 16, color = "#00C5CB" }: Props) => (
  <svg
    data-testid="accounting-dollar-icon"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
  >
    <g clipPath="url(#clip0_1_41)">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.852 5.53H7.074c-.344 0-.673.131-.917.362-.243.232-.38.546-.38.873 0 .328.137.642.38.873.244.232.573.362.917.362h1.852c.344 0 .673.13.917.362.243.231.38.545.38.873s-.137.641-.38.873a1.33 1.33 0 0 1-.917.361H5.778M8 4.296v7.408m-3.667 2.963h7.334a3 3 0 0 0 3-3V4.333a3 3 0 0 0-3-3H4.333a3 3 0 0 0-3 3v7.334a3 3 0 0 0 3 3"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1_41">
        <path fill="#fff" d="M0 0h16v16H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default AccountingDollarIcon;