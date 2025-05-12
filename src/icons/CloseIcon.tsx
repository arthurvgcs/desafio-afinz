type Props = {
  size?: number;
  color?: string;
};
const CloseIcon = ({ size = 16, color = "#313944" }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 26 26'
  >
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M13 .75C19.765.75 25.25 6.235 25.25 13S19.765 25.25 13 25.25.75 19.765.75 13 6.235.75 13 .75Zm5.73 6.52a.75.75 0 0 0-1.06 0L13 11.94 8.33 7.27l-.057-.052A.75.75 0 0 0 7.27 8.33L11.94 13l-4.67 4.67a.75.75 0 0 0 1.06 1.06L13 14.06l4.67 4.67a.75.75 0 0 0 1.112-1.003l-.052-.057L14.06 13l4.67-4.67a.75.75 0 0 0 0-1.06Z'
    ></path>
  </svg>
);

export default CloseIcon;