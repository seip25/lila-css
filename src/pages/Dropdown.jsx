import CodeBlock from '../components/CodeBlock';

export default function Dropdown() {
  return (
    <article>
      <h2>Dropdown</h2>
      <p>
        A CSS-only dropdown menu, activated on hover. No JavaScript needed.
        Use <code>.dropdown</code> as the wrapper, <code>.dropdown-toggle</code> on the trigger button,
        and <code>.dropdown-content</code> for the menu.
      </p>

      <h3>Basic Dropdown</h3>
      <div className="example">
        <div className="dropdown">
          <button className="dropdown-toggle">Menu</button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">Profile</a>
            <a href="#" className="dropdown-item">Settings</a>
            <a href="#" className="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <div class="dropdown-content">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Logout</a>
  </div>
</div>`}
      </CodeBlock>

      <h3>Button Variants</h3>
      <div className="example">
        <div className="flex flex-wrap gap-2">
          <div className="dropdown">
            <button className="dropdown-toggle">Primary</button>
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">Item 1</a>
              <a href="#" className="dropdown-item">Item 2</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="secondary dropdown-toggle">Secondary</button>
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">Item 1</a>
              <a href="#" className="dropdown-item">Item 2</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="outline dropdown-toggle">Outline</button>
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">Item 1</a>
              <a href="#" className="dropdown-item">Item 2</a>
            </div>
          </div>
        </div>
      </div>
      <CodeBlock language="html">
{`<button class="dropdown-toggle">Primary</button>
<button class="secondary dropdown-toggle">Secondary</button>
<button class="outline dropdown-toggle">Outline</button>`}
      </CodeBlock>

      <h3>Position Variants</h3>
      <p>
        Control where the menu appears by adding a position class to <code>.dropdown-content</code>:
      </p>
      <table>
        <thead>
          <tr><th>Class</th><th>Position</th></tr>
        </thead>
        <tbody>
          <tr><td><code>.bottom</code> (default)</td><td>Below, aligned left</td></tr>
          <tr><td><code>.bottom-right</code></td><td>Below, aligned right</td></tr>
          <tr><td><code>.top</code> / <code>.up</code></td><td>Above, aligned left</td></tr>
          <tr><td><code>.top-right</code> / <code>.up-right</code></td><td>Above, aligned right</td></tr>
          <tr><td><code>.left</code></td><td>Left side</td></tr>
          <tr><td><code>.right</code></td><td>Right side</td></tr>
        </tbody>
      </table>
      <CodeBlock language="html">
{`<!-- Open upward -->
<div class="dropdown-content top">...</div>

<!-- Open to the right -->
<div class="dropdown-content right">...</div>

<!-- Open below, aligned right -->
<div class="dropdown-content bottom-right">...</div>`}
      </CodeBlock>

      <h3>CSS Applied</h3>
      <CodeBlock language="css">
{`.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle::after {
  content: "▾";
  margin-left: 0.5rem;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--surface);
  min-width: 200px;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius);
  z-index: 1000;
}

.dropdown:hover .dropdown-content {
  display: block;
}`}
      </CodeBlock>
    </article>
  );
}
