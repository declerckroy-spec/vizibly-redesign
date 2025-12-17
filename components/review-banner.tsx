'use client';

export function ReviewBanner() {
  return (
    <div className="bg-accent border-b-4 border-black">
      <div className="mx-auto max-w-screen-2xl px-6 py-2">
        <a
          href="https://www.google.com/maps/place/Vizibly/@52.1909763,5.2795551,7z/data=!3m1!4b1!4m6!3m5!1s0x47c5ef6bd13e8765:0xc924944bbf7fa195!8m2!3d52.1909763!4d5.2795551!16s%2Fg%2F11vs4r0223?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-sm font-black uppercase tracking-wider sm:text-base">
            ★★★★★
          </span>
          <span className="text-sm font-bold sm:text-base">
            5/5 op Google Reviews
          </span>
        </a>
      </div>
    </div>
  );
}
