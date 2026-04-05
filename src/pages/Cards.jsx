import CodeBlock from '../components/CodeBlock';

export default function Cards() {
  return (
    <article>
      <h2>Card / Content Block</h2>
      <p>
        Use <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, or <code>.card</code> to create
        content blocks. They all share the same base style: background, padding, border-radius, and shadow.
      </p>

      <h3>Semantic Cards</h3>
      <p>Just use HTML tags — no classes needed:</p>
      <div className="example grid cols-2">
        <article>
          <h4>Article Card</h4>
          <p>Self-contained content block using <code>&lt;article&gt;</code>.</p>
        </article>
        <section>
          <h4>Section Card</h4>
          <p>A thematic grouping using <code>&lt;section&gt;</code>.</p>
        </section>
      </div>
      <CodeBlock language="html">
{`<article>
  <h4>Article Card</h4>
  <p>Content...</p>
</article>

<section>
  <h4>Section Card</h4>
  <p>Content...</p>
</section>`}
      </CodeBlock>

      <h3>Card with Header & Footer</h3>
      <p>
        Add <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> inside for structured content.
        Images in headers get full-bleed treatment.
      </p>
      <div className="example grid cols-2">
        <article>
          <header>
            <img src="https://placehold.co/600x300" alt="Card image" />
          </header>
          <h4>Card Title</h4>
          <p>Card content with an image header.</p>
          <footer>
            <button className="ghost">Cancel</button>
            <button>Save</button>
          </footer>
        </article>
        <article>
          <header>
            <h3>Dashboard</h3>
          </header>
          <p>Card with a text header and action footer.</p>
          <footer>
            <a role="button" className="secondary">View Details</a>
          </footer>
        </article>
      </div>
      <CodeBlock language="html">
{`<article>
  <header>
    <img src="photo.jpg" alt="" />
  </header>
  <h4>Card Title</h4>
  <p>Content...</p>
  <footer>
    <button class="ghost">Cancel</button>
    <button>Save</button>
  </footer>
</article>

<article>
  <header>
    <h3>Dashboard</h3>
  </header>
  <p>Content...</p>
  <footer>
    <a role="button" class="secondary">View Details</a>
  </footer>
</article>`}
      </CodeBlock>

      <h3>Card with .card Class</h3>
      <p>Use <code>.card</code> on a <code>&lt;div&gt;</code> for the same styling:</p>
      <div className="example">
        <div className="card">
          <h4>Div Card</h4>
          <p>Same styling as article/section, using a <code>.card</code> class.</p>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="card">
  <h4>Title</h4>
  <p>Content...</p>
</div>`}
      </CodeBlock>

      <h3>Card Variants</h3>
      <div className="example grid cols-2">
        <article className="secondary">
          <h4>Surface Card</h4>
          <p>Uses <code>.secondary</code> or <code>.surface</code> for a muted background.</p>
        </article>
        <article className="border">
          <h4>Bordered Card</h4>
          <p>Add <code>.border</code> for an explicit border.</p>
        </article>
      </div>
      <CodeBlock language="html">
{`<!-- Surface variant -->
<article class="secondary">...</article>
<article class="surface">...</article>

<!-- With explicit border -->
<article class="border">...</article>

<!-- Shadow variants -->
<article class="shadow">...</article>
<article class="shadow-none">...</article>`}
      </CodeBlock>

      <h3>CSS Applied</h3>
      <CodeBlock language="css">
{`article, section, .card {
  background-color: var(--background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
}`}
      </CodeBlock>
    </article>
  );
}
