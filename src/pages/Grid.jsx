import CodeBlock from '../components/CodeBlock';

export default function Grid() {
  return (
    <article>
      <h2>Grid System</h2>
      <p>
        A responsive grid using CSS Grid. Add <code>.grid</code> for an auto-fit grid, or use
        <code>.cols-2</code>, <code>.cols-3</code>, <code>.cols-4</code> for fixed columns.
        Grid defaults to <code>gap: 1rem</code>.
      </p>

      <h3>Auto-fit Grid</h3>
      <p>
        Without a <code>.cols-*</code> class, <code>.grid</code> uses <code>auto-fit</code> with
        a minimum column width of 250px. Items wrap automatically.
      </p>
      <div className="example">
        <div className="grid">
          <div className="card bg-surface text-center">1</div>
          <div className="card bg-surface text-center">2</div>
          <div className="card bg-surface text-center">3</div>
          <div className="card bg-surface text-center">4</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="grid">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
</div>`}
      </CodeBlock>

      <h3>Fixed Columns</h3>
      <p>
        Use <code>.cols-2</code>, <code>.cols-3</code>, or <code>.cols-4</code> for a fixed number of columns.
        On mobile (≤768px) they collapse to 1 column.
      </p>
      <div className="example">
        <p><strong>2 Columns:</strong></p>
        <div className="grid cols-2">
          <div className="card bg-surface text-center">1</div>
          <div className="card bg-surface text-center">2</div>
        </div>
        <p><strong>3 Columns:</strong></p>
        <div className="grid cols-3">
          <div className="card bg-surface text-center">1</div>
          <div className="card bg-surface text-center">2</div>
          <div className="card bg-surface text-center">3</div>
        </div>
        <p><strong>4 Columns:</strong></p>
        <div className="grid cols-4">
          <div className="card bg-surface text-center">1</div>
          <div className="card bg-surface text-center">2</div>
          <div className="card bg-surface text-center">3</div>
          <div className="card bg-surface text-center">4</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="grid cols-2">...</div>
<div class="grid cols-3">...</div>
<div class="grid cols-4">...</div>`}
      </CodeBlock>

      <h3>Custom Gap</h3>
      <p>
        The default gap is <code>1rem</code>. Override with <code>.gap-0</code>, <code>.gap-1</code>,
        <code>.gap-2</code>, <code>.gap-3</code>, or <code>.no-gap</code>.
      </p>
      <div className="example">
        <div className="grid cols-3 gap-2">
          <div className="card bg-surface text-center">.gap-2</div>
          <div className="card bg-surface text-center">.gap-2</div>
          <div className="card bg-surface text-center">.gap-2</div>
        </div>
        <div className="grid cols-3 no-gap mt-4">
          <div className="card bg-surface text-center">.no-gap</div>
          <div className="card bg-surface text-center">.no-gap</div>
          <div className="card bg-surface text-center">.no-gap</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="grid cols-3 gap-2">...</div>
<div class="grid cols-3 no-gap">...</div>
<div class="grid cols-3 gap-0">...</div>`}
      </CodeBlock>

      <h3>CSS Definition</h3>
      <CodeBlock language="css">
{`.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
}

.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }
.cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Mobile: all collapse to 1 column */
@media (max-width: 768px) {
  .cols-2, .cols-3, .cols-4 {
    grid-template-columns: 1fr;
  }
}`}
      </CodeBlock>
    </article>
  );
}
