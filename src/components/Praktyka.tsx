import Nav from "./homeComponents/Nav";
import MainPraktyka from "./praktykaComponents/mainPraktyka";
import Footer from "./Footer";

export default function Praktyka() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-neutral-300">
      <Nav />
      <main className="flex-1 w-full max-w-7xl mx-auto">
        <MainPraktyka />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
