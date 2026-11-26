import Image from "next/image";
import { queHacemos } from "@/content/que-hacemos";

const { titulo, momentos, participantes, datos } = queHacemos.sabado;

export default function Sabado() {
  return (
    <section>
      <Image
        src="/images/onda-programas.svg"
        alt=""
        width={1440}
        height={60}
        className="block h-auto w-full rotate-180"
      />

      <div className="-mt-px flex flex-col gap-10 bg-yellow-alpha-10 px-10 pb-20 pt-10">
        <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
          {titulo}
        </h2>

        <ol className="flex items-stretch gap-5">
          {momentos.map(({ numero, destacado, texto }) => (
            <li
              key={numero}
              className="flex flex-1 flex-col gap-5 rounded-24 bg-white p-6"
            >
              <span className="font-heading text-[40px]/10 font-extrabold text-secondary">
                {numero}
              </span>
              <p className="text-xl/6 font-medium text-neutral-1000">
                <strong className="font-bold">{destacado}</strong> {texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="flex">
          <div className="flex w-136 shrink-0 flex-col justify-center gap-4 rounded-l-24 bg-secondary-300 px-6 py-10">
            <p className="font-heading text-[120px]/30 font-extrabold text-white">
              {participantes.cifra}
            </p>
            <p className="pr-9 font-heading text-[28px]/8 text-white">
              {participantes.texto}
            </p>
          </div>

          <ul className="flex flex-1 flex-col gap-5 rounded-r-24 bg-white p-10">
            {datos.map(({ etiqueta, texto, icono }, i) => (
              <li key={etiqueta} className="flex flex-col gap-5">
                {i > 0 && (
                  <Image
                    src="/images/que-hacemos/sabado/divisor.svg"
                    alt=""
                    width={774}
                    height={1}
                    className="h-px w-full object-fill"
                  />
                )}
                <div className="flex items-center gap-3">
                  <Image src={icono} alt="" width={64} height={64} />
                  <div className="flex flex-1 flex-col gap-2 text-xl/6 text-neutral-1000">
                    <p className="font-semibold">{etiqueta}</p>
                    <p className="font-medium">{texto}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
