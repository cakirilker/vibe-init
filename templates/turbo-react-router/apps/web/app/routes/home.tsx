import { HeroSection } from "@/components/blocks/hero";
import { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome!" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
