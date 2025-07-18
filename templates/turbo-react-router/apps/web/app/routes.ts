import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layout.tsx", [
    index("routes/home.tsx"),
    route("privacy", "./routes/privacy.tsx"),
    route("cookies", "./routes/cookies.tsx"),
    route("terms", "./routes/terms.tsx"),
    // TODO: Move to another layout
    route("dashboard", "./routes/dashboard.tsx"),
  ]),

  // Auth API route - handles all auth endpoints
  route("api/auth/*", "./routes/api/auth.ts"),

  // Auth pages
  layout("./routes/auth/layout.tsx", [
    route("login", "./routes/auth/login.tsx"),
  ]),
  route("*", "./routes/404.tsx"),
] satisfies RouteConfig;
