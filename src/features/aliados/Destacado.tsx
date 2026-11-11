import Image from "next/image";
import { aliados } from "@/content/aliados";

const { etiqueta, cifra, titulo, descripcion, imagen } = aliados.destacado;

export default function Destacado() {
  return (
    <section className="flex h-89.5 px-10">
      <div className="flex flex-1 items-center rounded-l-24 bg-primary-10 p-4 shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex flex-col gap-3">
            <p className="flex w-fit items-center gap-2.5 rounded-full bg-yellow-100 px-3 py-2 text-base/5 font-medium text-neutral-1000">
              <Image
                src="/images/aliados/gorro-graduacion.svg"
                alt=""
                width={16}
                height={12}
              />
              {etiqueta}
            </p>
            <p className="font-heading text-[72px]/[86px] font-extrabold text-primary-500">
              {cifra}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px]/9 font-semibold text-[#000000]">
              {titulo}
            </h2>
            <p className="text-xl/6 text-neutral-900">{descripcion}</p>
          </div>
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
      </div>
    </section>
  );
}
