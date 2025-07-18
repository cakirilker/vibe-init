import { Outlet } from "react-router";

// TODO
export default function Layout() {
  return (
    <div className="container mx-auto px-4 py-28 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
