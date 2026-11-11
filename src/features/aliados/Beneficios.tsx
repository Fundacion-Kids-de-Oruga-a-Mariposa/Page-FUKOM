import Image from "next/image";
import { aliados } from "@/content/aliados";

const { titulo, items } = aliados.beneficios;

const fondos = {
  verde: "bg-green-10",
  azul: "bg-primary-100",
  amarillo: "bg-yellow-alpha-10",
  naranja: "bg-secondary-alpha-10",
};

export default function Beneficios() {
  return (
    <section className="flex flex-col gap-8 p-10">
      <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
        {titulo}
      </h2>

      <div className="flex gap-4">
        {items.map(({ color, icono, titulo: tituloTarjeta, descripcion }) => (
          <article
            key={tituloTarjeta}
            className={`flex flex-1 flex-col gap-5 rounded-24 p-6 ${fondos[color]}`}
          >
            <Image
              src={icono.src}
              alt=""
              width={icono.ancho}
              height={56}
              className="h-14 w-auto self-start"
            />
            <div className="flex flex-col gap-4 text-xl/6 text-neutral-1000">
              <h3 className="font-heading font-extrabold">{tituloTarjeta}</h3>
              <p>{descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
