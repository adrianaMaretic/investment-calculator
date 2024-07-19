import { Input } from "./Input";

export function InputGroup() {
  return (
    <section id="user-input">
      <ul className="input-group">
      <Input inputName="initial investment"></Input>
      <Input inputName="annual investment"></Input>
      <Input inputName="expected return"></Input>
      <Input inputName="duration"></Input>
      </ul>
    </section>
  );
}
