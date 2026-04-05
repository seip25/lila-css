import CodeBlock from '../components/CodeBlock';

export default function Spacing() {
  return (
    <article>
      <h2>Spacing Utilities</h2>
      <p>
        Comprehensive utilities for gaps, margins, and paddings. Values follow a consistent scale:
        <code>1</code> = 0.25rem, <code>2</code> = 0.5rem, <code>3</code> = 0.75rem, <code>4</code> = 1rem, <code>8</code> = 2rem.
      </p>

      <h3>Gap</h3>
      <p>
        Control the gap between flex/grid children. Both <code>.flex</code> and <code>.grid</code> default to
        <code>gap: 1rem</code>. Use these to override:
      </p>
      <div className="example">
        <p><strong>.gap-1</strong> (0.25rem):</p>
        <div className="flex gap-1">
          <div className="card bg-secondary text-center p-2">A</div>
          <div className="card bg-secondary text-center p-2">B</div>
          <div className="card bg-secondary text-center p-2">C</div>
        </div>
        <p className="mt-4"><strong>.gap-2</strong> (0.5rem):</p>
        <div className="flex gap-2">
          <div className="card bg-secondary text-center p-2">A</div>
          <div className="card bg-secondary text-center p-2">B</div>
          <div className="card bg-secondary text-center p-2">C</div>
        </div>
        <p className="mt-4"><strong>.no-gap</strong> (0):</p>
        <div className="flex no-gap">
          <div className="card bg-secondary text-center p-2">A</div>
          <div className="card bg-secondary text-center p-2">B</div>
          <div className="card bg-secondary text-center p-2">C</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="flex gap-1">...</div>   <!-- 0.25rem -->
<div class="flex gap-2">...</div>   <!-- 0.5rem  -->
<div class="flex gap-3">...</div>   <!-- 0.75rem -->
<div class="flex">...</div>         <!-- 1rem (default) -->
<div class="flex no-gap">...</div>  <!-- 0 -->
<div class="flex gap-0">...</div>   <!-- 0 -->`}
      </CodeBlock>

      <h3>Margin</h3>
      <div className="example">
        <div className="card bg-secondary p-2 mt-1">mt-1 (margin-top: 0.25rem)</div>
        <div className="card bg-secondary p-2 mt-2">mt-2 (margin-top: 0.5rem)</div>
        <div className="card bg-secondary p-2 mt-4">mt-4 (margin-top: 1rem)</div>
        <div className="card bg-secondary p-2 mt-8">mt-8 (margin-top: 2rem)</div>
      </div>
      <CodeBlock language="html">
{`<!-- Margin Top -->
.mt-1  .mt-2  .mt-3  .mt-4  .mt-8  .mt-auto

<!-- Margin Bottom -->
.mb-1  .mb-2  .mb-3  .mb-4  .mb-auto

<!-- Reset -->
.no-margin`}
      </CodeBlock>

      <h3>Padding</h3>
      <div className="example">
        <div className="flex flex-wrap gap-2">
          <div className="card bg-secondary p-1">p-1</div>
          <div className="card bg-secondary p-2">p-2</div>
          <div className="card bg-secondary p-4">p-4</div>
          <div className="card bg-secondary px-4 py-1">px-4 py-1</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- All sides -->
.p-1  .p-2  .p-3  .p-4

<!-- Horizontal (left + right) -->
.px-1  .px-2  .px-3  .px-4

<!-- Vertical (top + bottom) -->
.py-1  .py-2  .py-3  .py-4

<!-- Bottom only -->
.pb-1  .pb-2  .pb-3  .pb-4

<!-- Reset -->
.no-padding`}
      </CodeBlock>

      <h3>Scale Reference</h3>
      <table>
        <thead>
          <tr><th>Suffix</th><th>Value</th></tr>
        </thead>
        <tbody>
          <tr><td>-1</td><td>0.25rem (4px)</td></tr>
          <tr><td>-2</td><td>0.5rem (8px)</td></tr>
          <tr><td>-3</td><td>0.75rem (12px)</td></tr>
          <tr><td>-4</td><td>1rem (16px)</td></tr>
          <tr><td>-8</td><td>2rem (32px)</td></tr>
          <tr><td>-auto</td><td>auto</td></tr>
        </tbody>
      </table>
    </article>
  );
}
