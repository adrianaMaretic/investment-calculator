export function Input({inputName}) {
const removedWhitespace = inputName.replace(/\s/g, '')

console.log(removedWhitespace)
  return (
    <li>
      <label htmlFor={removedWhitespace}>{inputName}</label>
      <input type="number" id={removedWhitespace}/>
    </li>
  );
}
