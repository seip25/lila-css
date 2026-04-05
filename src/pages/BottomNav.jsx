import CodeBlock from '../components/CodeBlock';

export default function BottomNav() {
  return (
    <article>
      <h2>Bottom Navigation Bar</h2>
      <p>
        A mobile-friendly bottom navigation bar that stays fixed to the bottom of the page.
        Useful for mobile layouts or Progressive Web Apps.
        You may combine it with the <code>visible-sm</code> utility class
        to show it <strong>only on small screens</strong>, or remove it to display the bar everywhere.
      </p>

      <CodeBlock language="html">
{`<nav class="bottom-nav visible-sm">
  <ul>
    <li><a href="/search">Search</a></li>
    <li><a href="/cart">Cart</a></li>
    <li><a href="/account">Account</a></li>
  </ul>
</nav>`}
      </CodeBlock>

      <p>
        The <code>visible-sm</code> class ensures the bar only appears on small screens.
        Remove the class if you want the bottom nav to be visible at all screen sizes.
      </p>
    </article>
  );
}
