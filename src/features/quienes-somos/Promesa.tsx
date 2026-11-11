import Image from "next/image";
import { quienesSomos } from "@/content/quienes-somos";

const { etiqueta, texto } = quienesSomos.promesa;

export default function Promesa() {
  return (
    <section>
      <Image
        src="/images/quienes-somos/onda-promesa.svg"
        alt=""
        width={1440}
        height={60}
        className="block h-auto w-full -scale-y-100"
      />

      <div className="-mt-px bg-secondary px-10 pb-10 pt-5 text-white">
        <div className="flex flex-col gap-2.5 p-2.5">
          <div className="flex items-center justify-between">
            <p aria-hidden="true" className="text-[128px]/[1.2] font-bold">
              ”
            </p>
            <p className="font-heading text-[28px]/8 font-normal">{etiqueta}</p>
          </div>
          <p className="text-[40px]/[50px] font-bold">{texto}</p>
        </div>
      </div>

      <Image
        src="/images/quienes-somos/onda-promesa.svg"
        alt=""
        width={1440}
        height={60}
        className="-mt-px block h-auto w-full"
      />
    </section>
  );
}
