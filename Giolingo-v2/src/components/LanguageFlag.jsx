// SVG flags render consistently on Windows, where emoji flags show GB/RU.
export default function LanguageFlag({language,size=44}){
 return <svg className="language-flag" width={size} height={size*.72} viewBox="0 0 60 42" role="img" aria-label={language==='en'?'აშშ-ის დროშა':'რუსეთის დროშა'}>
 <defs><clipPath id={`flag-${language}-${size}`}><rect width="60" height="42" rx="9"/></clipPath></defs>
 <g clipPath={`url(#flag-${language}-${size})`}>
 <rect width="60" height="42" fill="#fff"/>
 {language==='ru'?<><path fill="#2574ed" d="M0 14h60v14H0z"/><path fill="#f44755" d="M0 28h60v14H0z"/></>:<><path stroke="#f44755" strokeWidth="3.24" d="M0 1.62h60M0 8.08h60M0 14.54h60M0 21h60M0 27.46h60M0 33.92h60M0 40.38h60"/><path fill="#19a9e5" d="M0 0h27v23H0z"/>{Array.from({length:12},(_,i)=><text key={i} x={4+(i%4)*6.1} y={7+Math.floor(i/4)*7} fill="white" fontSize="7" textAnchor="middle">★</text>)}</>}
 </g></svg>;
}
