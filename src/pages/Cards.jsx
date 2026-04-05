import CodeBlock from '../components/CodeBlock';

export default function Cards() {
  return (
    <div>
      <h2>Card / Content Block</h2>
      <p>
        Use <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, or a{' '}
        <code>&lt;div class="card"&gt;</code> to create bordered content blocks. They all share the same
        base style.
      </p>
      <div className="example border grid">
        <article>
          <h4>This is an Article</h4>
          <p>Used for self-contained content.</p>
        </article>
        <article>
          <header>
            <img src="https://placehold.co/600x400" alt="" />
          </header>
          <p>My Card</p>
          <footer>
            <p>Footer</p>
          </footer>
        </article>
      </div>
      <CodeBlock language="html">
{`<article>
  <h4>Title</h4>
  <p>Content...</p>
</article>



<div class="card">
  ...
</div>


<article>
  <header>
     <img src="https://placehold.co/600x400" alt="" /> 
    <p>Content...</p>
  </header>
  <footer>
    <p>Footer</p>
  </footer>
</article>

<div class="card">
  ...
</div>

><article class="border">
  <h4>Title</h4>
  <p>Content...</p>
</article>`}
      </CodeBlock>
    </div>
  );
}
