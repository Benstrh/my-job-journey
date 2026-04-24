export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-r from-primary-50/50 to-accent-50/50">
      <div className="header-main flex h-24 items-center justify-between px-8">
        <div>LOGO</div>
        <div>NAVBAR</div>
      </div>
      <div className="px-8">USER</div>
      <div className="w-full px-8">
        <div className="flex h-10 w-full items-center rounded-lg bg-white/50 p-6 drop-shadow-lg backdrop-blur-lg">
          TRACKING MENU
        </div>
      </div>
    </div>
  );
}
