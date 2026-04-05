import CodeBlock from '../components/CodeBlock';

export default function Container() {
  return (
    <article>
      <h2>Container</h2>
      <p>The <code>.container</code> class centers content with a max-width of 1120px.</p>
      <CodeBlock language="html">
{`<div class="container">
  Your content here...
</div>`}
      </CodeBlock>
      <br />
      <h5>Lila.css core</h5>
      <CodeBlock language="css">
{`.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }
}
@media (max-width: 1440px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 1440px) {
  .container {
    max-width: 95%;
  }
}`}
      </CodeBlock>
    </article>
  );
}
