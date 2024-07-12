import { useState } from "react";
import { InputGroup } from "./components/InputGroup";
import { Results } from "./components/Results";

const initialInputValues = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null,
};

function App() {
  const [inputValues, setInputValues] = useState(initialInputValues);

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
      <Results inputChanges={inputValues}></Results>
    </main>
  );
}

export default App;
