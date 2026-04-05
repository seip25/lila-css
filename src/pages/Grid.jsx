import CodeBlock from '../components/CodeBlock';

export default function Grid() {
  return (
    <article>
      <h2>Grid System</h2>
      <p>
        A responsive grid system using CSS Grid. Use <code>.grid</code> and column utilities like{' '}
        <code>.cols-2</code>, <code>.cols-3</code>.
      </p>
      <div className="example ">
        <div className="grid ">
          <div className="card bg-surface text-center">1</div>
          <div className="card bg-surface text-center">2</div>
          <div className="card bg-surface text-center">3</div>
        </div>
      </div>
      <CodeBlock language="html">
{`
Simple grid
<div  class="grid">
  <div class="card bg-surface text-center">1</div>
  <div class="card bg-surface text-center">2</div>
  <div class="card bg-surface text-center">3</div>
  <div class="card bg-surface text-center">4</div>
</div>  

cols-2 cols-3 cols-4  ...
<div class="grid cols-3  ">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`}
      </CodeBlock>
    </article>
  );
}
