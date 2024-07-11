export function Input({inputName}) {
const removedWhitespace = inputName.replace(/\s/g, '')

  return (
    <li>
      <label htmlFor={removedWhitespace}>{inputName}</label>
      <input type="number" id={removedWhitespace}/>
    </li>
  );
}
