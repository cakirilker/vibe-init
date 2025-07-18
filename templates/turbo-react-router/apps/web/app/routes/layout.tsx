import { Footer } from "@/components/blocks/footer";
import { Navigation } from "@/components/blocks/navigation";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
