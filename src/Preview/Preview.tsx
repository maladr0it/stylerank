import React, { useRef } from "react";
import classNames from "classnames";

import "./Preview.css";

interface Props {
  css: string;
  html: string;
  className?: string;
}

export const Preview = ({ css, html, className }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const bodyEl = useRef<HTMLElement | null>(null);
  const styleEl = useRef<HTMLStyleElement | null>(null);

  React.useEffect(() => {
    if (iframeRef.current) {
      const previewDocument = iframeRef.current.contentDocument;
      if (previewDocument) {
        bodyEl.current = previewDocument.body;
        styleEl.current = previewDocument.createElement("style");
        previewDocument.head.appendChild(styleEl.current);
      }
    }
  }, []);

  React.useEffect(() => {
    if (bodyEl.current) {
      bodyEl.current.innerHTML = html;
    }
  }, [html]);

  React.useEffect(() => {
    if (styleEl.current) {
      styleEl.current.innerText = css;
    }
  }, [css]);

  return (
    <div className={classNames("Preview-container", className)}>
      <iframe className="Preview" title="preview" ref={iframeRef} />
    </div>
  );
};
