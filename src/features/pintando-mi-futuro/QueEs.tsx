import Image from "next/image";
import Link from "next/link";
import { pintandoMiFuturo } from "@/content/pintando-mi-futuro";

const { etiqueta, titulo, descripcion, enlaceTexto, enlace } =
  pintandoMiFuturo.queEs;

export default function QueEs() {
  return (
    <section className="grid grid-cols-2 px-10">
      <div className="flex flex-col gap-4 py-8">
        <p className="flex w-fit items-center gap-2.5 rounded-full bg-yellow-100 px-3 py-2 text-base/5 font-medium text-neutral-1000">
          <Image
            src="/icons/insignia-programa.svg"
            alt=""
            width={20}
            height={24}
          />
          {etiqueta}
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
            {titulo}
          </h2>
          <div className="flex flex-col gap-6 text-xl/6 text-neutral-1000">
            <p>{descripcion}</p>
            <p>
              {enlaceTexto}{" "}
              <Link
                href={enlace.href}
                className="font-medium text-primary-400 underline"
              >
                {enlace.texto}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/images/programas/pintando-mi-futuro/suelo.svg"
          alt=""
          width={467}
          height={92}
          className="absolute left-[12.9%] top-82 h-23 w-[67.7%]"
        />
        <Image
          src="/images/programas/pintando-mi-futuro/personaje.png"
          alt=""
          fill
          sizes="50vw"
          className="object-contain p-2.5"
        />
      </div>
    </section>
  );
}
