import CodeBlock from '../components/CodeBlock';

export default function Spacing() {
  return (
    <article>
      <h2>Spacing Utilities</h2>
      <p>Utilities for gaps, margins, and paddings.</p>
      <div className="example ">
        <div className="flex gap-2">
          <div className="card p-2 bg-secondary">.p-2</div>
          <div className="card p-4 mt-4 bg-secondary">.p-4 .mt-4</div>
        </div>
      </div>
      <CodeBlock language="css">
{`/* Gap (for flex/grid) */
.gap-1, .gap-2, .gap-3, .

/* Margin */
.mt-4, .mb-4

/* Padding */
.p-4`}
      </CodeBlock>
    </article>
  );
}
