import { tr, trf } from "../i18n";
// Giolingo's own leaf-eared reading owl, drawn as a crisp scalable brand mark.
export default function KidsLogo({
  size = 28
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width={size} height={size} role="img" aria-label={tr("Giolingo Kids-\u10D8\u10E1 \u10D1\u10E3")} focusable="false" style={{
    display: 'inline-block',
    verticalAlign: 'middle',
    flexShrink: 0
  }}>
  <ellipse cx="48" cy="88" rx="27" ry="5" fill="#e1ead9" />
  <ellipse cx="35" cy="82" rx="9" ry="5" fill="#edb344" transform="rotate(-12 35 82)" />
  <ellipse cx="62" cy="82" rx="9" ry="5" fill="#edb344" transform="rotate(12 62 82)" />
  <path d="M24 35C17 15 24 9 40 18C49 9 62 12 68 21C80 15 84 22 78 40C89 54 82 74 70 80C57 87 36 85 25 78C12 69 13 49 24 35Z" fill="#63bc3c" />
  <path d="M24 35C20 20 25 16 37 22L30 34Z" fill="#87d157" />
  <path d="M49 19C57 11 63 16 65 22L57 27Z" fill="#87d157" />
  <path d="M24 43C14 46 9 59 13 66C17 69 23 63 27 56Z" fill="#43a239" />
  <path d="M75 43C85 46 88 59 83 66C79 69 73 63 70 56Z" fill="#43a239" />
  <path d="M23 43C23 29 35 26 47 33C60 25 73 30 73 44C73 59 61 67 48 66C35 67 23 59 23 43Z" fill="#eff7d7" />
  <ellipse cx="37" cy="43" rx="9" ry="12" fill="#fff" />
  <ellipse cx="59" cy="43" rx="9" ry="12" fill="#fff" />
  <ellipse cx="39" cy="44" rx="4.5" ry="7" fill="#254735" />
  <ellipse cx="57" cy="44" rx="4.5" ry="7" fill="#254735" />
  <circle cx="40" cy="41" r="1.6" fill="#fff" />
  <circle cx="58" cy="41" r="1.6" fill="#fff" />
  <path d="M43 53Q48 49 53 53L48 59Z" fill="#edb344" />
  <circle cx="29" cy="54" r="3.5" fill="#e5bf70" opacity=".45" />
  <circle cx="67" cy="54" r="3.5" fill="#e5bf70" opacity=".45" />
  <path d="M31 63Q39 59 48 65Q57 59 65 63V78Q56 74 48 80Q40 74 31 78Z" fill="#fff6d8" stroke="#d7b65b" strokeWidth="1.6" strokeLinejoin="round" />
  <path d="M48 65V79M35 67Q40 66 44 69M35 71Q40 70 44 73M52 69Q57 66 61 67M52 73Q57 70 61 71" fill="none" stroke="#b2c990" strokeWidth="1.5" strokeLinecap="round" />
  <path d="M84 12L86 18L92 20L86 22L84 28L82 22L76 20L82 18Z" fill="#e5b64b" />
 </svg>;
}
