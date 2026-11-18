import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <header className="flex items-center sticky top-0 bg-gray-200 h-16 px-6">
        <div className="flex items-center z-50 ml-auto">
          <Button variant="ghost" className="cursor-pointer">
            O projekcie
          </Button>
          <Button variant="ghost" className="cursor-pointer">
            Praktyka
          </Button>
          <Button variant="ghost" className="cursor-pointer">
            Psychologia korzystania
          </Button>
          <Button variant="ghost" className="cursor-pointer">
            Literatura
          </Button>
        </div>
      </header>
      <main>
        <section className="px-8 pt-32 pb-16 lg:px-16 lg:pt-36 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              W TWOIM <br /> KIERUNKU
            </h1>
            <p className="mt-6 text-lg leading-7">
              Zatrzymaj się na chwilę.
              <br /> <br /> Przyjrzyj się temu, jak korzystasz z mediów
              społecznościowych i sprawdź,
              <strong>co jest dla ciebie ważne</strong>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
