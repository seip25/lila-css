import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

export default function CodeBlock({ language = 'html', children }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
}
