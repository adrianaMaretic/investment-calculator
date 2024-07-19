import { useState } from "react";
import { InputGroup } from "./components/InputGroup";
import { Results } from "./components/Results";
import { DynamicInput } from "./components/DynamicInput";

const initialInputValues = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputValues, setInputValues] = useState(initialInputValues);
  // const [exampleInput, setExampleInput] = useState();

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
      <section id="user-input">
        <InputGroup handleChange={setInputValues} />
        {/* Input group nije toliko velik pa je i ovako okay,  */}
        {/* <ul className="input-group">
          <li>
            <Input
              value={inputValues.initialInvestment} // ovo je bitno jedino
              inputType="number"
              inputName="initial investment"
              handleInputChange={handleInputChange}
            ></Input>
            <Input
              value={inputValues.expectedReturn}
              inputType="number"
              inputName="expected return"
              handleInputChange={handleInputChange}
            ></Input>
          </li>
          <li>
            <Input
              value={inputValues.annualInvestment}
              inputType="number"
              inputName="annual investment"
              handleInputChange={handleInputChange}
            ></Input>
            <Input
              value={inputValues.duration}
              inputType="number"
              inputName="duration"
              handleInputChange={handleInputChange}
            ></Input>
          </li>
        </ul>*/}
      </section>{" "}
      */
      {!inputIsValid && <p className="center">Please enter valid data</p>}
      {inputIsValid && <Results inputChanges={inputValues}></Results>}
    </main>
  );
}

export default App;
