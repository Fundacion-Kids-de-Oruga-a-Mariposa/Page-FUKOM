import Image from "next/image";
import { aliados } from "@/content/aliados";

const { titulo, descripcion, pregunta, modalidades } = aliados.contribucion;

export default function Contribucion() {
  return (
    <section>
      <Image
        src="/images/aliados/onda-contribucion.svg"
        alt=""
        width={1440}
        height={60}
        className="block h-auto w-full -scale-y-100"
      />

      <div className="-mt-px flex flex-col gap-6 bg-primary-10 p-10">
        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-[56px]/16 font-extrabold text-[#000000]">
            {titulo}
          </h2>
          <p className="text-xl/6 text-neutral-1000">{descripcion}</p>
        </div>

        <p className="font-heading text-[28px]/8 text-neutral-1000">
          {pregunta}
        </p>

        <ul className="flex gap-[19.142px]">
          {modalidades.map(({ icono, texto }) => (
            <li
              key={texto}
              className="flex min-h-[170.913px] flex-1 flex-col gap-[22.434px] rounded-[27.346px] bg-white p-[21.877px]"
            >
              <Image
                src={icono.src}
                alt=""
                width={icono.ancho}
                height={56}
                className="h-14 w-auto self-start"
              />
              <p className="whitespace-pre-line text-[22px]/[27.5px] font-semibold text-neutral-1000">
                {texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
