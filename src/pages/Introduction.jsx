import CodeBlock from '../components/CodeBlock';

export default function Introduction() {
  const handleDownload = () => {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const cssFile = themeStylesheet ? themeStylesheet.getAttribute('href').replace(/^\//, '') : 'lila.css';
    const jsFile = 'lila.js';

    const cssLink = document.createElement('a');
    cssLink.href = '/' + cssFile;
    cssLink.download = cssFile.split('/').pop();
    document.body.appendChild(cssLink);
    cssLink.click();
    document.body.removeChild(cssLink);

    setTimeout(() => {
      const jsLink = document.createElement('a');
      jsLink.href = '/' + jsFile;
      jsLink.download = jsFile;
      document.body.appendChild(jsLink);
      jsLink.click();
      document.body.removeChild(jsLink);
    }, 500);
  };

  return (
    <>
      <article className="text-center">
        <h1 className="font-bold">Lila CSS Framework</h1>
        <p className="text-secondary">
          A semantic, modern CSS framework inspired by Pico.css, Material Design and shadcn/ui.
        </p>
        <p>This documentation provides a complete guide to all the components and utilities available in Lila CSS.</p>
        <a href="https://github.com/seip25/lila-css" role="button">
          Give it a ⭐ on GitHub
        </a>
      </article>

      <div className="mt-4">
        <div className="text-center">
          <h2>Install</h2>
          <p>Include the Lila CSS file in your HTML file.</p>
          <p>Or download the file and include it locally.</p>
          <button className="primary" onClick={handleDownload}>Download</button>
        </div>
        <CodeBlock language="html">
{`<link rel="stylesheet" href="https://seip25.github.io/lila-css/lila.css" />
<script src="https://seip25.github.io/lila-css/lila.js"><\/script>`}
        </CodeBlock>
      </div>
    </>
  );
}
