import CodeBlock from '../components/CodeBlock';

export default function Shadows() {
  return (
    <article>
      <h2>Shadows</h2>
      <p>Apply shadows using the <code>.shadow</code> class or CSS variables for more control.</p>
      <div className="example ">
        <div className="grid cols-2 ">
          <div className="card shadow text-center">.shadow</div>
          <div className="card text-center" style={{ boxShadow: 'var(--shadow-md)' }}>shadow-md</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="shadow">...</div>
<div style="box-shadow: var(--shadow-md);">...</div>`}
      </CodeBlock>
    </article>
  );
}
