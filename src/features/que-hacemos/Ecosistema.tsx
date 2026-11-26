import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { queHacemos } from "@/content/que-hacemos";

const { titulo, descripcion, invitacion } = queHacemos.ecosistema;
const { enlace, items } = home.programas;

export default function Ecosistema() {
  return (
    <section>
      <Image
        src="/images/onda-programas.svg"
        alt=""
        width={1440}
        height={60}
        className="block h-auto w-full rotate-180"
      />

      <div className="flex flex-col gap-10 bg-yellow-alpha-10 px-10 pb-20 pt-10">
        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
            {titulo}
          </h2>
          <p className="text-xl/6 text-neutral-1000">{descripcion}</p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {items.map(
            ({ titulo: tituloPrograma, descripcion, destacado, href }) => (
              <article
                key={tituloPrograma}
                className="flex gap-8 rounded-24 bg-white p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.2)]"
              >
                <div className="w-60.5 shrink-0 overflow-clip rounded-20 bg-white p-1 shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]">
                  <div className="relative h-full overflow-clip rounded-16">
                    <Image
                      src="/images/programas/placeholder.png"
                      alt=""
                      fill
                      sizes="234px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 text-neutral-1000">
                  <div className="flex items-center gap-3">
                    <h3 className="flex-1 text-[28px]/9 font-semibold">
                      {tituloPrograma}
                    </h3>
                    {destacado && (
                      <Image
                        src="/icons/insignia.svg"
                        alt=""
                        width={27}
                        height={32}
                      />
                    )}
                  </div>
                  <p className="text-xl/6 font-medium">{descripcion}</p>
                  <Link
                    href={href}
                    className="flex w-fit items-center gap-3 rounded-12 px-3 py-1 text-base/5 font-medium underline"
                  >
                    {enlace}
                    <Image
                      src="/icons/chevron.svg"
                      alt=""
                      width={6}
                      height={10}
                      className="-mx-px"
                    />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </div>

      <div className="relative flex items-end bg-yellow-100 px-[140px] py-5">
        <p className="flex-1 text-[40px]/[50px] font-bold text-white">
          {invitacion}
        </p>
        <Image
          src="/images/leo-invita.svg"
          alt=""
          width={95}
          height={132}
          className="absolute left-[39.5px] top-[-41.5px]"
        />
      </div>
    </section>
  );
}
