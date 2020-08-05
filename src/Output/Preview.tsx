import React, { useRef } from "react";

import { useEditorValues } from "EditorContext";
import { TargetSize } from "./Output";
import "./Preview.css";

export const Preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const bodyEl = useRef<HTMLElement | null>(null);
  const styleEl = useRef<HTMLStyleElement | null>(null);

  const { css, html } = useEditorValues();

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

  return <iframe className="Preview-iframe" title="preview" ref={iframeRef} />;
};
