import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="px-8 pt-32 pb-16 lg:px-16 lg:pt-36 lg:pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between">
        <div className="max-w-3xl flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            W TWOIM <br /> KIERUNKU
          </h1>
          <p className="mt-6 text-lg leading-7">
            Zatrzymaj się na chwilę.
            <br />
          </p>
          <p>
            Przyjrzyj się temu, jak korzystasz z mediów społecznościowych i
            sprawdź,
            <strong>co jest dla ciebie ważne</strong>.
          </p>
        </div>
        <Button className="rounded-2xl px-8 py-5 text-center font-medium whitespace-nowrap shrink-0 self-end md:self-auto cursor-pointer text-xl">
          Dodaj skrót
        </Button>
      </div>
    </section>
  );
}
