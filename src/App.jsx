import { useState } from "react";
import { InputGroup } from "./components/InputGroup";
import { Results } from "./components/Results";

const initialInputValues = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const inputIsValid =
    inputValues.duration > 0 &&
    inputValues.initialInvestment >= 0 &&
    inputValues.annualInvestment >= 0 &&
    inputValues.expectedReturn >= 0;

  function handleInputChange(data) {
    const changedInputId = data.target.id;
    const changedInputValue = Number(data.target.value);

    const previousValues = { ...inputValues };
    const changedValues = {
      ...previousValues,
      [changedInputId]: changedInputValue,
    };

    setInputValues(changedValues);
  }

  return (
    <main>
      <InputGroup handleChange={handleInputChange}></InputGroup>
      {!inputIsValid && <p className="center">Please enter valid data</p>}
      {inputIsValid && <Results inputChanges={inputValues}></Results>}
    </main>
  );
}

export default App;
