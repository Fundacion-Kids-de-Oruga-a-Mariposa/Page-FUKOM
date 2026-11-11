"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { equipo } from "@/content/equipo";

const { titulo, cerrar, miembros } = equipo.nuestroEquipo;

export default function NuestroEquipo() {
  const dialogo = useRef<HTMLDialogElement>(null);
  const [seleccionado, setSeleccionado] = useState<number | null>(null);
  const miembro = seleccionado === null ? null : miembros[seleccionado];

  const abrir = (indice: number) => {
    setSeleccionado(indice);
    dialogo.current?.showModal();
  };

  return (
    <section className="flex flex-col gap-8 px-10">
      <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
        {titulo}
      </h2>

      <div className="flex gap-6">
        {miembros.map(({ nombre, cargo, foto }, indice) => (
          <button
            key={nombre}
            type="button"
            onClick={() => abrir(indice)}
            className="group relative flex h-97.25 flex-1 cursor-pointer flex-col justify-end overflow-clip rounded-24 text-left shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.19),0px_0px_0px_1px_rgba(0,0,0,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <Image
              src={foto}
              alt=""
              fill
              sizes="253px"
              className="object-cover"
            />

            <span className="relative block w-full px-4 pb-4">
              <span className="block font-heading text-[28px]/8 text-neutral-1000">
                {nombre}
              </span>
              <span className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none">
                <span className="overflow-hidden text-xl/6 font-medium text-neutral-1000">
                  {cargo}
                </span>
              </span>
            </span>

            <span className="relative block h-6 w-full rounded-b-16 bg-secondary-200 transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary motion-reduce:transition-none" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogo}
        aria-labelledby="perfil-nombre"
        onClose={() => setSeleccionado(null)}
        onClick={(evento) => {
          if (evento.target === evento.currentTarget) {
            evento.currentTarget.close();
          }
        }}
        className="m-auto h-110 w-220 overflow-clip rounded-24 bg-white p-0 backdrop:bg-black/50"
      >
        {miembro && (
          <div className="flex h-full">
            <div className="relative h-full w-91.5 shrink-0">
              <Image
                src={miembro.foto}
                alt=""
                fill
                sizes="366px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-6 bg-secondary" />
            </div>

            <div className="flex w-128.5 flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <p className="rounded-full bg-yellow-100 px-3 py-2 text-base/5 font-medium text-neutral-1000">
                  {miembro.cargo}
                </p>
                <button
                  type="button"
                  aria-label={cerrar}
                  onClick={() => dialogo.current?.close()}
                  className="-m-2 cursor-pointer p-2"
                >
                  <Image
                    src="/icons/cerrar.svg"
                    alt=""
                    width={13}
                    height={13}
                  />
                </button>
              </div>
              <h3
                id="perfil-nombre"
                className="font-heading text-[32px]/10 text-neutral-1000"
              >
                {miembro.nombre}
              </h3>
              <p className="text-lg/7 font-medium text-[#666666]">
                {miembro.biografia}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
