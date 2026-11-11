import Image from "next/image";
import { equipo } from "@/content/equipo";

const { etiqueta, titulo, descripcion, cifras } = equipo.equipoApoyo;

const colores = {
  verde: { numero: "text-green" },
  naranja: { numero: "text-secondary" },
  rojo: { numero: "text-red" },
};

export default function EquipoApoyo() {
  return (
    <section>
      <Image
        src="/images/equipo/onda-apoyo.svg"
        alt=""
        width={1440}
        height={60}
        className="block h-auto w-full -scale-y-100"
      />

      <div className="-mt-px flex bg-yellow-alpha-10">
        <div className="flex flex-1 items-center justify-center px-10 py-5">
          <div className="relative m-2.5 h-96.75 flex-1">
            <Image
              src="/images/equipo/imagen-apoyo.svg"
              alt=""
              fill
              sizes="620px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 px-10 py-5">
          <div className="flex flex-1 flex-col justify-center gap-6 p-2.5">
            <div className="flex flex-col gap-3">
              <p className="w-fit rounded-full bg-yellow-100 px-3 py-2 text-base/5 font-medium text-neutral-1000">
                {etiqueta}
              </p>
              <h2 className="font-heading text-[40px]/12 font-extrabold text-neutral-1000">
                {titulo}
              </h2>
              <p className="text-base/5 text-neutral-1000">{descripcion}</p>
            </div>

            <div className="flex gap-10.5 py-2">
              {cifras.map(({ color, valor, descripcion: texto }) => (
                <div key={texto} className={`flex-1 border-t-2 border-black`}>
                  <div className="pt-3.75">
                    <p
                      className={`font-heading text-[40px]/12 ${colores[color].numero}`}
                    >
                      {valor}
                    </p>
                    <p className="w-39.25 text-base/5 text-neutral-1000">
                      {texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/equipo/onda-apoyo.svg"
        alt=""
        width={1440}
        height={60}
        className="-mt-px block h-auto w-full"
      />
    </section>
  );
}
