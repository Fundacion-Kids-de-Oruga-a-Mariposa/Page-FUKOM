import Image from "next/image";
import { quienesSomos } from "@/content/quienes-somos";

const { titulo, descripcion } = quienesSomos.hero;

export default function Hero() {
  return (
    <section className="relative flex h-[520px] flex-col justify-end overflow-clip px-10 pb-20 pt-10">
      <Image
        src="/images/quienes-somos/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="relative flex max-w-[1312px] flex-col gap-5 text-neutral-1000">
        <h1 className="font-heading text-[72px]/[86px] font-extrabold">
          {titulo}
        </h1>
        <p className="text-[32px]/10 font-medium">{descripcion}</p>
      </div>
    </section>
  );
}
