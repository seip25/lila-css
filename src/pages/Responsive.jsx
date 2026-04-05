import CodeBlock from '../components/CodeBlock';

export default function Responsive() {
  return (
    <article>
      <h2>Responsive Visibility</h2>
      <p>Show or hide elements based on screen size using responsive utility classes.</p>
      <div className="example ">
        <div className="card bg-surface text-center visible-sm p-4">{'Visible on SM (<640px)'}</div>
        <div className="card bg-surface text-center visible-md p-4">Visible on MD (641px - 1024px)</div>
        <div className="card bg-surface text-center visible-lg p-4">{'Visible on LG (>1025px)'}</div>
        <div className="card bg-error text-white text-center hidden-md p-4">Hidden on MD</div>
      </div>
      <CodeBlock language="html">
{`<!-- Show only on specific breakpoints -->
<div class="visible-sm">Mobile only</div>
<div class="visible-md">Tablet only</div>
<div class="visible-lg">Desktop only</div>

<!-- Hide on specific breakpoints -->
<div class="hidden-sm">Hidden on Mobile</div>
<div class="hidden-md">Hidden on Tablet</div>
<div class="hidden-lg">Hidden on Desktop</div>`}
      </CodeBlock>
    </article>
  );
}
