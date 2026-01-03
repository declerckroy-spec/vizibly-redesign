// Premium isometrische illustraties voor de /websites pagina
// Stijl: Brutalist met diepte, gelaagdheid en veel detail

// Premium Hero Illustratie: Isometrische device stack met floating elementen
export function PremiumHeroIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Achtergrond grid pattern */}
      <defs>
        <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.1" />
        </pattern>
        <pattern id="heroLines" width="40" height="40" patternUnits="userSpaceOnUse">
          <line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
        </pattern>
      </defs>

      {/* Grid achtergrond */}
      <rect x="0" y="0" width="500" height="380" fill="url(#heroGrid)" />

      {/* === ISOMETRISCHE LAPTOP (CENTRAAL) === */}
      {/* Laptop schaduw */}
      <path
        d="M 130 290 L 370 290 L 400 310 L 100 310 Z"
        fill="currentColor"
        opacity="0.1"
      />

      {/* Laptop basis/keyboard */}
      <path
        d="M 120 250 L 380 250 L 410 280 L 90 280 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="3"
      />
      {/* Keyboard detail */}
      <g opacity="0.3">
        {[0,1,2,3,4,5,6,7,8,9].map((i) => (
          <rect key={`key-${i}`} x={140 + i * 22} y="258" width="18" height="8" fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <rect key={`key2-${i}`} x={150 + i * 22} y="268" width="18" height="6" fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
      </g>
      {/* Trackpad */}
      <rect x="220" y="256" width="60" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

      {/* Laptop scherm frame */}
      <path
        d="M 130 60 L 370 60 L 380 250 L 120 250 Z"
        fill="#fafaf8"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Scherm binnenste */}
      <path
        d="M 145 75 L 355 75 L 363 235 L 137 235 Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Browser chrome */}
      <path d="M 145 75 L 355 75 L 356 95 L 144 95 Z" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />

      {/* Browser buttons */}
      <circle cx="158" cy="85" r="4" fill="#CCFF00" />
      <circle cx="172" cy="85" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="186" cy="85" r="4" fill="currentColor" opacity="0.2" />

      {/* URL bar */}
      <rect x="200" y="79" width="145" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <rect x="205" y="82" width="6" height="6" fill="#CCFF00" /> {/* Lock icon */}

      {/* Website content op scherm */}
      {/* Hero headline */}
      <rect x="155" y="105" width="120" height="12" fill="currentColor" />
      <rect x="155" y="120" width="80" height="8" fill="currentColor" opacity="0.4" />

      {/* CTA Button */}
      <rect x="155" y="138" width="60" height="18" fill="#CCFF00" />
      <rect x="157" y="140" width="56" height="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Content blocks */}
      <rect x="155" y="168" width="85" height="55" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1" />
      <rect x="250" y="168" width="100" height="55" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />

      {/* Mini chart in content block */}
      <polyline points="260,210 275,195 290,200 305,185 320,175 335,165" stroke="#CCFF00" strokeWidth="3" fill="none" />
      <circle cx="335" cy="165" r="4" fill="#CCFF00" />

      {/* Image placeholder in left block */}
      <line x1="155" y1="168" x2="240" y2="223" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="240" y1="168" x2="155" y2="223" stroke="currentColor" strokeWidth="1" opacity="0.1" />

      {/* === FLOATING PHONE (LINKS) === */}
      {/* Phone schaduw */}
      <ellipse cx="65" cy="290" rx="35" ry="8" fill="currentColor" opacity="0.15" />

      {/* Phone body */}
      <rect x="30" y="130" width="70" height="140" fill="#fafaf8" stroke="currentColor" strokeWidth="4" />

      {/* Phone scherm */}
      <rect x="36" y="145" width="58" height="110" fill="white" stroke="currentColor" strokeWidth="2" />

      {/* Phone notch */}
      <rect x="55" y="135" width="20" height="6" fill="currentColor" opacity="0.3" />

      {/* Phone content */}
      <rect x="42" y="155" width="35" height="6" fill="currentColor" />
      <rect x="42" y="165" width="46" height="4" fill="currentColor" opacity="0.3" />
      <rect x="42" y="173" width="40" height="4" fill="currentColor" opacity="0.3" />

      {/* Phone CTA */}
      <rect x="42" y="185" width="30" height="12" fill="#CCFF00" />

      {/* Phone image area */}
      <rect x="42" y="205" width="46" height="40" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1" />

      {/* Home indicator */}
      <rect x="55" y="260" width="20" height="4" fill="#CCFF00" />

      {/* === FLOATING TABLET (RECHTS BOVEN) === */}
      {/* Tablet schaduw */}
      <ellipse cx="435" cy="195" rx="40" ry="10" fill="currentColor" opacity="0.12" />

      {/* Tablet body */}
      <rect x="395" y="40" width="90" height="130" fill="#fafaf8" stroke="currentColor" strokeWidth="4" />

      {/* Tablet scherm */}
      <rect x="402" y="52" width="76" height="105" fill="white" stroke="currentColor" strokeWidth="2" />

      {/* Tablet camera */}
      <circle cx="440" cy="46" r="3" fill="currentColor" opacity="0.3" />

      {/* Tablet content - dashboard style */}
      <rect x="408" y="60" width="64" height="8" fill="currentColor" />

      {/* Stats cards */}
      <rect x="408" y="74" width="30" height="25" fill="#CCFF00" opacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="423" y="92" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor" fontFamily="system-ui">+47%</text>

      <rect x="442" y="74" width="30" height="25" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1" />
      <text x="457" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="system-ui">2.4K</text>

      {/* Mini line chart */}
      <rect x="408" y="104" width="64" height="45" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
      <polyline points="415,140 425,132 440,135 455,120 465,110" stroke="#CCFF00" strokeWidth="3" fill="none" />

      {/* Home button */}
      <circle cx="440" cy="162" r="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* === FLOATING UI ELEMENTEN === */}

      {/* Analytics badge (links boven) */}
      <g transform="translate(20, 40)">
        <rect x="0" y="0" width="80" height="45" fill="white" stroke="currentColor" strokeWidth="3" />
        <rect x="3" y="3" width="74" height="39" fill="#CCFF00" opacity="0.15" />
        <text x="40" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="system-ui">BEZOEKERS</text>
        <text x="40" y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" fontFamily="system-ui">+312%</text>
        {/* Schaduw */}
        <rect x="6" y="6" width="80" height="45" fill="currentColor" opacity="0.1" transform="translate(-6, -6)" style={{ zIndex: -1 }} />
      </g>

      {/* Speed badge (rechts) */}
      <g transform="translate(420, 200)">
        <circle cx="30" cy="30" r="35" fill="white" stroke="currentColor" strokeWidth="4" />
        {/* Speed arc background */}
        <path d="M 10 45 A 25 25 0 0 1 50 45" stroke="currentColor" strokeWidth="6" fill="none" opacity="0.15" />
        {/* Speed arc filled */}
        <path d="M 10 45 A 25 25 0 0 1 50 20" stroke="#CCFF00" strokeWidth="6" fill="none" />
        {/* Needle */}
        <line x1="30" y1="30" x2="45" y2="18" stroke="currentColor" strokeWidth="3" />
        <circle cx="30" cy="30" r="5" fill="#CCFF00" />
        <text x="30" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="system-ui">100</text>
      </g>

      {/* Growth arrow (midden boven) */}
      <g transform="translate(200, 15)">
        <rect x="0" y="0" width="100" height="40" fill="white" stroke="currentColor" strokeWidth="3" />
        <polyline points="15,30 35,20 55,25 75,10" stroke="#CCFF00" strokeWidth="4" fill="none" />
        <circle cx="75" cy="10" r="5" fill="#CCFF00" />
        <path d="M 75 10 L 85 5 L 85 15 Z" fill="#CCFF00" />
        {/* Arrow up */}
        <line x1="85" y1="30" x2="85" y2="15" stroke="#CCFF00" strokeWidth="3" />
        <path d="M 85 15 L 80 22 M 85 15 L 90 22" stroke="#CCFF00" strokeWidth="2" />
      </g>

      {/* Search/SEO icon (links midden) */}
      <g transform="translate(5, 200)">
        <circle cx="25" cy="25" r="22" fill="white" stroke="currentColor" strokeWidth="3" />
        <circle cx="22" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <line x1="30" y1="30" x2="42" y2="42" stroke="currentColor" strokeWidth="4" />
        <circle cx="22" cy="22" r="5" fill="#CCFF00" opacity="0.5" />
      </g>

      {/* Code bracket (rechts onder) */}
      <g transform="translate(380, 290)">
        <rect x="0" y="0" width="70" height="50" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="15" y="35" fontSize="24" fontWeight="bold" fill="currentColor" fontFamily="monospace">&lt;/&gt;</text>
        <rect x="45" y="15" width="15" height="8" fill="#CCFF00" />
        <rect x="45" y="27" width="12" height="6" fill="currentColor" opacity="0.3" />
      </g>

      {/* Notification badge */}
      <g transform="translate(340, 35)">
        <rect x="0" y="0" width="45" height="25" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <text x="22" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="system-ui">LIVE</text>
      </g>

      {/* Connection dots/lines */}
      <circle cx="110" cy="180" r="3" fill="#CCFF00" />
      <circle cx="390" cy="155" r="3" fill="#CCFF00" />
      <line x1="100" y1="85" x2="130" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
      <line x1="370" y1="130" x2="395" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
    </svg>
  );
}

