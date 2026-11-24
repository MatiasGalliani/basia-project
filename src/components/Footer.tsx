export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-6 sm:py-0 sm:h-24">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <p className="text-sm sm:text-base font-medium text-neutral-800">
          Pytania? Sugestie? Napisz tutaj
        </p>
        <a
          href="mailto:basiagarstka23@gmail.com"
          className="text-xs sm:text-sm font-medium text-neutral-500 tracking-wider break-all sm:break-normal"
        >
          EMAIL: BASIAGARSTKA23@GMAIL.COM
        </a>
      </div>
    </footer>
  );
}
