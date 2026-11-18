import Nav from "./homeComponents/Nav";
import Hero from "./homeComponents/Hero";
import Projekcie from "./homeComponents/O_projekcie.tsx";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Projekcie />
      </main>
    </div>
  );
}
