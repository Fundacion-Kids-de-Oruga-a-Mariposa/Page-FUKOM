import Hero from "@/features/aliados/Hero";
import NuestrosAliados from "@/features/aliados/NuestrosAliados";
import Destacado from "@/features/aliados/Destacado";
import Beneficios from "@/features/aliados/Beneficios";
import Contribucion from "@/features/aliados/Contribucion";
import Solicitud from "@/features/aliados/Solicitud";

export default function AliadosEstrategicos() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <Hero />
      <NuestrosAliados />
      <Destacado />
      <Beneficios />
      <Contribucion />
      <Solicitud />
    </main>
  );
}
