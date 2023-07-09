import Spline from "@splinetool/react-spline";
import { useState,useEffect } from "react";
export function Design (){
    useEffect(() => {
        // Simulación de una operación de carga larga
        setTimeout(() => {
          setLoading(false); // Marcar la carga de otros elementos como completa después de un tiempo (puedes reemplazar esto con tu lógica de carga real)
        }, 2000);
      }, []);

      const handleSplineLoad = () => {
        setSplineLoaded(true);
      };

    const [loading, setLoading] = useState(true);
    const [splineLoaded, setSplineLoaded] = useState(false);
    <Spline 
    scene="https://prod.spline.design/qeT-s5WVKtGUYfKt/scene.splinecode"
    onLoad={handleSplineLoad}
  />
}