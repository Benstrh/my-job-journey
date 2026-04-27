export default function JobLists() {
  return (
    <div className="menu-table flex max-h-screen w-full flex-col bg-shade-200/50 p-4">
      <div className="menu-header relative flex h-10 w-full items-center rounded-full bg-shade-500 p-2 drop-shadow-sm">
        <div className="relative w-[20%] p-2 text-sm">Company Name</div>
      </div>
    </div>
  );
}

const header = ["Company Name", "Job Title", "Status", "Location", "Date"];
