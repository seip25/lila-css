import CodeBlock from '../components/CodeBlock';

export default function TableDoc() {
  return (
    <article>
      <h2>Table</h2>
      <p>
        Tables are styled automatically — just use standard HTML <code>&lt;table&gt;</code> markup. 
        Rows highlight on hover.
      </p>

      <h3>Basic Table</h3>
      <div className="example">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ana López</td>
              <td>Admin</td>
              <td className="text-success">Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Luis García</td>
              <td>Editor</td>
              <td className="text-success">Active</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Marta Ruiz</td>
              <td>Viewer</td>
              <td className="text-error">Inactive</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Carlos Díaz</td>
              <td>Editor</td>
              <td className="text-yellow">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeBlock language="html">
{`<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ana López</td>
      <td>Admin</td>
      <td class="text-success">Active</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Luis García</td>
      <td>Editor</td>
      <td class="text-error">Inactive</td>
    </tr>
  </tbody>
</table>`}
      </CodeBlock>

      <h3>Features</h3>
      <ul>
        <li>Full-width by default</li>
        <li>Header cells (<code>th</code>) are bold with font-weight 600</li>
        <li>Rows have bottom borders for separation</li>
        <li>Last row has no bottom border</li>
        <li>Rows highlight on hover ({`var(--gray-50)`} light / {`var(--gray-800)`} dark)</li>
        <li>Combine with color utilities: <code>.text-success</code>, <code>.text-error</code>, <code>.text-yellow</code></li>
      </ul>

      <h3>CSS Applied</h3>
      <CodeBlock language="css">
{`table {
  width: 100%;
  border-collapse: collapse;
}

td, th {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

tbody tr:hover {
  background-color: var(--gray-50);
}`}
      </CodeBlock>
    </article>
  );
}
