import CodeBlock from '../components/CodeBlock';

export default function Snackbar() {
  const showSnackbar = (type) => {
    if (window.lila) {
      window.lila('snackbar', {
        message: `This is a ${type} snackbar!`,
        duration: 3000,
        type,
      });
    }
  };

  return (
    <article>
      <h2>Snackbar</h2>
      <p>
        Brief notification messages that appear at the bottom of the screen and auto-dismiss.
        Powered by <code>lila.js</code>. Call <code>lila('snackbar', options)</code> from JavaScript.
      </p>

      <h3>Types</h3>
      <p>Click each button to see the snackbar type:</p>
      <div className="example">
        <div className="flex flex-wrap gap-2">
          <button className="bg-green" onClick={() => showSnackbar('success')}>Success</button>
          <button className="bg-red" onClick={() => showSnackbar('error')}>Error</button>
          <button className="bg-yellow" onClick={() => showSnackbar('warning')}>Warning</button>
          <button onClick={() => showSnackbar('info')}>Info</button>
          <button className="secondary" onClick={() => showSnackbar('secondary')}>Secondary</button>
        </div>
      </div>

      <h3>Usage</h3>
      <CodeBlock language="html">
{`<!-- 1. Include lila.js -->
<script src="lila.js"><\/script>

<!-- 2. Call from JavaScript -->
<script>
  lila('snackbar', {
    message: 'Changes saved successfully!',
    type: 'success',     // success | error | warning | info | secondary
    duration: 3000       // ms (default: 3000)
  });
<\/script>`}
      </CodeBlock>

      <h3>Inline Example</h3>
      <CodeBlock language="html">
{`<button onclick="lila('snackbar', {
  message: 'Item deleted',
  type: 'error',
  duration: 5000
})">Delete</button>

<button onclick="lila('snackbar', {
  message: 'Settings updated',
  type: 'success'
})">Save</button>`}
      </CodeBlock>

      <h3>Options</h3>
      <table>
        <thead>
          <tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>message</code></td><td>string</td><td><code>""</code></td><td>The text to display</td></tr>
          <tr><td><code>type</code></td><td>string</td><td><code>"info"</code></td><td>success, error, warning, info, secondary</td></tr>
          <tr><td><code>duration</code></td><td>number</td><td><code>3000</code></td><td>Auto-dismiss time in ms</td></tr>
        </tbody>
      </table>

      <h3>Type Colors</h3>
      <table>
        <thead>
          <tr><th>Type</th><th>Color</th></tr>
        </thead>
        <tbody>
          <tr><td><code>success</code></td><td>Green (--green-600)</td></tr>
          <tr><td><code>error</code></td><td>Red (--destructive)</td></tr>
          <tr><td><code>warning</code></td><td>Yellow (--yellow-600)</td></tr>
          <tr><td><code>info</code></td><td>Primary (--primary)</td></tr>
          <tr><td><code>secondary</code></td><td>Secondary (--secondary)</td></tr>
        </tbody>
      </table>
    </article>
  );
}
