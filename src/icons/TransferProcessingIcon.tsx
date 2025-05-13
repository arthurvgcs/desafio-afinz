const TransferProcessingIcon = () => {
  return (
    <svg data-testid="transfer-processing-icon" viewBox="0 0 24 24" width="60" height="60">
      <circle cx="12" cy="12" r="10" fill="#2196F3" />
      <circle cx="9" cy="12" r="1.5" fill="#fff">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0s"/>
      </circle>
      <circle cx="12" cy="12" r="1.5" fill="#fff">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0.2s"/>
      </circle>
      <circle cx="15" cy="12" r="1.5" fill="#fff">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
      </circle>
    </svg>
  );
};

export default TransferProcessingIcon;