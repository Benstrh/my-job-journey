export default function InputComponent({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p>{name}</p>
      <input
        className="h-10 w-full rounded-3xl bg-white p-4 focus:outline-primary-100 focus-visible:outline-primary-100"
        type="text"
        placeholder=""
      />
    </div>
  );
}
