import Hero from "@/features/que-hacemos/Hero";
import Ecosistema from "@/features/que-hacemos/Ecosistema";

export default function QueHacemos() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <Hero />
      <Ecosistema />
    </main>
  );
}
