import Image from "next/image";
import { pintandoMiFuturo } from "@/content/pintando-mi-futuro";

const { titulo, descripcion } = pintandoMiFuturo.hero;

export default function Hero() {
  return (
    <section className="h-105 p-10">
      <div className="relative flex h-full flex-col justify-end overflow-clip rounded-24 p-6">
        <Image
          src="/images/programas/placeholder.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative flex flex-col gap-4 text-neutral-1000">
          <h1 className="font-heading text-[56px]/16 font-extrabold">
            {titulo}
          </h1>
          <p className="font-heading text-[32px]/10">{descripcion}</p>
        </div>
      </div>
    </section>
  );
}
