"use client";

import { useState, type ReactNode, type SubmitEvent } from "react";
import Image from "next/image";
import { aliados } from "@/content/aliados";

const { formulario } = aliados.solicitud;
const { errores: mensajes, consentimiento } = formulario;

type Errores = Partial<Record<string, string>>;

const estiloCampo =
  "w-full rounded-12 border-[1.5px] bg-white px-4 py-4 text-base/5 text-neutral-900 outline-none focus-visible:border-neutral-1000";

const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoValido = /^\+?[\d\s-]{7,15}$/;

function Campo({
  nombre,
  etiqueta,
  error,
  children,
}: {
  nombre: string;
  etiqueta: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label
        htmlFor={`alianza-${nombre}`}
        className="text-base/5 font-semibold text-neutral-1000"
      >
        {etiqueta}
      </label>
      {children}
      {error && (
        <p id={`alianza-${nombre}-error`} className="text-sm/4 text-red">
          {error}
        </p>
      )}
    </div>
  );
}

export default function FormularioAlianza() {
  const [errores, setErrores] = useState<Errores>({});

  const propiedades = (nombre: string) => ({
    id: `alianza-${nombre}`,
    name: nombre,
    "aria-invalid": errores[nombre] ? true : undefined,
    "aria-describedby": errores[nombre] ? `alianza-${nombre}-error` : undefined,
    className: `${estiloCampo} ${
      errores[nombre] ? "border-red" : "border-neutral-200"
    }`,
  });

  const validar = (evento: SubmitEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const datos = new FormData(evento.currentTarget);
    const valor = (nombre: string) => String(datos.get(nombre) ?? "").trim();
    const nuevos: Errores = {};

    if (!valor("nombre")) nuevos.nombre = mensajes.requerido;
    if (!valor("correo")) nuevos.correo = mensajes.requerido;
    else if (!correoValido.test(valor("correo")))
      nuevos.correo = mensajes.correo;
    if (!valor("telefono")) nuevos.telefono = mensajes.requerido;
    else if (!telefonoValido.test(valor("telefono")))
      nuevos.telefono = mensajes.telefono;
    if (!valor("tipoAlianza")) nuevos.tipoAlianza = mensajes.requerido;
    if (!datos.get("consentimiento"))
      nuevos.consentimiento = mensajes.consentimiento;

    setErrores(nuevos);
    // El envío real se conecta más adelante con la capa de servicios.
  };

  return (
    <form
      noValidate
      onSubmit={validar}
      onChange={(evento) => {
        const campo = evento.target;
        if (
          campo instanceof HTMLInputElement ||
          campo instanceof HTMLSelectElement ||
          campo instanceof HTMLTextAreaElement
        ) {
          setErrores((actuales) => ({ ...actuales, [campo.name]: undefined }));
        }
      }}
      className="flex flex-1 flex-col gap-6 rounded-24 bg-white p-6 shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
    >
      <div className="flex flex-col gap-6">
        <Campo
          nombre="nombre"
          etiqueta={formulario.nombre}
          error={errores.nombre}
        >
          <input type="text" autoComplete="name" {...propiedades("nombre")} />
        </Campo>

        <div className="flex gap-6">
          <Campo nombre="cargo" etiqueta={formulario.cargo}>
            <input
              type="text"
              autoComplete="organization-title"
              {...propiedades("cargo")}
            />
          </Campo>
          <Campo nombre="organizacion" etiqueta={formulario.organizacion}>
            <input
              type="text"
              autoComplete="organization"
              {...propiedades("organizacion")}
            />
          </Campo>
        </div>

        <Campo
          nombre="correo"
          etiqueta={formulario.correo}
          error={errores.correo}
        >
          <input type="email" autoComplete="email" {...propiedades("correo")} />
        </Campo>

        <div className="flex items-start gap-6">
          <Campo
            nombre="telefono"
            etiqueta={formulario.telefono}
            error={errores.telefono}
          >
            <input
              type="tel"
              autoComplete="tel"
              placeholder={formulario.telefonoEjemplo}
              {...propiedades("telefono")}
            />
          </Campo>
          <Campo
            nombre="tipoAlianza"
            etiqueta={formulario.tipoAlianza}
            error={errores.tipoAlianza}
          >
            <div className="relative">
              <select
                defaultValue=""
                {...propiedades("tipoAlianza")}
                className={`${propiedades("tipoAlianza").className} appearance-none pr-10`}
              >
                <option value="" />
                {formulario.tiposAlianza.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
              <Image
                src="/icons/desplegable.svg"
                alt=""
                width={6}
                height={12}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90"
              />
            </div>
          </Campo>
        </div>

        <Campo nombre="mensaje" etiqueta={formulario.mensaje}>
          <textarea rows={1} {...propiedades("mensaje")} />
        </Campo>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <input
              id="alianza-consentimiento"
              name="consentimiento"
              type="checkbox"
              aria-invalid={errores.consentimiento ? true : undefined}
              aria-describedby={
                errores.consentimiento
                  ? "alianza-consentimiento-error"
                  : undefined
              }
              className={`size-5 shrink-0 cursor-pointer appearance-none rounded-4 border bg-white bg-center bg-no-repeat checked:bg-[url('/icons/check.svg')] ${
                errores.consentimiento ? "border-red" : "border-neutral-100"
              }`}
            />
            <label
              htmlFor="alianza-consentimiento"
              className="text-sm/4 text-neutral-1000"
            >
              {consentimiento.antes}
              <a href={consentimiento.href} className="underline">
                {consentimiento.enlace}
              </a>
            </label>
          </div>
          {errores.consentimiento && (
            <p id="alianza-consentimiento-error" className="text-sm/4 text-red">
              {errores.consentimiento}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-fit cursor-pointer rounded-12 bg-secondary px-6 py-4 text-xl/6 font-semibold text-white hover:bg-secondary-400"
        >
          {formulario.enviar}
        </button>
      </div>
    </form>
  );
}
