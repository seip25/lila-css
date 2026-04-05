import CodeBlock from '../components/CodeBlock';

export default function Forms() {
  return (
    <article>
      <h2>Forms</h2>
      <p>Styles for inputs, textareas, selects, and floating labels.</p>
      <div className="example  ">
        <input type="text" placeholder="Standard Input" />
        <input type="text" className="fill mt-4" placeholder="Fill Input" />
        <select className="mt-4">
          <option>Select Menu</option>
        </select>
        <select className="mt-4 fill">
          <option>Select Menu</option>
        </select>
        <textarea className="mt-4" placeholder="Textarea" rows="3"></textarea>
        <div className="floating mt-4">
          <input type="email" id="float" placeholder=" " />
          <label htmlFor="float">Floating Label</label>
        </div>

        <div className="mt-4">
          <label>
            <input type="checkbox" name="switch" role="switch" />
            My switch
          </label>
        </div>

       
      </div>
       <fieldset>
          <legend>Personal Information</legend>
          <div className="floating">
            <input type="text" placeholder="" />
            <label>First Name</label>
          </div>
          <div className="floating">
            <input type="text" placeholder="" />
            <label>Last Name</label>
          </div>
          <div className="floating">
            <input type="email" placeholder="" />
            <label>Email</label>
          </div>
          <button> Send</button>
        </fieldset>
      <CodeBlock language="html">
{`<input type="text" placeholder="Standard Input">
<input class="fill" type="text" placeholder="Fill Input">
<select>...</select>
<select class="fill" >...</select>
<textarea placeholder="Textarea"></textarea>

<div class="floating">
  <input type="email" id="float" placeholder=" " />
  <label for="float">Floating Label</label>
</div>

 
<label  >
<input type="checkbox" name="switch" role="switch"  >
My switch
</label>
 
<fieldset>
    <legend>Personal Information</legend>
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
    <input type="email" placeholder="Email">
    <button> Send</button>
</fieldset>`}
      </CodeBlock>
    </article>
  );
}
