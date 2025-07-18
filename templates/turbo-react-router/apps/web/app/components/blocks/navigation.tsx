import * as React from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import WaveSvg from "@/components/icons/wave.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
  { name: "Cookies", href: "/cookies" },
];

export function Navigation() {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <nav
      data-state={menuState && "active"}
      className="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
    >
      <div className="m-auto lg:container px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <div className="flex w-full justify-between lg:w-auto">
            <NavLink
              to="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <div
                style={{ background: `url("${WaveSvg}")` }}
                className="h-10 w-10"
              />
              <span className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
                Awesome Website
              </span>
            </NavLink>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
              <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
            </button>
          </div>

          <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
            <div className="lg:pr-4">
              <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          "text-muted-foreground block duration-150 text-sm font-medium transition-colors hover:text-primary",
                          { "text-foreground": isActive },
                        )
                      }
                    >
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
              <Button asChild size="sm">
                <NavLink to="/login">Login</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
