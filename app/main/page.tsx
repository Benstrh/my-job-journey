import FilterMenu from "@/components/FilterMenu";
import Logo from "@/components/Logo";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-r from-primary-50/50 to-accent-400/50">
      <div className="header-main flex h-24 items-center justify-between px-8">
        <Logo />
        <div>NAVBAR</div>
      </div>
      <div className="mb-8 px-8">USER</div>
      <div className="w-full space-y-8 px-8">
        <FilterMenu />
   
        <div className="menu-table flex max-h-screen w-full flex-col">
          <div className="menu-header relative h-10 w-full">JOB LISTS</div>
        </div>
      </div>
    </div>
  );
}