// Premium Growth/Analytics Illustratie
export function PremiumGrowthIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 450 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Achtergrond pattern */}
      <defs>
        <pattern id="growthGrid" width="25" height="25" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="450" height="350" fill="url(#growthGrid)" />

      {/* === ISOMETRISCHE MONITOR MET DASHBOARD === */}
      {/* Monitor schaduw */}
      <ellipse cx="225" cy="320" rx="120" ry="20" fill="currentColor" opacity="0.1" />

      {/* Monitor voet */}
      <path d="M 185 290 L 265 290 L 275 310 L 175 310 Z" fill="currentColor" stroke="currentColor" strokeWidth="3" />
      <rect x="210" y="270" width="30" height="25" fill="currentColor" stroke="currentColor" strokeWidth="3" />

      {/* Monitor frame */}
      <rect x="60" y="45" width="330" height="225" fill="#0a0a0a" stroke="currentColor" strokeWidth="5" />

      {/* Monitor scherm */}
      <rect x="75" y="60" width="300" height="195" fill="#fafaf8" stroke="currentColor" strokeWidth="2" />

      {/* Dashboard header */}
      <rect x="75" y="60" width="300" height="30" fill="currentColor" opacity="0.05" />
      <rect x="85" y="70" width="60" height="10" fill="currentColor" />
      <circle cx="355" cy="75" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="335" cy="75" r="8" fill="#CCFF00" />

      {/* Stats row */}
      <g transform="translate(85, 100)">
        {/* Stat card 1 - Bezoekers */}
        <rect x="0" y="0" width="85" height="50" fill="white" stroke="currentColor" strokeWidth="2" />
        <text x="10" y="18" fontSize="9" fill="currentColor" opacity="0.6" fontFamily="system-ui">BEZOEKERS</text>
        <text x="10" y="38" fontSize="16" fontWeight="bold" fill="currentColor" fontFamily="system-ui">12,847</text>
        <text x="65" y="38" fontSize="10" fill="#CCFF00" fontWeight="bold" fontFamily="system-ui">+23%</text>

        {/* Stat card 2 - Conversies */}
        <rect x="95" y="0" width="85" height="50" fill="white" stroke="currentColor" strokeWidth="2" />
        <text x="105" y="18" fontSize="9" fill="currentColor" opacity="0.6" fontFamily="system-ui">CONVERSIES</text>
        <text x="105" y="38" fontSize="16" fontWeight="bold" fill="currentColor" fontFamily="system-ui">342</text>
        <text x="150" y="38" fontSize="10" fill="#CCFF00" fontWeight="bold" fontFamily="system-ui">+47%</text>

        {/* Stat card 3 - Ranking */}
        <rect x="190" y="0" width="85" height="50" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <text x="200" y="18" fontSize="9" fill="currentColor" opacity="0.7" fontFamily="system-ui">RANKING</text>
        <text x="200" y="40" fontSize="18" fontWeight="bold" fill="currentColor" fontFamily="system-ui">#1</text>
        <text x="235" y="40" fontSize="10" fill="currentColor" opacity="0.7" fontFamily="system-ui">Google</text>
      </g>

      {/* Main chart area */}
      <rect x="85" y="160" width="280" height="85" fill="white" stroke="currentColor" strokeWidth="2" />

      {/* Chart title */}
      <text x="95" y="178" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="system-ui">ORGANISCH VERKEER</text>

      {/* Y-axis labels */}
      <text x="92" y="195" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="system-ui">10K</text>
      <text x="92" y="215" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="system-ui">5K</text>
      <text x="95" y="235" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="system-ui">0</text>

      {/* Grid lines */}
      <line x1="110" y1="190" x2="355" y2="190" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="110" y1="210" x2="355" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="110" y1="230" x2="355" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.1" />

      {/* Area fill onder lijn */}
      <path
        d="M 110 235 L 140 228 L 175 225 L 210 218 L 245 205 L 280 195 L 315 185 L 350 175 L 350 235 Z"
        fill="#CCFF00"
        opacity="0.2"
      />

      {/* Main growth line */}
      <polyline
        points="110,235 140,228 175,225 210,218 245,205 280,195 315,185 350,175"
        stroke="#CCFF00"
        strokeWidth="4"
        fill="none"
      />

      {/* Data points */}
      <circle cx="110" cy="235" r="4" fill="currentColor" />
      <circle cx="140" cy="228" r="4" fill="currentColor" />
      <circle cx="175" cy="225" r="4" fill="currentColor" />
      <circle cx="210" cy="218" r="4" fill="currentColor" />
      <circle cx="245" cy="205" r="4" fill="currentColor" />
      <circle cx="280" cy="195" r="5" fill="currentColor" />
      <circle cx="315" cy="185" r="5" fill="currentColor" />
      <circle cx="350" cy="175" r="7" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />

      {/* === FLOATING PHONE MET DEZELFDE DATA === */}
      {/* Phone schaduw */}
      <ellipse cx="420" cy="300" rx="25" ry="6" fill="currentColor" opacity="0.15" />

      <rect x="385" y="150" width="55" height="110" fill="#fafaf8" stroke="currentColor" strokeWidth="4" />
      <rect x="390" y="162" width="45" height="85" fill="white" stroke="currentColor" strokeWidth="1.5" />

      {/* Phone notch */}
      <rect x="402" y="154" width="20" height="5" fill="currentColor" opacity="0.3" />

      {/* Phone mini dashboard */}
      <rect x="394" y="168" width="37" height="15" fill="#CCFF00" opacity="0.3" />
      <text x="412" y="180" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">+47%</text>

      {/* Phone mini chart */}
      <polyline points="397,230 405,222 415,225 425,210 430,205" stroke="#CCFF00" strokeWidth="2" fill="none" />

      {/* Home indicator */}
      <rect x="402" y="252" width="20" height="3" fill="#CCFF00" />

      {/* === FLOATING ELEMENTEN === */}

      {/* Grote pijl omhoog */}
      <g transform="translate(20, 80)">
        <rect x="0" y="0" width="50" height="80" fill="white" stroke="currentColor" strokeWidth="3" />
        <path d="M 25 70 L 25 20" stroke="#CCFF00" strokeWidth="5" />
        <path d="M 25 20 L 15 35 M 25 20 L 35 35" stroke="#CCFF00" strokeWidth="4" />
        <text x="25" y="62" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">GROEI</text>
      </g>

      {/* Euro/ROI indicator */}
      <g transform="translate(10, 200)">
        <circle cx="30" cy="30" r="28" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="30" y="38" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#CCFF00" fontFamily="system-ui">€</text>
        <circle cx="30" cy="30" r="20" fill="none" stroke="#CCFF00" strokeWidth="3" opacity="0.3" />
      </g>

      {/* Target/doel bereikt */}
      <g transform="translate(380, 45)">
        <rect x="0" y="0" width="60" height="45" fill="white" stroke="currentColor" strokeWidth="3" />
        <circle cx="30" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="22" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="22" r="4" fill="#CCFF00" />
        <text x="30" y="40" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" fontFamily="system-ui">DOEL</text>
      </g>

      {/* Check/success badge */}
      <g transform="translate(30, 280)">
        <circle cx="20" cy="20" r="18" fill="#CCFF00" stroke="currentColor" strokeWidth="3" />
        <path d="M 10 20 L 17 27 L 30 14" stroke="currentColor" strokeWidth="4" fill="none" />
      </g>

      {/* Kleine decoratieve elementen */}
      <rect x="410" y="110" width="30" height="20" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
      <rect x="415" y="115" width="20" height="4" fill="#CCFF00" />
      <rect x="415" y="122" width="15" height="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// === NIEUWE PREMIUM ILLUSTRATIES ===

