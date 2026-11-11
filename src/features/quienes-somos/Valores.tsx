import Image from "next/image";
import { quienesSomos } from "@/content/quienes-somos";

const { titulo, items } = quienesSomos.valores;

const fondos = {
  verde: "bg-green-10",
  azul: "bg-primary-10",
  amarillo: "bg-yellow-alpha-10",
  naranja: "bg-secondary-alpha-10",
  rojo: "bg-red-alpha-10",
};

export default function Valores() {
  return (
    <section id="valores" className="flex flex-col gap-8 p-10">
      <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
        {titulo}
      </h2>

      <div className="flex items-stretch gap-4">
        {items.map(({ color, icono, titulo: tituloValor, descripcion }) => (
          <article
            key={tituloValor}
            className={`flex flex-1 flex-col gap-4 rounded-20 px-4 py-6 text-neutral-1000 ${fondos[color]}`}
          >
            <Image
              src={icono.src}
              alt=""
              width={icono.ancho}
              height={56}
              className="h-14 w-auto self-start"
            />
            <h3 className="whitespace-pre-line font-heading text-xl/6 font-extrabold">
              {tituloValor}
            </h3>
            <p className="text-xl/6">{descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
