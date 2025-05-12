import styles from './Spinner.module.css'; // Estilo opcional se quiser usar CSS separado

const Spinner = () => {
  return (
    <svg
      className={styles.spinner}
      width="10"
      height="10"
      viewBox="0 0 50 50"
    >
      <circle
        className={styles.path}
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