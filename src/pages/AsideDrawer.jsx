import CodeBlock from '../components/CodeBlock';

export default function AsideDrawer() {
  return (
    <>
      <article>
        <h2>Aside & Drawer</h2>
        <p>
          Lila CSS provides native <code>&lt;aside&gt;</code> support inside <code>&lt;main&gt;</code>.
          On desktop, the aside acts as a sticky sidebar. On mobile screens (&lt;768px), the aside
          automatically hides and a slide-in drawer appears via <code>lila.js</code>.
        </p>

        <h3>Basic Usage</h3>
        <p>
          Simply place an <code>&lt;aside&gt;</code> as a direct child of <code>&lt;main&gt;</code>,
          followed by any content element. The layout is handled automatically:
        </p>
        <CodeBlock language="html">
{`<main>
  <aside>
    <h4>Navigation</h4>
    <a href="/page1">Page 1</a>
    <a href="/page2">Page 2</a>
    <a href="/page3">Page 3</a>
  </aside>
  <div>
    <!-- Your main content here -->
    <h1>Page Title</h1>
    <p>Content goes here...</p>
  </div>
</main>`}
        </CodeBlock>

        <h3>How It Works</h3>
        <details open>
          <summary>Desktop (≥768px)</summary>
          <p>
            <code>main:has(&gt; aside)</code> activates a flex layout automatically.
            The aside becomes a sticky sidebar (position: sticky) with a max-width of 280px.
            The content element (<code>main &gt; aside + *</code>) gets <code>flex: 1</code>.
          </p>
        </details>
        <details>
          <summary>Mobile (&lt;768px)</summary>
          <p>
            The aside is hidden via CSS. <code>lila.js</code> automatically detects the aside,
            creates a <strong>drawer overlay</strong> and a <strong>hamburger toggle (☰)</strong>
            in the header. Clicking the toggle slides the drawer from the left.
          </p>
        </details>

        <h3>Aside Heading Styles</h3>
        <p>
          All headings (h1-h6) inside <code>&lt;aside&gt;</code> are automatically styled
          as uppercase section labels with muted color and small font size — perfect for
          grouping navigation links.
        </p>

        <h3>Active Link Support</h3>
        <p>
          Add the class <code>.active</code> to any link inside the aside to highlight it
          with the primary color background:
        </p>
        <CodeBlock language="html">
{`<aside>
  <h4>Menu</h4>
  <a href="/home" class="active">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</aside>`}
        </CodeBlock>

        <h3>CSS Applied Automatically</h3>
        <CodeBlock language="css">
{`/* Sidebar layout */
main:has(> aside) {
  display: flex;
  gap: 1rem;
}

aside {
  position: sticky;
  top: 1rem;
  min-width: 200px;
  max-width: 280px;
  height: calc(100vh - 3rem);
  overflow-y: auto;
}

main > aside + * {
  flex: 1;
  min-width: 0;
}

/* Mobile: aside hidden, drawer takes over */
@media (max-width: 768px) {
  main > aside { display: none; }
}`}
        </CodeBlock>

        <h3>Drawer (lila.js)</h3>
        <p>
          The drawer is auto-initialized by <code>lila.js</code>. It clones the aside content
          into a fixed drawer panel with an overlay. No extra markup needed — just include
          <code>lila.js</code> and use <code>&lt;main&gt; &gt; &lt;aside&gt;</code>.
        </p>
        <CodeBlock language="html">
{`<!-- Just include lila.js — drawer is automatic -->
<script src="lila.js"></script>`}
        </CodeBlock>

        <h3>Opt-out</h3>
        <p>
          If you don't want the aside to act as a sidebar, you can override with utility classes:
        </p>
        <CodeBlock language="html">
{`<!-- Regular aside without sidebar behavior -->
<aside class="no-gap" style="position: static; max-width: none;">
  ...
</aside>`}
        </CodeBlock>
      </article>
    </>
  );
}
