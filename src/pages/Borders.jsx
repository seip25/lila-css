import CodeBlock from '../components/CodeBlock';

export default function Borders() {
  return (
    <article>
      <h2>Borders</h2>
      <p>Control border-radius and add borders with utility classes.</p>
      <div className="example ">
        <div className="grid cols-4 ">
          <div className="card text-center">default</div>
          <div className="card text-center rounded-lg">.rounded-lg</div>
          <div className="card text-center rounded-full">.rounded-full</div>
          <div className="border rounded text-center p-4">.border</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="rounded-lg">...</div>
<div class="border">...</div>`}
      </CodeBlock>
    </article>
  );
}
