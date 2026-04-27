import ButtonAdd from "@/components/ButtonAdd";
import FilterMenu from "@/components/FilterMenu";
import JobLists from "@/components/JobLists";
import Logo from "@/components/Logo";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-r from-primary-50/50 to-accent-400/50">
      <div className="header-main flex h-24 items-center justify-between px-8">
        <Logo />
        <div>NAVBAR</div>
      </div>
      <div className="mb-8 px-8">USER</div>
      <div className="space-y-8 px-8">
        <div className="flex items-center justify-between">
          <ButtonAdd />
          <FilterMenu />
        </div>

        <JobLists />
      </div>
    </div>
  );
}
