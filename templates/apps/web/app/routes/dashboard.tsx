import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router";
import { Route } from "./+types/home";
import { auth } from "lib/auth";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { UserProfile } from "@/components/blocks/auth/user-profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await auth.api.getSession(request);
  if (!session) return redirect("/");
  return session;
}

export default function Dashboard() {
  const { session, user } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-foreground/10">
      <header className="shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div>
              <h1 className="text-xl font-bold">Dashboard</h1>
              <p>Welcome back, {user.name}!</p>
            </div>
            <Button onClick={() => navigate("/")}>Back to Home</Button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserProfile />
      </main>
    </div>
  );
}
