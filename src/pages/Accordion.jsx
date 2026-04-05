import CodeBlock from '../components/CodeBlock';

export default function Accordion() {
  return (
    <article>
      <h2>Accordion</h2>
      <p>
        A simple, semantic accordion using <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code>.
      </p>
      <div className="example ">
        <details>
          <summary>Click to expand</summary>
          <p>Here is the content of the accordion.</p>
        </details>
        <details open>
          <summary>Open by default</summary>
          <p>This content is visible initially.</p>
        </details>
      </div>
      <CodeBlock language="html">
{`<details>
  <summary>Title</summary>
  <p>Content...</p>
</details>`}
      </CodeBlock>
    </article>
  );
}