// 1. Soepele Samenwerking - Video calls, chat, gedeelde documenten
export function CollaborationIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="collabGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="360" fill="url(#collabGrid)" />

      {/* === CENTRALE VIDEO CALL SCHERM === */}
      <rect x="100" y="50" width="280" height="200" fill="#fafaf8" stroke="currentColor" strokeWidth="5" />
      <rect x="110" y="60" width="260" height="170" fill="white" stroke="currentColor" strokeWidth="2" />

      {/* Video call header */}
      <rect x="110" y="60" width="260" height="25" fill="currentColor" opacity="0.05" />
      <circle cx="125" cy="72" r="5" fill="#CCFF00" />
      <circle cx="140" cy="72" r="5" fill="currentColor" opacity="0.2" />
      <rect x="160" y="68" width="80" height="8" fill="currentColor" opacity="0.3" />

      {/* Video deelnemers grid */}
      {/* Persoon 1 - Groot */}
      <rect x="120" y="95" width="115" height="85" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
      <circle cx="177" cy="125" r="20" fill="currentColor" opacity="0.2" />
      <circle cx="177" cy="120" r="12" fill="currentColor" opacity="0.3" />
      <path d="M 157 145 Q 177 155 197 145" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
      <rect x="125" y="165" width="40" height="10" fill="#CCFF00" />
      <text x="145" y="173" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" fontFamily="system-ui">JIJ</text>

      {/* Persoon 2 */}
      <rect x="245" y="95" width="115" height="85" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="2" />
      <circle cx="302" cy="125" r="20" fill="currentColor" opacity="0.15" />
      <circle cx="302" cy="120" r="12" fill="currentColor" opacity="0.25" />
      <rect x="280" y="165" width="45" height="10" fill="currentColor" opacity="0.2" />

      {/* Call controls */}
      <rect x="170" y="195" width="140" height="30" fill="currentColor" opacity="0.05" />
      <circle cx="200" cy="210" r="10" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="240" cy="210" r="10" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
      <circle cx="280" cy="210" r="10" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />

      {/* Mic icon in middle button */}
      <rect x="237" y="205" width="6" height="8" fill="currentColor" />
      <path d="M 235 213 Q 240 218 245 213" stroke="currentColor" strokeWidth="2" fill="none" />

      {/* === FLOATING CHAT BUBBLES === */}
      <g transform="translate(390, 80)">
        <rect x="0" y="0" width="80" height="55" fill="white" stroke="currentColor" strokeWidth="3" />
        <path d="M 15 55 L 25 70 L 35 55" fill="white" stroke="currentColor" strokeWidth="3" />
        <rect x="10" y="12" width="50" height="6" fill="currentColor" opacity="0.3" />
        <rect x="10" y="22" width="60" height="6" fill="currentColor" opacity="0.3" />
        <rect x="10" y="32" width="40" height="6" fill="#CCFF00" />
        <circle cx="65" cy="35" r="4" fill="#CCFF00" />
      </g>

      {/* Chat bubble 2 */}
      <g transform="translate(400, 160)">
        <rect x="0" y="0" width="70" height="40" fill="#CCFF00" stroke="currentColor" strokeWidth="3" />
        <path d="M 50 40 L 55 52 L 60 40" fill="#CCFF00" stroke="currentColor" strokeWidth="3" />
        <rect x="10" y="10" width="50" height="5" fill="currentColor" opacity="0.5" />
        <rect x="10" y="20" width="35" height="5" fill="currentColor" opacity="0.5" />
      </g>

      {/* === FLOATING DOCUMENT/TAAK === */}
      <g transform="translate(10, 100)">
        <rect x="0" y="0" width="75" height="100" fill="white" stroke="currentColor" strokeWidth="3" />
        {/* Document header */}
        <rect x="0" y="0" width="75" height="20" fill="currentColor" opacity="0.05" />
        <rect x="10" y="8" width="30" height="5" fill="currentColor" />

        {/* Checklist items */}
        <rect x="10" y="30" width="12" height="12" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 13 36 L 16 39 L 20 33" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="28" y="32" width="40" height="6" fill="currentColor" opacity="0.3" />

        <rect x="10" y="50" width="12" height="12" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 13 56 L 16 59 L 20 53" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="28" y="52" width="35" height="6" fill="currentColor" opacity="0.3" />

        <rect x="10" y="70" width="12" height="12" fill="white" stroke="currentColor" strokeWidth="2" />
        <rect x="28" y="72" width="40" height="6" fill="currentColor" opacity="0.2" />
      </g>

      {/* === CALENDAR/PLANNING ELEMENT === */}
      <g transform="translate(20, 230)">
        <rect x="0" y="0" width="90" height="70" fill="white" stroke="currentColor" strokeWidth="3" />
        <rect x="0" y="0" width="90" height="18" fill="currentColor" />
        <text x="45" y="13" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="system-ui">PLANNING</text>

        {/* Calendar grid */}
        {[0,1,2,3,4,5,6].map((i) => (
          <rect key={`cal-${i}`} x={8 + i * 11} y="25" width="9" height="9" fill={i === 3 ? "#CCFF00" : "currentColor"} opacity={i === 3 ? 1 : 0.1} stroke="currentColor" strokeWidth="1" />
        ))}
        {[0,1,2,3,4,5,6].map((i) => (
          <rect key={`cal2-${i}`} x={8 + i * 11} y="38" width="9" height="9" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
        ))}

        <rect x="10" y="55" width="70" height="8" fill="#CCFF00" opacity="0.3" />
      </g>

      {/* === CONNECTIE LIJNEN === */}
      <line x1="85" y1="150" x2="100" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" />
      <line x1="380" y1="130" x2="390" y2="110" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" />
      <line x1="110" y1="250" x2="150" y2="250" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" />

      {/* Connection dots */}
      <circle cx="85" cy="150" r="4" fill="#CCFF00" />
      <circle cx="390" cy="110" r="4" fill="#CCFF00" />

      {/* === SYNC INDICATOR === */}
      <g transform="translate(200, 270)">
        <circle cx="40" cy="25" r="22" fill="white" stroke="currentColor" strokeWidth="3" />
        <path d="M 30 25 A 12 12 0 1 1 50 25" stroke="#CCFF00" strokeWidth="4" fill="none" />
        <path d="M 50 25 L 55 20 M 50 25 L 55 30" stroke="#CCFF00" strokeWidth="3" />
        <path d="M 30 25 L 25 30 M 30 25 L 25 20" stroke="currentColor" strokeWidth="3" />
        <text x="40" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">SYNC</text>
      </g>

      {/* === STATUS BADGES === */}
      <g transform="translate(350, 280)">
        <rect x="0" y="0" width="100" height="35" fill="#CCFF00" stroke="currentColor" strokeWidth="3" />
        <text x="50" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">SAMENWERKING</text>
        <text x="50" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="system-ui">ACTIEF</text>
      </g>

      {/* Gebruiker avatars onderaan */}
      <g transform="translate(130, 300)">
        <circle cx="0" cy="20" r="18" fill="white" stroke="currentColor" strokeWidth="3" />
        <circle cx="0" cy="16" r="8" fill="currentColor" opacity="0.3" />
        <path d="M -12 32 Q 0 40 12 32" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
      </g>
      <g transform="translate(165, 305)">
        <circle cx="0" cy="15" r="15" fill="#CCFF00" stroke="currentColor" strokeWidth="3" />
        <circle cx="0" cy="12" r="7" fill="currentColor" opacity="0.4" />
      </g>
      <g transform="translate(195, 300)">
        <circle cx="0" cy="20" r="18" fill="white" stroke="currentColor" strokeWidth="3" />
        <circle cx="0" cy="16" r="8" fill="currentColor" opacity="0.3" />
      </g>
    </svg>
  );
}

