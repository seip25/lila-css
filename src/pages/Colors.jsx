import CodeBlock from '../components/CodeBlock';

const colorFamilies = [
  { name: 'gray', shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'red', shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'yellow', shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'green', shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'blue', shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'indigo', shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'violet', shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
];

export default function Colors() {
  return (
    <article>
      <h2>Color Utilities</h2>
      <p>
        Apply colors using semantic classes like <code>.bg-primary</code> and <code>.text-success</code>,
        or use the full palette.
      </p>
      <div className="example ">
        <div className="grid gap-2">
          <div className="card bg-primary text-center">
            <p>Primary</p>
          </div>
          <div className="card bg-secondary text-center">
            <p>Secondary</p>
          </div>
          <div className="card bg-background text-center">
            <p>Background</p>
          </div>
          <div className="card bg-surface text-center">
            <p>Surface</p>
          </div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="bg-primary">...</div>
<p class="text-success">Success message</p>
<div class="bg-red-500 text-red-50">...</div>`}
      </CodeBlock>

      <h4>Full Color Palette</h4>
      {colorFamilies.map((family) => (
        <div key={family.name} className="grid cols-3 ">
          {family.shades.map((shade) => (
            <div key={shade} className={`card bg-${family.name}-${shade} text-center`}>
              <p className={`text-${family.name}-${shade >= 500 ? '50' : '900'}`}>{shade}</p>
            </div>
          ))}
        </div>
      ))}
    </article>
  );
}
