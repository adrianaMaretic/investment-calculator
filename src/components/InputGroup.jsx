import { Input } from "./Input";

export function InputGroup({ handleChange }) {
  return (
    <section id="user-input">
      <ul className="input-group">
        <li>
          <Input
            inputType="number"
            inputName="initial investment"
            handleInputChange={handleChange}
          ></Input>
          <Input
            inputType="number"
            inputName="expected return"
            handleInputChange={handleChange}
          ></Input>
        </li>
        <li>
          <Input
            inputType="number"
            inputName="annual investment"
            handleInputChange={handleChange}
          ></Input>
          <Input
            inputType="number"
            inputName="duration"
            handleInputChange={handleChange}
          ></Input>
        </li>
      </ul>
    </section>
  );
}
