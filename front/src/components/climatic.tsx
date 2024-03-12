import { useEffect, useState } from "react";
import { getClimate } from "../services/methods";

function Climatic() {
  const [climatic, setClimatic] = useState<any>();
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    if (!requested && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const climateData = (await getClimate(
            position.coords.latitude,
            position.coords.longitude
          )) as any;
          setClimatic(climateData.data);
          setRequested(true);
        },
        function (error) {
          console.error("Erro ao obter a localização:", error.message);
        }
      );
    }
  }, [requested]);
  if (!climatic) return <></>;
  return (
    <div className="absolute text-white flex gap-4 font-bold">
      <p>Temperatura</p>
      {climatic.current.temperature_2m.toString().replace(".", ",")}{" "}
      {climatic && climatic.current_units.temperature_2m}
    </div>
  );
}

export default Climatic;
