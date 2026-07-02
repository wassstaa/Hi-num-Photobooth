// Wrapper animasi kertas keluar dari mesin photobooth — membungkus elemen strip + shadow
// dengan ref yang dikontrol dari hooks/usePrintAnimation.js.

import "./PrintAnimation.css";

export default function PrintAnimation({ stripRef, shadowRef, children }) {
  return (
    <div className="print-animation-wrap">
      <div className="print-animation-shadow" ref={shadowRef} aria-hidden="true" />
      <div className="print-animation-strip" ref={stripRef}>
        {children}
      </div>
    </div>
  );
}
