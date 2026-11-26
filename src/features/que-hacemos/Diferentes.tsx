import Image from "next/image";
import { queHacemos } from "@/content/que-hacemos";

export default function Diferentes() {
  const { titulo, items } = queHacemos.diferentes;

  return (
    <section className="flex flex-col gap-6 bg-primary-10 p-10">
      <h2 className="font-heading text-[56px]/16 font-extrabold text-[#000000]">
        {titulo}
      </h2>
      <ul className="flex gap-5">
        {items.map((item) => (
          <li
            key={item.texto}
            className="flex flex-1 flex-col gap-5 rounded-[27.346px] bg-white p-[21.877px]"
          >
            <Image
              src={item.icono}
              alt=""
              width={item.ancho}
              height={56}
              className="h-14 object-contain object-left"
              style={{ width: item.ancho }}
            />
            <p className="font-heading text-2xl/7 text-neutral-1000">
              {item.texto}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
