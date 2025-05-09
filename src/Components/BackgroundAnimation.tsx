import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.net.min"; 
type VantaEffect = {
  destroy:()=>void
} 
const BackgroundAnimation = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        DOTS({
          el: vantaRef.current,
          THREE,
          color: 0x00ffff,
          backgroundColor: 0x0f172a,
        
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="w-full h-screen rounded-full">
    
  </div>;
};

export default BackgroundAnimation;
