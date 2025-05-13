import styles from "./Spinner.module.css";
type Props = {
  size?: number;
  color?: string;
};

const Spinner = ({ size = 10, color = "#fff" }: Props) => {
  return (
    <svg
      className={styles.spinner}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <circle
        className={styles.path}
        stroke={color}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
};

export default Spinner;