// 2. Succes Gevoel - Trophy, viering, prestaties
export function SuccessIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="successGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="460" height="360" fill="url(#successGrid)" />

      {/* === GROTE TROFEE CENTRAAL === */}
      {/* Trofee basis */}
      <rect x="175" y="280" width="110" height="25" fill="currentColor" stroke="currentColor" strokeWidth="4" />
      <rect x="190" y="260" width="80" height="25" fill="currentColor" stroke="currentColor" strokeWidth="3" />
      <rect x="210" y="235" width="40" height="30" fill="currentColor" stroke="currentColor" strokeWidth="3" />

      {/* Trofee cup */}
      <path
        d="M 160 100 L 160 180 Q 160 220 230 235 Q 300 220 300 180 L 300 100 Z"
        fill="#CCFF00"
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Trofee handvatten */}
      <path d="M 160 120 Q 120 120 120 155 Q 120 190 160 190" fill="none" stroke="currentColor" strokeWidth="5" />
      <path d="M 300 120 Q 340 120 340 155 Q 340 190 300 190" fill="none" stroke="currentColor" strokeWidth="5" />

      {/* #1 op trofee */}
      <text x="230" y="175" textAnchor="middle" fontSize="50" fontWeight="bold" fill="currentColor" fontFamily="system-ui">#1</text>

      {/* Trofee glans */}
      <path d="M 180 110 L 185 170" stroke="white" strokeWidth="4" opacity="0.5" />
      <path d="M 195 105 L 198 140" stroke="white" strokeWidth="3" opacity="0.3" />

      {/* === CONFETTI/VIERING ELEMENTEN === */}
      {/* Sterren */}
      <g transform="translate(80, 60)">
        <polygon points="20,0 24,15 40,15 27,24 32,40 20,30 8,40 13,24 0,15 16,15" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
      </g>
      <g transform="translate(350, 50)" transform-origin="center">
        <polygon points="15,0 18,11 30,11 20,18 24,30 15,22 6,30 10,18 0,11 12,11" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
      </g>
      <g transform="translate(400, 120)">
        <polygon points="12,0 14,9 24,9 16,14 19,24 12,18 5,24 8,14 0,9 10,9" fill="currentColor" opacity="0.3" />
      </g>
      <g transform="translate(40, 150)">
        <polygon points="10,0 12,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 8,7" fill="currentColor" opacity="0.3" />
      </g>

      {/* Confetti rectangles */}
      <rect x="100" y="90" width="15" height="8" fill="#CCFF00" transform="rotate(25 107 94)" />
      <rect x="340" y="100" width="12" height="6" fill="currentColor" opacity="0.4" transform="rotate(-15 346 103)" />
      <rect x="70" y="200" width="10" height="5" fill="#CCFF00" transform="rotate(45 75 202)" />
      <rect x="380" y="180" width="14" height="7" fill="currentColor" opacity="0.3" transform="rotate(-30 387 183)" />
      <rect x="130" y="40" width="8" height="4" fill="currentColor" opacity="0.4" transform="rotate(60 134 42)" />
      <rect x="320" y="30" width="10" height="5" fill="#CCFF00" transform="rotate(-45 325 32)" />

      {/* Confetti circles */}
      <circle cx="60" cy="120" r="6" fill="#CCFF00" />
      <circle cx="400" cy="90" r="5" fill="currentColor" opacity="0.3" />
      <circle cx="90" cy="250" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="380" cy="240" r="6" fill="#CCFF00" opacity="0.6" />
      <circle cx="150" y="70" r="4" fill="currentColor" opacity="0.3" />

      {/* === ACHIEVEMENT BADGES === */}
      {/* Badge 1 - Links */}
      <g transform="translate(20, 50)">
        <rect x="0" y="0" width="70" height="50" fill="white" stroke="currentColor" strokeWidth="3" />
        <rect x="5" y="5" width="60" height="40" fill="#CCFF00" opacity="0.2" />
        <text x="35" y="22" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">RANKING</text>
        <text x="35" y="40" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor" fontFamily="system-ui">TOP 3</text>
      </g>

      {/* Badge 2 - Rechts */}
      <g transform="translate(370, 200)">
        <rect x="0" y="0" width="80" height="55" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="40" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">BEZOEKERS</text>
        <text x="40" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#CCFF00" fontFamily="system-ui">+500%</text>
      </g>

      {/* Badge 3 - Checkmark */}
      <g transform="translate(30, 260)">
        <circle cx="30" cy="30" r="28" fill="#CCFF00" stroke="currentColor" strokeWidth="4" />
        <path d="M 15 30 L 25 40 L 45 20" stroke="currentColor" strokeWidth="5" fill="none" />
      </g>

      {/* === GOAL REACHED BANNER === */}
      <g transform="translate(140, 310)">
        <rect x="0" y="0" width="180" height="40" fill="currentColor" stroke="currentColor" strokeWidth="4" />
        <text x="90" y="27" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#CCFF00" fontFamily="system-ui">DOEL BEREIKT!</text>
      </g>

      {/* Pijlen omhoog */}
      <g transform="translate(50, 180)">
        <path d="M 15 50 L 15 10" stroke="#CCFF00" strokeWidth="4" />
        <path d="M 15 10 L 5 25 M 15 10 L 25 25" stroke="#CCFF00" strokeWidth="3" />
      </g>
      <g transform="translate(390, 260)">
        <path d="M 15 45 L 15 10" stroke="#CCFF00" strokeWidth="4" />
        <path d="M 15 10 L 5 22 M 15 10 L 25 22" stroke="#CCFF00" strokeWidth="3" />
      </g>

      {/* Lichtstralen achter trofee */}
      <line x1="230" y1="50" x2="230" y2="20" stroke="#CCFF00" strokeWidth="3" opacity="0.4" />
      <line x1="180" y1="60" x2="160" y2="35" stroke="#CCFF00" strokeWidth="3" opacity="0.4" />
      <line x1="280" y1="60" x2="300" y2="35" stroke="#CCFF00" strokeWidth="3" opacity="0.4" />
      <line x1="140" y1="90" x2="110" y2="75" stroke="#CCFF00" strokeWidth="2" opacity="0.3" />
      <line x1="320" y1="90" x2="350" y2="75" stroke="#CCFF00" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

