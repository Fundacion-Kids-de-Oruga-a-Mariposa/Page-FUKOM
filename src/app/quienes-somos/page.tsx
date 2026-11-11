import Hero from "@/features/quienes-somos/Hero";
import Valores from "@/features/quienes-somos/Valores";
import MisionVision from "@/features/quienes-somos/MisionVision";
import Promesa from "@/features/quienes-somos/Promesa";
import EquipoAliados from "@/features/quienes-somos/EquipoAliados";

export default function QuienesSomos() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <Hero />
      <Valores />
      <MisionVision />
      <Promesa />
      <EquipoAliados />
    </main>
  );
}
