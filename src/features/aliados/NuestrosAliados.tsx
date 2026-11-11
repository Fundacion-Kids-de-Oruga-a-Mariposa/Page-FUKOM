"use client";

import { useState } from "react";
import Image from "next/image";
import { aliados } from "@/content/aliados";

const { titulo, categorias } = aliados.nuestrosAliados;

const logos: Record<string, { caja: string; imagen: string }> = {
  "universidad-distrital": {
    caja: "w-[179.36px]",
    imagen: "left-0 top-[-5.88%] h-[116.11%] w-full",
  },
  unir: {
    caja: "w-[237px]",
    imagen: "left-[-5.99%] top-[-82.16%] h-[266.87%] w-[112.28%]",
  },
  compensar: {
    caja: "w-[204px]",
    imagen: "left-[0.26%] top-[-45.63%] h-[191.25%] w-full",
  },
};

export default function NuestrosAliados() {
  const [activa, setActiva] = useState<string>(categorias[0].id);
  const categoria = categorias.find(({ id }) => id === activa) ?? categorias[0];

  return (
    <section className="flex flex-col gap-8 px-10">
      <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
        {titulo}
      </h2>

      <div className="flex flex-col gap-6">
        <div role="tablist" className="flex items-start gap-5">
          {categorias.map(({ id, etiqueta }) => {
            const seleccionada = id === activa;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                id={`pestana-${id}`}
                aria-selected={seleccionada}
                aria-controls="panel-aliados"
                onClick={() => setActiva(id)}
                className={`flex cursor-pointer flex-col gap-1 rounded-12 px-5 py-2 text-xl/6 font-semibold ${
                  seleccionada ? "text-neutral-1000" : "text-neutral-900"
                }`}
              >
                {etiqueta}
                <span
                  aria-hidden="true"
                  className={`block w-full border-b-2 ${
                    seleccionada ? "border-secondary" : "border-neutral-900"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="panel-aliados"
          aria-labelledby={`pestana-${categoria.id}`}
          className="flex items-start gap-6"
        >
          {categoria.aliados.map(({ id, nombre, logo }) => (
            <div
              key={id}
              className="rounded-12 border border-secondary px-4 py-2"
            >
              <div
                className={`relative h-14 overflow-hidden ${logos[id].caja}`}
              >
                <Image
                  src={logo}
                  alt={nombre}
                  width={474}
                  height={148}
                  className={`absolute max-w-none ${logos[id].imagen}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
