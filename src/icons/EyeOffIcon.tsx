type Props = {
  size?: number;
  color?: string;
};

const EyeOffIcon = ({ size = 16, color = "#313944" }: Props) => (
  <svg
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
      d="M17.67 18.012 21.431 22m-7.467-2.417a10 10 0 0 1-1.964.195c-4.692 0-8.665-3.27-10-7.778a11.3 11.3 0 0 1 1.638-3.365zm-4.188-9.94A3.05 3.05 0 0 1 12 8.667c1.736 0 3.143 1.492 3.143 3.333 0 .92-.351 1.754-.92 2.357zm0 0 4.447 4.714zm0 0L6.33 5.988zm4.447 4.714 3.447 3.655zM2.568 2l3.761 3.988zm3.761 3.988A10 10 0 0 1 12 4.222c4.692 0 8.665 3.27 10 7.778-.74 2.5-2.293 4.62-4.33 6.012z"
    ></path>
  </svg>
);

export default EyeOffIcon;