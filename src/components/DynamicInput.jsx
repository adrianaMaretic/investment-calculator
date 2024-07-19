export function DynamicInput({value, inputType, inputName, setValue }) { 
  const removedWhitespace = inputName.toLowerCase()
  .replace(/ (\w)/g, (_, p1) => p1.toUpperCase());
  
  return (
    <p>
      <label htmlFor={removedWhitespace}>{inputName}</label>
      <input
        value={value} // onaj binding 
        type={inputType}
        id={removedWhitespace}
        onChange={(e) => setValue(e.target.value)} // mozes ode odma proslijedit funkciju koja ce zvat setValue => setDuration ili setInitialInvestment etc
      />
    </p>
  );
}
