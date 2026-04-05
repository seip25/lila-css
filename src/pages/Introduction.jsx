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

      <article>
        <h2>Install</h2>
        <p>Include the Lila CSS file in your HTML file via CDN:</p>
        <CodeBlock language="html">
{`<link rel="stylesheet" href="https://seip25.github.io/lila-css/lila.css" />
<script src="https://seip25.github.io/lila-css/lila.js"><\/script>`}
        </CodeBlock>
        <p>Or download the files and include them locally:</p>
        <button className="primary" onClick={handleDownload}>Download lila.css + lila.js</button>
        <CodeBlock language="html">
{`<link rel="stylesheet" href="lila.css" />
<script src="lila.js"><\/script>`}
        </CodeBlock>
      </article>

      <article>
        <h2>Semantic HTML First</h2>
        <p>
          Lila CSS is built around <strong>semantic HTML</strong>. Most elements are styled automatically
          — you rarely need utility classes. Here's a complete page with zero classes:
        </p>
        <CodeBlock language="html">
{`<!DOCTYPE html>
<html data-theme="light">
<head>
  <link rel="stylesheet" href="lila.css" />
  <script src="lila.js"><\/script>
</head>
<body>
  <header>
    <nav>
      <h2>My App</h2>
      <button>Login</button>
    </nav>
  </header>

  <main>
    <article>
      <h1>Welcome</h1>
      <p>This page uses zero CSS classes.</p>
      <button>Get Started</button>
    </article>
  </main>

  <footer>
    <p>© 2024 My App</p>
  </footer>
</body>
</html>`}
        </CodeBlock>

        <h3>What Lila applies automatically:</h3>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Default style</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>body</code></td><td>Surface background, flex column, min-height 100vh</td></tr>
            <tr><td><code>header</code></td><td>Background color + shadow</td></tr>
            <tr><td><code>header &gt; nav</code></td><td>Container width, flex space-between</td></tr>
            <tr><td><code>main</code></td><td>Container width, flex: 1</td></tr>
            <tr><td><code>footer</code></td><td>Centered text, border-top</td></tr>
            <tr><td><code>article / section</code></td><td>Card-like with bg, padding, shadow</td></tr>
            <tr><td><code>button</code></td><td>Primary style + ripple effect</td></tr>
            <tr><td><code>input / select / textarea</code></td><td>Full width, outlined, focus ring</td></tr>
            <tr><td><code>aside</code> (in main)</td><td>Sticky sidebar, mobile drawer</td></tr>
            <tr><td><code>.flex</code></td><td>display: flex + gap: 1rem</td></tr>
            <tr><td><code>.grid</code></td><td>Auto-fit grid + gap: 1rem</td></tr>
          </tbody>
        </table>
      </article>

      <article>
        <h2>Dark Mode</h2>
        <p>Toggle between light and dark themes by changing the <code>data-theme</code> attribute:</p>
        <CodeBlock language="html">
{`<!-- Light (default) -->
<html data-theme="light">

<!-- Dark -->
<html data-theme="dark">`}
        </CodeBlock>
        <CodeBlock language="javascript">
{`// Toggle with JavaScript
document.documentElement.setAttribute(
  'data-theme',
  document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
);`}
        </CodeBlock>
      </article>
    </>
  );
}
