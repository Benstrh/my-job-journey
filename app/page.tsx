import LogCard from "@/components/LogCard";

export default function Home() {
  return (
    <div className="flex min-h-svh w-full flex-col justify-center bg-linear-to-r from-primary-50/50 to-accent-50/50">
      <div className="m-auto">
        <LogCard />
      </div>
    </div>
  );
}
