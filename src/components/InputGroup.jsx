import { useEffect, useState } from "react";
import { DynamicInput } from "./DynamicInput";

export function InputGroup({ handleChange }) {
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [duration, setDuration] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [initialInvestment, setInitialInvestment] = useState(0);

  useEffect(() => { // koristis kad moras okinit neki poziv ovisno o nekom stateu koji se promjenio
    handleChange((prev) => { // postavljanje onog tvog objekta
      return { 
        annualInvestment: +annualInvestment, // + da promijeni string u number
        duration: +duration,
        expectedReturn: +expectedReturn,
        initialInvestment: +initialInvestment,
      };
    });
  }, [annualInvestment, duration, expectedReturn, initialInvestment]); // svaki put kad se jedan od ovih stateova promijeni

  return (
    <section id="user-input">
      <ul className="input-group">
        <li>
          <DynamicInput
            value={initialInvestment}
            inputType="number"
            inputName="initial investment"
            setValue={setInitialInvestment}
          ></DynamicInput>
          <DynamicInput
            value={expectedReturn}
            inputType="number"
            inputName="expected return"
            setValue={setExpectedReturn}
          ></DynamicInput>
        </li>
        <li>
          <DynamicInput
            value={annualInvestment}
            inputType="number"
            inputName="annual investment"
            setValue={setAnnualInvestment}
          ></DynamicInput>
          <DynamicInput
            value={duration}
            inputType="number"
            inputName="duration"
            setValue={setDuration}
          ></DynamicInput>
        </li>
      </ul>
    </section>
  );
}
