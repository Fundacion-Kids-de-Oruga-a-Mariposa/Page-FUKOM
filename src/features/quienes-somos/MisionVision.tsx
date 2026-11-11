import Image from "next/image";
import { quienesSomos } from "@/content/quienes-somos";

const items = quienesSomos.misionVision;

const franjas = {
  naranja: "bg-secondary",
  azul: "bg-primary",
};

export default function MisionVision() {
  return (
    <section className="flex items-center gap-6 p-10">
      <div className="flex flex-1 flex-col justify-center gap-6">
        {items.map(({ color, titulo, descripcion }) => (
          <article
            key={titulo}
            className="flex items-stretch overflow-clip rounded-24 bg-white shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
          >
            <div
              className={`w-6 shrink-0 ${franjas[color]}`}
              aria-hidden="true"
            />
            <div className="flex flex-1 flex-col gap-4 px-8 pb-8 pt-16 text-neutral-1000">
              <h2 className="font-heading text-[28px]/8 font-normal">
                {titulo}
              </h2>
              <p className="text-xl/6">{descripcion}</p>
            </div>
          </article>
        ))}
      </div>

      <Image
        src="/images/quienes-somos/santi-te-invita.svg"
        alt=""
        width={584}
        height={482}
        className="shrink-0"
      />
    </section>
  );
}