// 3. SEO Audit - Checklist, scores, analyse
export function SEOAuditIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="auditGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="360" fill="url(#auditGrid)" />

      {/* === MAIN AUDIT DOCUMENT === */}
      <rect x="120" y="30" width="240" height="300" fill="white" stroke="currentColor" strokeWidth="5" />

      {/* Document header */}
      <rect x="120" y="30" width="240" height="45" fill="currentColor" />
      <text x="240" y="58" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#CCFF00" fontFamily="system-ui">SEO AUDIT</text>

      {/* Score meter bovenaan */}
      <g transform="translate(175, 85)">
        <rect x="0" y="0" width="130" height="50" fill="#CCFF00" stroke="currentColor" strokeWidth="3" />
        <text x="65" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="system-ui">SCORE</text>
        <text x="65" y="42" textAnchor="middle" fontSize="22" fontWeight="bold" fill="currentColor" fontFamily="system-ui">87/100</text>
      </g>

      {/* Checklist items */}
      {/* Item 1 - OK */}
      <g transform="translate(135, 150)">
        <rect x="0" y="0" width="20" height="20" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 4 10 L 8 14 L 16 6" stroke="currentColor" strokeWidth="3" fill="none" />
        <text x="30" y="15" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="system-ui">Meta titles geoptimaliseerd</text>
      </g>

      {/* Item 2 - OK */}
      <g transform="translate(135, 180)">
        <rect x="0" y="0" width="20" height="20" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 4 10 L 8 14 L 16 6" stroke="currentColor" strokeWidth="3" fill="none" />
        <text x="30" y="15" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="system-ui">Headings structuur correct</text>
      </g>

      {/* Item 3 - OK */}
      <g transform="translate(135, 210)">
        <rect x="0" y="0" width="20" height="20" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 4 10 L 8 14 L 16 6" stroke="currentColor" strokeWidth="3" fill="none" />
        <text x="30" y="15" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="system-ui">Mobile-friendly</text>
      </g>

      {/* Item 4 - Waarschuwing */}
      <g transform="translate(135, 240)">
        <rect x="0" y="0" width="20" height="20" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
        <text x="10" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" fontFamily="system-ui">!</text>
        <text x="30" y="15" fontSize="11" fontWeight="bold" fill="currentColor" opacity="0.7" fontFamily="system-ui">Afbeeldingen missen alt-tekst</text>
      </g>

      {/* Item 5 - Error */}
      <g transform="translate(135, 270)">
        <rect x="0" y="0" width="20" height="20" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        <text x="10" y="15" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="system-ui">X</text>
        <text x="30" y="15" fontSize="11" fontWeight="bold" fill="currentColor" opacity="0.5" fontFamily="system-ui">Broken links gevonden (3)</text>
      </g>

      {/* Progress bar onderaan */}
      <g transform="translate(135, 300)">
        <rect x="0" y="0" width="210" height="15" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
        <rect x="2" y="2" width="182" height="11" fill="#CCFF00" />
      </g>

      {/* === FLOATING MAGNIFYING GLASS === */}
      <g transform="translate(20, 80)">
        <circle cx="40" cy="40" r="35" fill="white" stroke="currentColor" strokeWidth="4" />
        <circle cx="35" cy="35" r="22" fill="none" stroke="currentColor" strokeWidth="4" />
        <line x1="50" y1="50" x2="72" y2="72" stroke="currentColor" strokeWidth="6" />
        <circle cx="35" cy="35" r="10" fill="#CCFF00" opacity="0.3" />
        {/* Scan lijnen */}
        <line x1="25" y1="30" x2="45" y2="30" stroke="#CCFF00" strokeWidth="2" />
        <line x1="25" y1="40" x2="45" y2="40" stroke="#CCFF00" strokeWidth="2" />
      </g>

      {/* === ISSUES BADGE === */}
      <g transform="translate(380, 60)">
        <rect x="0" y="0" width="80" height="60" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="40" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" fontFamily="system-ui">ISSUES</text>
        <text x="40" y="48" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" fontFamily="system-ui">4</text>
        <circle cx="65" cy="15" r="8" fill="currentColor" />
        <text x="65" y="19" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" fontFamily="system-ui">!</text>
      </g>

      {/* === SPEED TEST RESULTS === */}
      <g transform="translate(380, 150)">
        <rect x="0" y="0" width="90" height="80" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="45" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" fontFamily="system-ui">LAADTIJD</text>

        {/* Speed gauge mini */}
        <circle cx="45" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2" />
        <path d="M 28 60 A 20 20 0 0 1 62 60" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.15" />
        <path d="M 28 60 A 20 20 0 0 1 60 40" stroke="#CCFF00" strokeWidth="4" fill="none" />
        <circle cx="45" cy="50" r="4" fill="#CCFF00" />
        <text x="45" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="system-ui">1.2s</text>
      </g>

      {/* === CRAWLER/SPIDER ICON === */}
      <g transform="translate(30, 220)">
        <circle cx="35" cy="35" r="30" fill="white" stroke="currentColor" strokeWidth="3" />
        {/* Spider body */}
        <ellipse cx="35" cy="38" rx="12" ry="15" fill="currentColor" opacity="0.3" />
        <circle cx="35" cy="28" r="8" fill="currentColor" opacity="0.3" />
        {/* Spider legs */}
        <line x1="25" y1="35" x2="10" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="45" y1="35" x2="60" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="23" y1="42" x2="8" y2="45" stroke="currentColor" strokeWidth="2" />
        <line x1="47" y1="42" x2="62" y2="45" stroke="currentColor" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="32" cy="26" r="2" fill="#CCFF00" />
        <circle cx="38" cy="26" r="2" fill="#CCFF00" />
      </g>

      {/* === RANKING PREVIEW === */}
      <g transform="translate(380, 260)">
        <rect x="0" y="0" width="90" height="70" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="45" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">GOOGLE</text>

        {/* Search result preview */}
        <rect x="8" y="24" width="74" height="18" fill="#CCFF00" opacity="0.3" stroke="currentColor" strokeWidth="1" />
        <rect x="12" y="28" width="50" height="4" fill="currentColor" />
        <rect x="12" y="35" width="65" height="3" fill="currentColor" opacity="0.3" />

        <rect x="8" y="46" width="74" height="18" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
        <rect x="12" y="50" width="45" height="4" fill="currentColor" opacity="0.3" />
        <rect x="12" y="57" width="60" height="3" fill="currentColor" opacity="0.2" />
      </g>

      {/* Connection lines */}
      <line x1="95" y1="120" x2="120" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
      <line x1="360" y1="90" x2="380" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />
      <circle cx="95" cy="120" r="3" fill="#CCFF00" />
    </svg>
  );
}

