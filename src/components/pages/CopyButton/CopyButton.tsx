import { useState } from "react";
import './CopyButton.css'

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  return (
    <button  className="copy-button" onClick={handleCopy}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;
