import Image from "next/image";
import Button from "@/components/ui/Button";
import { equipo } from "@/content/equipo";

const { titulo, descripcion, tarjeta, imagen, etiqueta } = equipo.voluntariado;

const iconos = {
  estrella: {
    src: "/images/equipo/voluntariado/estrella.svg",
    posicion: "inset-0",
  },
  corazon: {
    src: "/images/equipo/voluntariado/corazon.svg",
    posicion: "left-[8.71px] top-[6.37px] h-[39.075px] w-[34.443px]",
  },
  mariposa: {
    src: "/images/equipo/voluntariado/mariposa.svg",
    posicion: "left-[7.69%] top-[5.77%] h-[87.1%] w-[86.54%]",
  },
};

export default function Voluntariado() {
  return (
    <section className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-5 px-10">
        <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
          {titulo}
        </h2>
        {/* <p className="text-[28px]/9 font-medium text-[#858585]">
          {descripcion}
        </p> */}
      </div>

      <div className="flex h-112.5 px-10">
        <div className="flex flex-1 items-center rounded-l-24 bg-primary-200 p-4 shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]">
          <div className="flex flex-1 flex-col items-start gap-8 p-4">
            <p className="w-151 text-2xl/8 font-medium text-neutral-1000">
              {tarjeta.texto}
            </p>

            <ul className="flex flex-col gap-2">
              {tarjeta.beneficios.map(({ icono, texto }, indice) => (
                <li key={indice} className="flex items-center gap-4.5">
                  <span className="relative size-13 shrink-0">
                    <Image
                      src={iconos[icono].src}
                      alt=""
                      width={52}
                      height={52}
                      className={`absolute ${iconos[icono].posicion}`}
                    />
                  </span>
                  <span className="text-2xl/8 font-semibold text-neutral-1000">
                    {texto}
                  </span>
                </li>
              ))}
            </ul>

            <Button variant="secundario" href={tarjeta.href}>
              {tarjeta.boton}
              <Image
                src="/icons/chevron.svg"
                alt=""
                width={6}
                height={10}
                className="-mr-px ml-px"
              />
            </Button>
          </div>
        </div>

        <div className="relative flex-1 overflow-clip rounded-r-24">
          <Image
            src={imagen}
            alt=""
            fill
            sizes="680px"
            className="object-cover"
          />
          <p className="absolute bottom-7 right-7 rounded-full bg-yellow-100 px-3 py-2 text-base/5 font-medium text-neutral-1000">
            {etiqueta}
          </p>
        </div>
      </div>
    </section>
  );
}
