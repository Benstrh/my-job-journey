import InputComponent from "./InputComponent";

export default function InputForm() {
  return (
    <form className="relative w-full space-y-4 px-16">
      <InputComponent name="Name" />
      <InputComponent name="Title" />
    </form>
  );
}
