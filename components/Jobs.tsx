export default function Jobs() {
  return (
    <div className="menu-header relative mb-5 grid w-full grid-cols-7 place-content-center rounded-full bg-shade-300 p-2 drop-shadow-sm">
      <div className="relative col-span-2 p-2 text-sm">Company Name</div>
      <div className="relative p-2 text-sm">Frontend Developer</div>
      <div className="relative p-2 text-sm">Bali</div>
      <div className="relative p-2 text-sm">Applied</div>
      <div className="relative p-2 text-sm">21/04/2026</div>
      <div className="relative justify-self-end p-2 text-sm">
        <div className="flex justify-between gap-x-4">
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}
