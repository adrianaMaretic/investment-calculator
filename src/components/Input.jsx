export function Input({inputType, inputName, handleInputChange }) {
  const removedWhitespace = inputName.toLowerCase()
  .replace(/ (\w)/g, (_, p1) => p1.toUpperCase());
  
  return (
    <p>
      <label htmlFor={removedWhitespace}>{inputName}</label>
      <input
        type={inputType}
        id={removedWhitespace}
        onChange={handleInputChange}
      />
    </p>
  );
}
