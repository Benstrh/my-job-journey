export default function ListHeader() {
  return (
    <div className="menu-header relative mb-5 grid h-10 w-full grid-cols-7 place-content-center rounded-full border bg-accent-500 p-2 font-semibold drop-shadow-sm">
      <div className="relative col-span-2 p-2 text-sm">Company Name</div>
      <div className="relative p-2 text-sm">Job Title</div>
      <div className="relative p-2 text-sm">Location</div>
      <div className="relative p-2 text-sm">Status</div>
      <div className="relative p-2 text-sm">Date</div>
    </div>
  );
}
