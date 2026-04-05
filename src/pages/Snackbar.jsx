import CodeBlock from '../components/CodeBlock';

export default function Snackbar() {
  const showSnackbar = (type) => {
    if (window.snackbar) {
      window.snackbar({
        message: 'Hello! This is a Lila CSS snackbar.',
        duration: 3000,
        type,
      });
    }
  };

  return (
    <article>
      <h2>Snackbar</h2>
      <p>
        Import lila.js and usage with lila('snackbar', {'{ ... }'})
        ('component', {'{ message...,duration...,type... }'})
      </p>
      <div className="example ">
        <div className="flex  ">
          <button className="primary" onClick={() => showSnackbar('success')}>Success</button>
          <button className="destructive" onClick={() => showSnackbar('error')}>Error</button>
          <button className="secondary text-blue-500" onClick={() => showSnackbar('warning')}>Warning</button>
          <button className="fill" onClick={() => showSnackbar('info')}>Info</button>
          <button className="secondary" onClick={() => showSnackbar('secondary')}>Secondary</button>
        </div>
      </div>
      <CodeBlock language="html">
{`<button class="primary" onclick="snackbar( {
                            message: 'Hello! This is a Lila CSS snackbar.',
                            duration: 3000,
                            type: 'success'
                        })">Show Snackbar</button>
<button class="primary" onclick="snackbar({
    message: 'Hello! This is a Lila CSS snackbar.',
    duration: 3000,
    type: 'error'
})">Show Snackbar</button>
<button class="primary" onclick="snackbar({
    message: 'Hello! This is a Lila CSS snackbar.',
    duration: 3000,
    type: 'warning'
})">Show Snackbar</button>
<button class="primary" onclick="snackbar({
    message: 'Hello! This is a Lila CSS snackbar.',
    duration: 3000,
    type: 'info'
})">Show Snackbar</button>`}
      </CodeBlock>
    </article>
  );
}
