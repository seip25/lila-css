import CodeBlock from '../components/CodeBlock';

export default function Buttons() {
  const handleShowSnackbar = () => {
    if (window.lila) {
      window.lila('snackbar', {
        message: 'Hello! This is a Lila CSS snackbar.',
        type: 'success',
        duration: 3000,
      });
    }
  };

  return (
    <article>
      <h2>Buttons</h2>
      <p>Various button styles for different actions. All buttons include an automatic <strong>ripple effect</strong> on click.</p>
      <div className="example">
        <div className="flex items-center  flex-wrap">
          <button>Primary</button>
          <button className="outline">Outline</button>
          <button className="secondary">Secondary</button>
          <button className="destructive">Destructive</button>
          <button className="ghost">Ghost</button>
          <button className="fill">Fill</button>
        </div>
      </div>
      <CodeBlock language="html">
{`<button>Primary</button>
<button class="outline">Outline</button>
<button class="secondary">Secondary</button>
<button class="destructive">Destructive</button>
<button class="ghost">Ghost</button>
<button class="fill">Fill</button>
<button class="fab">+</button>
<a role="button">Link button</a>
<a role="button" class="secondary">Link button secondary</a>`}
      </CodeBlock>

      <h3>Shorthand Color Buttons</h3>
      <p>
        Use <code>.bg-blue</code>, <code>.bg-red</code>, <code>.bg-green</code> etc. for quick colored buttons.
        For outline buttons with colored text, use <code>.text-blue</code>, <code>.text-red</code> etc.
      </p>
      <div className="example">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="bg-blue">Blue</button>
          <button className="bg-red">Red</button>
          <button className="bg-green">Green</button>
          <button className="bg-yellow">Yellow</button>
          <button className="bg-indigo">Indigo</button>
          <button className="bg-violet">Violet</button>
        </div>
        <br />
        <div className="flex items-center gap-2 flex-wrap">
          <button className="outline text-blue">Outline Blue</button>
          <button className="outline text-red">Outline Red</button>
          <button className="outline text-green">Outline Green</button>
          <button className="secondary text-blue">Secondary Blue</button>
          <button className="secondary text-red">Secondary Red</button>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Solid colored buttons -->
<button class="bg-blue">Blue</button>
<button class="bg-red">Red</button>
<button class="bg-green">Green</button>
<button class="bg-yellow">Yellow</button>
<button class="bg-indigo">Indigo</button>
<button class="bg-violet">Violet</button>

<!-- Outline + colored text -->
<button class="outline text-blue">Outline Blue</button>
<button class="outline text-red">Outline Red</button>

<!-- Secondary + colored text -->
<button class="secondary text-blue">Secondary Blue</button>`}
      </CodeBlock>

      <h3>Ripple Effect</h3>
      <p>
        All buttons automatically have a <strong>Material-style ripple animation</strong> on click.
        This is powered by <code>lila.js</code> — no extra classes needed. The ripple color
        automatically adapts to the button style (white ripple on dark buttons, dark ripple on light buttons).
      </p>
      <CodeBlock language="html">
{`<!-- Just include lila.js — ripple is automatic -->
<script src="lila.js"></script>

<!-- Every button gets ripple! -->
<button>Click me for ripple</button>`}
      </CodeBlock>

      <h3>FAB & Link Buttons</h3>
      <div className="example">
        <div className="flex items-center gap-2 flex-wrap">
          <a role="button">Link button</a>
          <a role="button" className="secondary">Link button secondary</a>
          <button className="fab destructive">+</button>
        </div>
        <button className="fab" onClick={handleShowSnackbar}>+</button>
      </div>
    </article>
  );
}
