import CodeBlock from '../components/CodeBlock';

export default function Borders() {
  return (
    <article>
      <h2>Borders & Radius</h2>
      <p>
        Control border-radius, add borders, and use colored border utilities.
      </p>

      <h3>Border Radius</h3>
      <div className="example">
        <div className="grid cols-4">
          <div className="card bg-surface text-center p-4">default<br/><small>(--border-radius)</small></div>
          <div className="card bg-surface text-center rounded-lg p-4">.rounded-lg<br/><small>(--border-radius-lg)</small></div>
          <div className="card bg-surface text-center rounded-full p-4">.rounded-full<br/><small>(9999px)</small></div>
          <div className="card bg-surface text-center p-4" style={{ borderRadius: 0 }}>none</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="rounded">Default radius</div>
<div class="rounded-lg">Larger radius</div>
<div class="rounded-full">Pill shape</div>`}
      </CodeBlock>

      <h3>Border</h3>
      <div className="example">
        <div className="grid cols-3">
          <div className="border text-center p-4 rounded">.border</div>
          <div className="border-none text-center p-4 rounded">.border-none</div>
          <div className="border-red text-center p-4 rounded">.border-red</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Basic border -->
<div class="border">Bordered element</div>
<div class="border-none">No border</div>

<!-- Colored borders (shorthand, uses -500 shade) -->
<div class="border-red">Red border</div>
<div class="border-blue">Blue border</div>
<div class="border-green">Green border</div>
<div class="border-yellow">Yellow border</div>
<div class="border-violet">Violet border</div>
<div class="border-indigo">Indigo border</div>
<div class="border-gray">Gray border</div>`}
      </CodeBlock>

      <h3>Colored Borders (All Shades)</h3>
      <p>Use specific shades with <code>.border-{'{color}'}-{'{shade}'}</code>:</p>
      <div className="example">
        <div className="grid cols-4">
          <div className="border-blue-200 text-center p-4 rounded">.border-blue-200</div>
          <div className="border-blue-500 text-center p-4 rounded">.border-blue-500</div>
          <div className="border-red-300 text-center p-4 rounded">.border-red-300</div>
          <div className="border-green-600 text-center p-4 rounded">.border-green-600</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Specific shade borders -->
<div class="border-blue-200">Light blue border</div>
<div class="border-blue-500">Medium blue border</div>
<div class="border-red-300">Light red border</div>
<div class="border-green-600">Dark green border</div>

<!-- Available: all color-shade combinations -->
<!-- .border-{color}-{50|100|200|300|400|500|600|700|800|900} -->`}
      </CodeBlock>

      <h3>CSS Variables</h3>
      <CodeBlock language="css">
{`/* Border radius tokens */
--border-radius: 0.5rem;
--border-radius-lg: 0.75rem;

/* Border color token */
--border-color: var(--gray-100);  /* light mode */
--border-color: var(--gray-800);  /* dark mode */

/* Default border */
--border: 1px solid var(--gray-200);`}
      </CodeBlock>
    </article>
  );
}
