import CodeBlock from '../components/CodeBlock';

export default function Dropdown() {
  return (
    <article>
      <h2>Dropdown</h2>
      <p>A CSS-only dropdown menu, activated on hover.</p>
      <div className="example ">
        <div className="dropdown">
          <button className="secondary dropdown-toggle">Dropdown</button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">Item 1</a>
            <a href="#" className="dropdown-item">Item 2</a>
            <a href="#" className="dropdown-item">Item 3</a>
          </div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <div class="dropdown-content">
    <a class="dropdown-item">...</a>
  </div>
</div>`}
      </CodeBlock>
    </article>
  );
}
