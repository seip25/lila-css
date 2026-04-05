import CodeBlock from '../components/CodeBlock';

export default function Shadows() {
  return (
    <article>
      <h2>Shadows</h2>
      <p>
        Apply shadows using utility classes or CSS variables. Shadows adapt automatically in dark mode.
      </p>

      <h3>Shadow Utilities</h3>
      <div className="example">
        <div className="grid cols-3">
          <div className="card shadow text-center">.shadow</div>
          <div className="card shadow-md text-center">.shadow-md</div>
          <div className="card shadow-none text-center">.shadow-none</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-none">No shadow</div>`}
      </CodeBlock>

      <h3>CSS Variables</h3>
      <p>Use shadow variables for custom elements:</p>
      <CodeBlock language="css">
{`/* Available variables */
var(--shadow)    /* 0 1px 2px 0 rgb(0 0 0 / 0.05) */
var(--shadow-md) /* 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) */

/* Usage */
.my-element {
  box-shadow: var(--shadow-md);
}

/* Dark mode: shadows automatically lighten */
[data-theme="dark"] .shadow {
  box-shadow: 0 1px 1px 0 rgb(255 255 255 / 0.1);
}`}
      </CodeBlock>

      <h3>Elements with Default Shadow</h3>
      <table>
        <thead>
          <tr><th>Element</th><th>Shadow</th></tr>
        </thead>
        <tbody>
          <tr><td><code>article</code>, <code>section</code>, <code>.card</code></td><td>var(--shadow)</td></tr>
          <tr><td><code>header</code></td><td>var(--shadow)</td></tr>
          <tr><td><code>.dropdown-content</code></td><td>var(--shadow-md)</td></tr>
          <tr><td><code>dialog &gt; article</code></td><td>var(--shadow-md)</td></tr>
          <tr><td><code>.fab</code></td><td>Custom elevation</td></tr>
        </tbody>
      </table>
    </article>
  );
}
