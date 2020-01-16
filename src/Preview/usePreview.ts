import { useRef, useEffect } from "react";

export const usePreview = () => {
  const previewRef = useRef<HTMLIFrameElement>(null);
  const bodyEl = useRef<HTMLElement | null>(null);
  const styleEl = useRef<HTMLStyleElement | null>(null);

  const handleHTMLChange = (content: string) => {
    if (bodyEl.current) {
      bodyEl.current.innerHTML = content;
    }
  };

  const handleCSSChange = (content: string) => {
    if (styleEl.current) {
      styleEl.current.innerText = content;
    }
  };

  useEffect(() => {
    if (previewRef.current) {
      const previewDocument = previewRef.current.contentDocument;
      if (previewDocument) {
        styleEl.current = previewDocument.createElement("style");
        bodyEl.current = previewDocument.body;
        previewDocument.head.appendChild(styleEl.current);
      }
    }
  }, []);

  return {
    handleHTMLChange,
    handleCSSChange,
    previewRef,
  };
};
