function EraseIcon({ className }: { className: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9283 19.3413H6.49862L1.97873 14.8214C1.76828 14.6097 1.65015 14.3233 1.65015 14.0248C1.65015 13.7263 1.76828 13.4399 1.97873 13.2282L13.2784 1.92844C13.4902 1.71798 13.7766 1.59985 14.0751 1.59985C14.3736 1.59985 14.66 1.71798 14.8717 1.92844L20.5216 7.5783C20.732 7.79001 20.8501 8.07641 20.8501 8.37493C20.8501 8.67345 20.732 8.95984 20.5216 9.17156L16.6501 13.043M10.3518 19.3413L16.6501 13.043M9.16192 6.04496L16.6501 13.043"
        stroke="currentColor"
        className={className}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default EraseIcon;
