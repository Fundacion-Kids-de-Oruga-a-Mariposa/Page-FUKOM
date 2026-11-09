import Image from "next/image";
import { aliados } from "@/content/aliados";
import FormularioAlianza from "@/features/aliados/FormularioAlianza";

const { titulo, descripcion } = aliados.solicitud;

export default function Solicitud() {
  return (
    <section className="flex items-end gap-15 p-10">
      <div className="flex flex-1 flex-col gap-8">
        <div className="relative h-[398.913px] w-[414.869px] overflow-clip">
          <Image
            src="/images/aliados/invitacion/suelo.svg"
            alt=""
            width={345}
            height={204}
            className="absolute left-0 top-[175.52px] h-[204.243px] w-[344.661px]"
          />
          <div className="absolute left-[76.59px] top-[79.78px] flex h-[293.6px] w-[229.774px] items-center overflow-clip px-[36.7px]">
            <Image
              src="/images/aliados/invitacion/santi.svg"
              alt=""
              width={188}
              height={261}
              className="h-[261.016px] w-[188.287px] max-w-none shrink-0"
            />
          </div>
          <Image
            src="/images/aliados/invitacion/corazon.svg"
            alt=""
            width={53}
            height={61}
            className="absolute left-[12.77px] top-[103.72px] h-[60.635px] w-[52.656px]"
          />
          <div className="absolute left-[301px] top-[15px] flex h-[108.822px] w-[112.05px] items-center justify-center">
            <Image
              src="/images/aliados/invitacion/mariposa.svg"
              alt=""
              width={91}
              height={86}
              className="h-[85.589px] w-[90.527px] max-w-none -rotate-[17.47deg]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
            {titulo}
          </h2>
          <p className="text-2xl/8 font-medium text-[#858585]">{descripcion}</p>
        </div>
      </div>

      <FormularioAlianza />
    </section>
  );
}