// 4. High-End Web Design - Design tools, premium look
export function HighEndDesignIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="designGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="360" fill="url(#designGrid)" />

      {/* === MAIN DESIGN CANVAS/ARTBOARD === */}
      <rect x="100" y="40" width="280" height="200" fill="white" stroke="currentColor" strokeWidth="5" />

      {/* Design software header */}
      <rect x="100" y="40" width="280" height="25" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
      <circle cx="115" cy="52" r="5" fill="#CCFF00" />
      <circle cx="130" cy="52" r="5" fill="currentColor" opacity="0.2" />
      <circle cx="145" cy="52" r="5" fill="currentColor" opacity="0.2" />
      <text x="240" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="system-ui">homepage.design</text>

      {/* Grid overlay op canvas */}
      <g opacity="0.1">
        <line x1="180" y1="65" x2="180" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="240" y1="65" x2="240" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="300" y1="65" x2="300" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="120" x2="380" y2="120" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="180" x2="380" y2="180" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* Website design op canvas */}
      {/* Header */}
      <rect x="115" y="75" width="250" height="30" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1" />
      <rect x="125" y="85" width="40" height="10" fill="currentColor" />
      <rect x="280" y="85" width="30" height="10" fill="#CCFF00" />
      <rect x="320" y="85" width="30" height="10" fill="currentColor" opacity="0.3" />

      {/* Hero section */}
      <rect x="115" y="110" width="120" height="60" fill="currentColor" opacity="0.05" />
      <rect x="125" y="120" width="80" height="10" fill="currentColor" />
      <rect x="125" y="135" width="100" height="6" fill="currentColor" opacity="0.3" />
      <rect x="125" y="148" width="50" height="15" fill="#CCFF00" />

      {/* Image placeholder */}
      <rect x="245" y="110" width="120" height="60" fill="#CCFF00" opacity="0.2" stroke="currentColor" strokeWidth="1" />
      <line x1="245" y1="110" x2="365" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="365" y1="110" x2="245" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.2" />

      {/* Cards row */}
      <rect x="115" y="180" width="75" height="45" fill="white" stroke="currentColor" strokeWidth="1" />
      <rect x="120" y="185" width="65" height="20" fill="currentColor" opacity="0.1" />
      <rect x="120" y="210" width="50" height="5" fill="currentColor" opacity="0.3" />

      <rect x="200" y="180" width="75" height="45" fill="white" stroke="currentColor" strokeWidth="1" />
      <rect x="205" y="185" width="65" height="20" fill="#CCFF00" opacity="0.2" />
      <rect x="205" y="210" width="50" height="5" fill="currentColor" opacity="0.3" />

      <rect x="285" y="180" width="75" height="45" fill="white" stroke="currentColor" strokeWidth="1" />
      <rect x="290" y="185" width="65" height="20" fill="currentColor" opacity="0.1" />
      <rect x="290" y="210" width="50" height="5" fill="currentColor" opacity="0.3" />

      {/* === COLOR PALETTE TOOL === */}
      <g transform="translate(20, 60)">
        <rect x="0" y="0" width="60" height="120" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="30" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">KLEUREN</text>

        <rect x="10" y="28" width="40" height="20" fill="#0a0a0a" stroke="currentColor" strokeWidth="1" />
        <rect x="10" y="52" width="40" height="20" fill="#CCFF00" stroke="currentColor" strokeWidth="1" />
        <rect x="10" y="76" width="40" height="20" fill="#fafaf8" stroke="currentColor" strokeWidth="1" />
        <rect x="10" y="100" width="18" height="12" fill="currentColor" opacity="0.3" />
        <rect x="32" y="100" width="18" height="12" fill="currentColor" opacity="0.15" />
      </g>

      {/* === TYPOGRAPHY PANEL === */}
      <g transform="translate(400, 60)">
        <rect x="0" y="0" width="70" height="90" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="35" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">FONTS</text>

        <text x="10" y="38" fontSize="14" fontWeight="bold" fill="currentColor" fontFamily="system-ui">Aa</text>
        <rect x="35" y="28" width="25" height="6" fill="currentColor" />
        <rect x="35" y="38" width="20" height="4" fill="currentColor" opacity="0.3" />

        <text x="10" y="62" fontSize="12" fontWeight="normal" fill="currentColor" fontFamily="system-ui">Aa</text>
        <rect x="35" y="52" width="25" height="5" fill="currentColor" opacity="0.5" />
        <rect x="35" y="60" width="18" height="4" fill="currentColor" opacity="0.2" />

        <rect x="10" y="72" width="50" height="10" fill="#CCFF00" opacity="0.3" />
      </g>

      {/* === LAYERS PANEL === */}
      <g transform="translate(400, 170)">
        <rect x="0" y="0" width="70" height="80" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="35" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">LAGEN</text>

        <rect x="8" y="25" width="54" height="14" fill="#CCFF00" opacity="0.3" stroke="currentColor" strokeWidth="1" />
        <rect x="8" y="42" width="54" height="14" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
        <rect x="8" y="59" width="54" height="14" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* === COMPONENT LIBRARY === */}
      <g transform="translate(20, 200)">
        <rect x="0" y="0" width="60" height="100" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="30" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" fontFamily="system-ui">ELEMENTS</text>

        {/* Mini components */}
        <rect x="8" y="25" width="44" height="12" fill="#CCFF00" stroke="currentColor" strokeWidth="1" />
        <rect x="8" y="42" width="44" height="8" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
        <circle cx="18" cy="62" r="6" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
        <rect x="30" y="56" width="20" height="12" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
        <rect x="8" y="78" width="20" height="15" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1" />
        <rect x="32" y="78" width="20" height="15" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* === PREMIUM BADGE === */}
      <g transform="translate(180, 260)">
        <rect x="0" y="0" width="120" height="45" fill="#CCFF00" stroke="currentColor" strokeWidth="4" />
        <text x="60" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" fontFamily="system-ui">PREMIUM</text>
        <text x="60" y="36" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" fontFamily="system-ui">DESIGN</text>
      </g>

      {/* Cursor */}
      <g transform="translate(260, 145)">
        <path d="M 0 0 L 0 18 L 5 14 L 9 22 L 12 20 L 8 12 L 14 12 Z" fill="currentColor" />
      </g>

      {/* Selection handles */}
      <rect x="243" y="108" width="124" height="64" fill="none" stroke="#CCFF00" strokeWidth="2" strokeDasharray="4,2" />
      <rect x="241" y="106" width="6" height="6" fill="#CCFF00" stroke="currentColor" strokeWidth="1" />
      <rect x="363" y="106" width="6" height="6" fill="#CCFF00" stroke="currentColor" strokeWidth="1" />
      <rect x="241" y="168" width="6" height="6" fill="#CCFF00" stroke="currentColor" strokeWidth="1" />
      <rect x="363" y="168" width="6" height="6" fill="#CCFF00" stroke="currentColor" strokeWidth="1" />

      {/* Ruler marks */}
      <g opacity="0.3">
        <line x1="100" y1="35" x2="380" y2="35" stroke="currentColor" strokeWidth="1" />
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((i) => (
          <line key={`ruler-${i}`} x1={100 + i * 20} y1="35" x2={100 + i * 20} y2="40" stroke="currentColor" strokeWidth="1" />
        ))}
      </g>
    </svg>
  );
}

