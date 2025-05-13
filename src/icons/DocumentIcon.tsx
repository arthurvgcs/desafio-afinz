type Props = {
  size?: number;
  color?: string;
};

const DocumentIcon = ({ size = 16, color = "#00C5CB" }: Props) => (
  <svg
    data-testid="document-icon"
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
      d="m9.333 2 3.334 3.333M9.333 2v3.333h3.334M9.333 2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2V5.333M6 8.333h4m-4-3h.667m-.667 6h4"
    />
  </svg>
);

export default DocumentIcon;