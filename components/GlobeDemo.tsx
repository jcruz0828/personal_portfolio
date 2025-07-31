import { Globe } from "./ui/globe";

export function GlobeDemo() {
  return (
    <div
      className="relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg aspect-square flex items-center justify-center px-4 sm:px-10 pb-20 sm:pb-40 pt-20 sm:pt-40 md:pt-52 md:pb-60 md:shadow-xl"
    >
      {/* Responsive globe size and slight downward shift */}
      <Globe className="h-[90%] w-[90%] sm:h-[85%] sm:w-[90%] translate-y-4 sm:translate-y-8" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_300%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
