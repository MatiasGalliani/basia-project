import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-16 md:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 lg:gap-16">
        <div className="max-w-3xl flex flex-col gap-3 sm:gap-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08] text-neutral-950">
            W TWOIM <br /> KIERUNKU
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-800">
            Zatrzymaj się na chwilę.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-800">
            Przyjrzyj się temu, jak korzystasz z mediów społecznościowych i sprawdź,{" "}
            <strong className="font-semibold text-neutral-950">co jest dla ciebie ważne</strong>.
          </p>
        </div>
        <Button className="h-auto rounded-2xl px-6 sm:px-8 py-3.5 sm:py-5 text-center font-medium whitespace-nowrap shrink-0 w-full sm:w-auto self-stretch sm:self-start md:self-auto cursor-pointer text-base sm:text-lg md:text-xl shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
          Dodaj skrót
        </Button>
      </div>
    </section>
  );
}

