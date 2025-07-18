import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { useLoaderData, useNavigate } from "react-router";
import { User, LogOut } from "lucide-react";
import { authClient } from "lib/auth-client";

export function UserProfile() {
  const { signOut } = authClient;
  // const { data: session, isPending, error } = useSession();
  const { session, user } = useLoaderData();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            navigate("/");
          },
        },
      });
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loading size="sm" />
        <span className="ml-2 text-sm">Loading...</span>
      </div>
    );
  }
  async function handleTiktok() {
    try {
      await authClient.linkSocial({
        scopes: ["user.info.basic", "user.info.profile", "user.info.stats"],
        provider: "tiktok",
        callbackURL: "/dashboard", // Redirect after successful linking
      });
    } catch (e) {
      console.warn("Tiktok Error", e);
    }
  }
  return (
    <div className="rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-shrink-0">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="h-12 w-12 rounded-full"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium">{user.name}</h3>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Account Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>User ID:</span>
                <span className="font-mono">{user.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Email Verified:</span>
                <span>{user.emailVerified ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between">
                <span>Created:</span>
                <span>
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Session Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Session ID:</span>
                <span className="font-mono">{session.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Expires:</span>
                <span>{new Date(session.expiresAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 pt-4 border-t">
          <Button variant="outline" onClick={handleSignOut} className="flex-1">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
          <Button onClick={handleTiktok}>Link Tiktok</Button>
        </div>
      </div>
    </div>
  );
}
