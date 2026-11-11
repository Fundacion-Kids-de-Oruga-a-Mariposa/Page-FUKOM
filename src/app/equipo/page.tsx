import Hero from "@/features/equipo/Hero";
import NuestroEquipo from "@/features/equipo/NuestroEquipo";
import EquipoApoyo from "@/features/equipo/EquipoApoyo";
import Voluntariado from "@/features/equipo/Voluntariado";

export default function Equipo() {
  return (
    <main className="flex flex-col gap-8 pb-16">
      <Hero />
      <NuestroEquipo />
      <EquipoApoyo />
      <Voluntariado />
    </main>
  );
}