// 5. Geen Gedoe, Gewoon Resultaat - Simpel pad naar succes
export function NoHassleResultsIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="noHassleGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="340" fill="url(#noHassleGrid)" />

      {/* === SIMPELE ROUTE VAN A NAAR B === */}
      {/* Start punt A */}
      <g transform="translate(40, 140)">
        <circle cx="30" cy="30" r="35" fill="white" stroke="currentColor" strokeWidth="4" />
        <text x="30" y="38" textAnchor="middle" fontSize="28" fontWeight="bold" fill="currentColor" fontFamily="system-ui">A</text>
        <text x="30" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="system-ui">START</text>
      </g>

      {/* Directe lijn - geen omwegen */}
      <line x1="110" y1="170" x2="330" y2="170" stroke="#CCFF00" strokeWidth="8" />

      {/* Pijlpunt */}
      <path d="M 330 170 L 310 155 M 330 170 L 310 185" stroke="#CCFF00" strokeWidth="6" />

      {/* Checkmarks langs de route */}
      <g transform="translate(150, 145)">
        <circle cx="15" cy="15" r="12" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 8 15 L 13 20 L 22 11" stroke="currentColor" strokeWidth="3" fill="none" />
      </g>
      <g transform="translate(220, 145)">
        <circle cx="15" cy="15" r="12" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 8 15 L 13 20 L 22 11" stroke="currentColor" strokeWidth="3" fill="none" />
      </g>
      <g transform="translate(290, 145)">
        <circle cx="15" cy="15" r="12" fill="#CCFF00" stroke="currentColor" strokeWidth="2" />
        <path d="M 8 15 L 13 20 L 22 11" stroke="currentColor" strokeWidth="3" fill="none" />
      </g>

      {/* Eind punt B - Resultaat */}
      <g transform="translate(360, 130)">
        <circle cx="45" cy="45" r="50" fill="#CCFF00" stroke="currentColor" strokeWidth="5" />
        <text x="45" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor" fontFamily="system-ui">DOEL</text>
        <text x="45" y="60" textAnchor="middle" fontSize="26" fontWeight="bold" fill="currentColor" fontFamily="system-ui">✓</text>
      </g>

      {/* === DOORGESTREEPTE COMPLEXITEIT BOVEN === */}
      <g transform="translate(120, 40)" opacity="0.25">
        {/* Complex pad dat doorgestreept is */}
        <path d="M 0 30 Q 40 0 80 30 Q 120 60 160 30 Q 200 0 240 30" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5" />
        {/* Doorstreep */}
        <line x1="-10" y1="50" x2="260" y2="10" stroke="currentColor" strokeWidth="4" />
        <line x1="-10" y1="10" x2="260" y2="50" stroke="currentColor" strokeWidth="4" />
      </g>

      {/* GEEN GEDOE label boven doorgestreept pad */}
      <g transform="translate(175, 30)">
        <rect x="0" y="0" width="130" height="30" fill="white" stroke="currentColor" strokeWidth="2" />
        <text x="65" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="system-ui">GEEN GEDOE</text>
      </g>

      {/* === RESULTATEN DASHBOARD ONDERAAN === */}
      <g transform="translate(80, 240)">
        <rect x="0" y="0" width="320" height="80" fill="white" stroke="currentColor" strokeWidth="4" />

        {/* Stats */}
        <g transform="translate(20, 15)">
          <text x="0" y="12" fontSize="9" fontWeight="bold" fill="currentColor" opacity="0.6" fontFamily="system-ui">BEZOEKERS</text>
          <text x="0" y="35" fontSize="20" fontWeight="bold" fill="currentColor" fontFamily="system-ui">+247%</text>
          <polyline points="0,55 15,50 30,52 45,42 60,35" stroke="#CCFF00" strokeWidth="3" fill="none" />
        </g>

        <line x1="110" y1="10" x2="110" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.2" />

        <g transform="translate(125, 15)">
          <text x="0" y="12" fontSize="9" fontWeight="bold" fill="currentColor" opacity="0.6" fontFamily="system-ui">CONVERSIES</text>
          <text x="0" y="35" fontSize="20" fontWeight="bold" fill="currentColor" fontFamily="system-ui">+89%</text>
          <polyline points="0,55 15,52 30,48 45,40 60,32" stroke="#CCFF00" strokeWidth="3" fill="none" />
        </g>

        <line x1="215" y1="10" x2="215" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.2" />

        <g transform="translate(230, 15)">
          <text x="0" y="12" fontSize="9" fontWeight="bold" fill="currentColor" opacity="0.6" fontFamily="system-ui">RANKING</text>
          <text x="0" y="35" fontSize="20" fontWeight="bold" fill="#CCFF00" fontFamily="system-ui">#1</text>
          <text x="45" y="35" fontSize="12" fontWeight="bold" fill="currentColor" opacity="0.5" fontFamily="system-ui">Google</text>
        </g>
      </g>

      {/* === FLOATING BADGES === */}
      {/* Snelheid badge */}
      <g transform="translate(20, 250)">
        <rect x="0" y="0" width="50" height="50" fill="#CCFF00" stroke="currentColor" strokeWidth="3" />
        <text x="25" y="25" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">SNEL</text>
        <text x="25" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" fontFamily="system-ui">⚡</text>
      </g>

      {/* Simpel badge */}
      <g transform="translate(410, 250)">
        <rect x="0" y="0" width="55" height="50" fill="white" stroke="currentColor" strokeWidth="3" />
        <text x="27" y="22" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="system-ui">SIMPEL</text>
        <text x="27" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#CCFF00" fontFamily="system-ui">→</text>
      </g>

      {/* === TITEL BANNER === */}
      <g transform="translate(140, 90)">
        <rect x="0" y="0" width="200" height="35" fill="currentColor" stroke="currentColor" strokeWidth="3" />
        <text x="100" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#CCFF00" fontFamily="system-ui">GEWOON RESULTAAT</text>
      </g>

      {/* Decoratieve elementen */}
      <circle cx="450" cy="80" r="15" fill="#CCFF00" opacity="0.3" />
      <circle cx="30" cy="60" r="10" fill="currentColor" opacity="0.1" />
      <rect x="440" y="180" width="20" height="20" fill="currentColor" opacity="0.1" transform="rotate(45 450 190)" />
    </svg>
  );
}

