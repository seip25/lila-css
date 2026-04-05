export default function TableDoc() {
  return (
    <article>
      <h2>Table</h2>
      <p>Responsive and clean tables.</p>
      <div className="example ">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ana</td>
              <td className="text-success">Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Luis</td>
              <td className="text-success">Active</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Marta</td>
              <td className="text-error">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
