import Jobs from "./Jobs";
import ListHeader from "./ListHeader";

export default function JobLists() {
  return (
    <div className="menu-table min-h-125 w-full overflow-hidden bg-shade-200/50 p-4">
      <ListHeader />
      <Jobs />
      <Jobs />
      <Jobs />
      <Jobs />
      <Jobs />
    </div>
  );
}

const header = ["Company Name", "Job Title", "Status", "Location", "Date"];
