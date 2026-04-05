import { useRef } from 'react';
import CodeBlock from '../components/CodeBlock';

export default function Dialog() {
  const commonDialogRef = useRef(null);
  const dialogFullRef = useRef(null);

  return (
    <article>
      <h2>Dialog (Modal)</h2>
      <p>
        Semantic modals using the <code>&lt;dialog&gt;</code> element. Includes a fullscreen variant.
      </p>
      <div className="example ">
        <div className="flex gap-2">
          <button onClick={() => commonDialogRef.current?.showModal()}>Open Dialog</button>
          <button className="secondary" onClick={() => dialogFullRef.current?.showModal()}>
            Open Fullscreen
          </button>
        </div>

        <dialog ref={commonDialogRef} className="w-400-px w-100">
          <article>
            <header className="flex items-center between">
              <h4>Dialog Title</h4>
              <button className="ghost" onClick={() => commonDialogRef.current?.close()}>X</button>
            </header>
            <p>Dialog content goes here.</p>
            <footer className="flex between items-center">
              <button className="ghost" onClick={() => commonDialogRef.current?.close()}>Close</button>
              <button onClick={() => commonDialogRef.current?.close()}>
                <strong>Send</strong>
              </button>
            </footer>
          </article>
        </dialog>

        <dialog ref={dialogFullRef} className="dialog-full">
          <article>
            <header>
              <div className="container flex items-center between">
                <h2>Fullscreen Dialog</h2>
                <button className="destructive" onClick={() => dialogFullRef.current?.close()}>
                  Close
                </button>
              </div>
            </header>
            <main className="container flex-col justify-center items-center text-center">
              <p>An immersive dialog experience.</p>
            </main>
          </article>
        </dialog>
      </div>
      <CodeBlock language="html">
{`<dialog id="myDialog" class="w-400-px w-100">
    <article>
      ... 
      <footer class="flex between items-center">
        <button class="ghost" onclick="myDialog.close()">Close</button>
        <button onclick="myDialog.close()"   >Send</button>
      </footer>
    </article>
</dialog>`}
      </CodeBlock>
    </article>
  );
}