// Behoud de simpelere icons voor andere doeleinden (kleiner formaat)
export function BrowserWindowIcon({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      <rect x="2" y="2" width="96" height="76" />
      <line x1="2" y1="16" x2="98" y2="16" />
      <circle cx="12" cy="9" r="3" fill="#CCFF00" stroke="#CCFF00" />
      <circle cx="24" cy="9" r="3" fill="currentColor" />
      <circle cx="36" cy="9" r="3" fill="currentColor" />
      <rect x="48" y="5" width="44" height="8" strokeWidth="2" />
      <rect x="51" y="7" width="4" height="4" fill="#CCFF00" stroke="none" />
      <line x1="10" y1="28" x2="60" y2="28" strokeWidth="4" />
      <line x1="10" y1="40" x2="90" y2="40" strokeWidth="2" opacity="0.5" />
      <line x1="10" y1="48" x2="75" y2="48" strokeWidth="2" opacity="0.5" />
      <line x1="10" y1="56" x2="85" y2="56" strokeWidth="2" opacity="0.5" />
      <rect x="10" y="64" width="30" height="10" fill="#CCFF00" stroke="#CCFF00" />
    </svg>
  );
}

export function MobileDeviceIcon({ className = "h-32 w-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      <rect x="2" y="2" width="36" height="76" />
      <line x1="14" y1="8" x2="26" y2="8" strokeWidth="2" />
      <rect x="5" y="12" width="30" height="56" strokeWidth="2" />
      <line x1="8" y1="20" x2="28" y2="20" strokeWidth="3" />
      <line x1="8" y1="28" x2="32" y2="28" strokeWidth="1.5" opacity="0.5" />
      <line x1="8" y1="34" x2="26" y2="34" strokeWidth="1.5" opacity="0.5" />
      <rect x="8" y="42" width="16" height="6" fill="#CCFF00" stroke="#CCFF00" />
      <rect x="8" y="52" width="24" height="12" strokeWidth="1.5" />
      <line x1="16" y1="74" x2="24" y2="74" strokeWidth="3" stroke="#CCFF00" />
    </svg>
  );
}

export function SpeedGaugeIcon({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      <circle cx="40" cy="42" r="34" strokeWidth="2" />
      <path d="M 16 52 A 28 28 0 0 1 64 52" strokeWidth="6" opacity="0.2" />
      <path d="M 16 52 A 28 28 0 0 1 60 24" strokeWidth="6" stroke="#CCFF00" />
      <line x1="40" y1="12" x2="40" y2="18" strokeWidth="2" />
      <line x1="16" y1="42" x2="22" y2="42" strokeWidth="2" />
      <line x1="64" y1="42" x2="58" y2="42" strokeWidth="2" />
      <line x1="40" y1="42" x2="58" y2="24" strokeWidth="4" />
      <circle cx="40" cy="42" r="5" fill="#CCFF00" stroke="#CCFF00" />
      <text x="40" y="66" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold" fontFamily="system-ui">100</text>
    </svg>
  );
}

// Exports voor backwards compatibility
export const GrowthChartIcon = PremiumGrowthIllustration;
export const WebsiteShowcaseIcon = PremiumHeroIllustration;
export const CodeBracketIcon = BrowserWindowIcon;
export const RocketLaunchIcon = SpeedGaugeIcon;
