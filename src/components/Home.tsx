import Nav from "./homeComponents/Nav";
import Hero from "./homeComponents/Hero";
import Projekcie from "./homeComponents/O_projekcie";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-neutral-300">
      <Nav />
      <main className="flex-1 w-full max-w-7xl mx-auto">
        <Hero />
        <Projekcie />
      </main>
    </div>
  );
}

