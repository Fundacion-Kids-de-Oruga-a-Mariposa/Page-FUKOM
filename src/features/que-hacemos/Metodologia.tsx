"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { queHacemos } from "@/content/que-hacemos";

const {
  etiqueta,
  titulo,
  descripcion,
  enlaceTexto,
  enlace,
  anterior,
  siguiente,
  pasos,
} = queHacemos.metodologia;

export default function Metodologia() {
  const [activo, setActivo] = useState(0);
  const paso = pasos[activo];
  const esPrimero = activo === 0;
  const esUltimo = activo === pasos.length - 1;

  return (
    <section className="flex flex-col gap-6 px-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-2xl/8 font-medium text-neutral-800">{etiqueta}</p>
          <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
            {titulo}
          </h2>
        </div>
        <div className="text-[28px]/9 font-medium text-neutral-900">
          <p>{descripcion}</p>
          <p>
            {enlaceTexto}{" "}
            <Link href={enlace.href} className="text-primary-400 underline">
              {enlace.texto}
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 p-2.5">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-[calc(100%/14)] top-22 h-0.5 -translate-y-px bg-neutral-800"
          />
          <div role="tablist" className="relative flex">
            {pasos.map((item, i) => {
              const seleccionado = i === activo;
              return (
                <button
                  key={item.nombre}
                  type="button"
                  role="tab"
                  id={`paso-${i}`}
                  aria-selected={seleccionado}
                  aria-controls="paso-detalle"
                  onClick={() => setActivo(i)}
                  className="flex flex-1 cursor-pointer flex-col items-center gap-2.5"
                >
                  <span className="flex h-14 w-23.5 items-center justify-center">
                    {seleccionado && (
                      <Image
                        src={item.figura.src}
                        alt=""
                        width={item.figura.ancho}
                        height={56}
                        className="h-14 object-contain"
                        style={{ width: item.figura.ancho }}
                      />
                    )}
                  </span>
                  <span
                    className={`flex size-11 items-center justify-center rounded-full text-[28px]/9 font-semibold ${
                      seleccionado
                        ? "bg-green text-white"
                        : "bg-neutral-300 text-neutral-1000"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="max-w-44 text-balance text-center text-base/5 font-semibold text-neutral-1000">
                    {item.nombre}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id="paso-detalle"
          aria-labelledby={`paso-${activo}`}
          className="flex h-56.25 items-center rounded-24 border-2 border-green bg-white p-4"
        >
          <div className="flex flex-1 items-end gap-10 px-7 py-6.5">
            <p className="font-heading text-[144px]/36 font-extrabold text-green">
              {activo + 1}
            </p>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-base/5 font-semibold text-neutral-900">
                {paso.etapa}
              </p>
              <h3 className="text-[28px]/9 font-semibold uppercase text-neutral-1000">
                {paso.titulo}
              </h3>
              <p className="text-xl/6 text-[#000000]">{paso.texto}</p>
            </div>
            <div className="flex gap-4">
              {!esPrimero && (
                <Button
                  variant="secundario"
                  onClick={() => setActivo(activo - 1)}
                >
                  <Image
                    src="/icons/chevron.svg"
                    alt={anterior}
                    width={10}
                    height={16}
                    className="-mx-[3px] -my-1 rotate-180"
                  />
                </Button>
              )}
              {!esUltimo && (
                <Button
                  variant="secundario"
                  onClick={() => setActivo(activo + 1)}
                >
                  <Image
                    src="/icons/chevron.svg"
                    alt={siguiente}
                    width={10}
                    height={16}
                    className="-mx-[3px] -my-1"
                  />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
