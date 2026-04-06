import { useRef } from 'react';
import CodeBlock from '../components/CodeBlock';

export default function Dialog() {
  const commonDialogRef = useRef(null);
  const dialogFullRef = useRef(null);

  return (
    <article>
      <h2>Dialog (Modal)</h2>
      <p>
        Semantic modals using the native <code>&lt;dialog&gt;</code> element. No libraries needed.
        Use <code>.showModal()</code> to open and <code>.close()</code> to close.
        Includes backdrop blur and a fullscreen variant.
      </p>

      <h3>Standard Dialog</h3>
      <div className="example">
        <button onClick={() => commonDialogRef.current?.showModal()}>Open Dialog</button>

        <dialog ref={commonDialogRef}>
          <article>
            <header className="flex items-center between">
              <h4>Confirm Action</h4>
              <button className="ghost" onClick={() => commonDialogRef.current?.close()}>✕</button>
            </header>
            <p>Are you sure you want to proceed? This action cannot be undone.</p>
            <footer>
              <button className="ghost" onClick={() => commonDialogRef.current?.close()}>Cancel</button>
              <button onClick={() => commonDialogRef.current?.close()}>Confirm</button>
            </footer>
          </article>
        </dialog>
      </div>
      <CodeBlock language="html">
{`<dialog id="myDialog">
  <article>
    <header class="flex items-center between">
      <h4>Dialog Title</h4>
      <button class="ghost" onclick="myDialog.close()">✕</button>
    </header>
    <p>Dialog content goes here.</p>
    <footer>
      <button class="ghost" onclick="myDialog.close()">Cancel</button>
      <button onclick="myDialog.close()">Confirm</button>
    </footer>
  </article>
</dialog>

<!-- Open with JavaScript -->
<button onclick="myDialog.showModal()">Open Dialog</button>`}
      </CodeBlock>

      <h3>Fullscreen Dialog</h3>
      <p>Add <code>.dialog-full</code> to the dialog for an immersive fullscreen experience:</p>
      <div className="example">
        <button className="secondary" onClick={() => dialogFullRef.current?.showModal()}>
          Open Fullscreen
        </button>

        <dialog ref={dialogFullRef} className="dialog-full">
          <article>
            <header>
              <div className="container flex items-center between">
                <h2>Fullscreen Dialog</h2>
             
              </div>
            </header>
            <main className="container text-center">
              <p>An immersive dialog experience that covers the entire screen.</p>
              <p>Perfect for complex forms, media viewers, or multi-step workflows.</p>
            </main>
            <footer>
                 <button className="destructive" onClick={() => dialogFullRef.current?.close()}>
                  Close
                </button>
            </footer>
          </article>
        </dialog>
      </div>
      <CodeBlock language="html">
{`<dialog id="fullDialog" class="dialog-full">
  <article>
    <header>
      <div class="container flex items-center between">
        <h2>Title</h2>
        <button class="destructive" onclick="fullDialog.close()">Close</button>
      </div>
    </header>
    <main class="container">
      <p>Full screen content...</p>
    </main>
  </article>
</dialog>`}
      </CodeBlock>

      <h3>Features</h3>
      <ul>
        <li>Native <code>&lt;dialog&gt;</code> — accessible, keyboard friendly, supports Escape to close</li>
        <li>Blurred backdrop (<code>backdrop-filter: blur(3px)</code>)</li>
        <li>Max-width: 75vw on desktop, 100% on mobile</li>
        <li>Wrap content in <code>&lt;article&gt;</code> for card-like styling</li>
        <li>Use <code>.dialog-full</code> for fullscreen variant</li>
      </ul>

      <h3>CSS Applied</h3>
      <CodeBlock language="css">
{`dialog {
  border: none;
  border-radius: var(--border-radius);
  padding: 0;
  background: transparent;
  max-width: 75vw;
  margin: auto;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}

dialog.dialog-full {
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 0;
}`}
      </CodeBlock>
    </article>
  );
}
