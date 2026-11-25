import Hero from "@/features/que-hacemos/Hero";
import Ecosistema from "@/features/que-hacemos/Ecosistema";
import Diferentes from "@/features/que-hacemos/Diferentes";
import Metodologia from "@/features/que-hacemos/Metodologia";

export default function QueHacemos() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <Hero />
      <Ecosistema />
      <Diferentes />
      <Metodologia />
    </main>
  );
}
