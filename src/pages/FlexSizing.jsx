import CodeBlock from '../components/CodeBlock';

export default function FlexSizing() {
  return (
    <article>
      <h2>Flex &amp; Sizing Utilities</h2>
      <p>A collection of utilities for flexbox layouts, sizing, and visibility.</p>
      <div className="example ">
        <div className="flex between items-center bg-surface p-4 rounded">
          <span>Flex container</span>
          <span className="w-full text-center">.w-full</span>
          <span className="hidden">.hidden</span>
          <span>Items aligned</span>
        </div>
      </div>
      <CodeBlock language="css">
{`/* Flexbox */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }

/* Sizing */
.w-full { width: 100%; }

/* Visibility */
.hidden { display: none !important; }`}
      </CodeBlock>
    </article>
  );
}
