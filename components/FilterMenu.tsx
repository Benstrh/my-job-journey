import TrackingNavigationMenu from "./TrackingNavigationMenu";

export default function FilterMenu() {
  return (
    <div className="filter-menu relative inline-flex gap-x-4 rounded-full bg-shade-200/50 p-4 drop-shadow-sm backdrop-blur-md">
      <TrackingNavigationMenu />
    </div>
  );
}
