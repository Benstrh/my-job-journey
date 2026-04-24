import Link from "next/link";
import InputForm from "./InputForm";

export default function LogCard() {
  return (
    <div className="m-auto flex h-125 w-125 flex-col items-center justify-center rounded-3xl bg-white/40 shadow-lg backdrop-blur-sm">
      <div className="relative mb-10 flex w-full flex-col items-center justify-center gap-4">
        <InputForm />
      </div>
      <Link href={"/main"}>ENTER</Link>
    </div>
  );
}
