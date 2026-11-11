import Image from "next/image";
import Link from "next/link";
import { columnasFooter } from "@/content/navegacion";
import { contacto, enlacesLegales, redes } from "@/content/contacto";
import TiraOndulada from "./TiraOndulada";

const subrayado =
  "underline decoration-from-font [text-underline-position:from-font]";

export default function Footer() {
  return (
    <div className="relative mt-auto">
      <TiraOndulada />
      <footer className="-mt-px bg-primary p-12">
        <div className="mx-auto flex max-w-[1344px] flex-col gap-7 rounded-24 bg-white px-12 pb-7 pt-10">
          <div className="flex">
            <div className="flex flex-1 flex-col gap-4">
              <Link href="/">
                <Image
                  src="/images/logo-fukom.png"
                  alt="FUKOM, ir al inicio"
                  width={200}
                  height={92}
                />
              </Link>

              <ul className="flex gap-2">
                {redes.map((red) => (
                  <li key={red.nombre}>
                    <Link
                      href={red.href}
                      aria-label={red.nombre}
                      className="flex size-12 items-center justify-center rounded-12 ring-1 ring-inset ring-neutral-1000"
                    >
                      <Image src={red.icono} alt="" width={18} height={18} />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-1 text-base/5 text-neutral-1000">
                <a href={`mailto:${contacto.correo}`}>
                  <span className={`font-bold ${subrayado}`}>Correo</span>{" "}
                  {contacto.correo}
                </a>
                <a href={`tel:${contacto.telefono.replace(/\D/g, "")}`}>
                  <span className={`font-bold ${subrayado}`}>Teléfono</span>{" "}
                  {contacto.telefono}
                </a>
              </div>
            </div>

            {columnasFooter.map((columna, indice) => (
              <div key={indice} className="flex flex-1 flex-col gap-6">
                {columna.map((seccion) => (
                  <div key={seccion.titulo} className="flex flex-col gap-2.5">
                    <p className="font-heading text-2xl/7 font-extrabold text-neutral-1000">
                      {seccion.titulo}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {seccion.enlaces.map((enlace) => (
                        <li key={enlace.texto}>
                          <Link
                            href={enlace.href}
                            className="block text-base/5 text-neutral-900 hover:font-medium hover:text-primary-600 hover:underline hover:decoration-from-font hover:[text-underline-position:from-font]"
                          >
                            {enlace.texto}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}

            <div className="flex flex-1 flex-col gap-2.5">
              <p className="font-heading text-2xl/7 font-extrabold text-neutral-1000">
                Encuéntranos
              </p>
              <div className="h-[135px] rounded-12 ring-1 ring-inset ring-neutral-100" />
              <p className="text-sm/4 text-neutral-600">{contacto.direccion}</p>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-12 bg-white px-5 py-3 text-base/5 font-medium text-neutral-1000 ring-1 ring-inset ring-neutral-1000 hover:bg-neutral-100"
              >
                <span className={`flex-1 ${subrayado}`}>
                  Transparencia, documentos e informes
                </span>
                <Image src="/icons/flecha.svg" alt="" width={11} height={10} />
              </Link>
            </div>
          </div>

          <div className="h-px bg-neutral-100" />

          <div className="flex flex-wrap items-center justify-between gap-y-4 text-sm/4 text-neutral-600">
            <p>
              © {new Date().getFullYear()} FUKOM – Fundación Kids de Oruga a
              Mariposa · NIT {contacto.nit}
            </p>
            <ul className="flex flex-wrap items-center gap-5">
              {enlacesLegales.map((enlace) => (
                <li key={enlace.texto}>
                  <Link href={enlace.href} className={subrayado}>
                    {enlace.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
