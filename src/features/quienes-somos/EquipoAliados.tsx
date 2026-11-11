import Image from "next/image";
import Button from "@/components/ui/Button";
import { quienesSomos } from "@/content/quienes-somos";

const { titulo, items } = quienesSomos.equipoAliados;

export default function EquipoAliados() {
  return (
    <section className="flex flex-col gap-8 px-10 pb-1 pt-[17px]">
      <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
        {titulo}
      </h2>

      <div className="flex items-start gap-8">
        {items.map(({ titulo: tituloTarjeta, descripcion, boton, href }) => (
          <article
            key={tituloTarjeta}
            className="flex flex-1 items-center overflow-clip rounded-24 bg-white shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
          >
            <div className="relative h-63 w-63 shrink-0">
              <Image
                src="/images/programas/placeholder.png"
                alt=""
                fill
                sizes="252px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col items-start gap-5 px-4 pb-4 pt-16">
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-[32px]/10 font-semibold text-neutral-1000">
                  {tituloTarjeta}
                </h3>
                <p className="text-xl/6 font-medium text-neutral-800">
                  {descripcion}
                </p>
              </div>
              <Button variant="secundario" href={href}>
                {boton}
                <Image
                  src="/icons/chevron.svg"
                  alt=""
                  width={6}
                  height={10}
                  className="-mr-px ml-px"
                />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
