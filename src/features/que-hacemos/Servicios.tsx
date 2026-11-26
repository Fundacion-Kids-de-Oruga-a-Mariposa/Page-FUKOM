import Image from "next/image";
import Button from "@/components/ui/Button";
import { queHacemos } from "@/content/que-hacemos";

const { titulo, descripcion, boton, href } = queHacemos.servicios;

export default function Servicios() {
  return (
    <section className="px-10">
      <div className="overflow-clip rounded-24 bg-white shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)]">
        <div className="h-4 rounded-t-16 bg-primary-300" />
        <div className="flex h-81.25 flex-col gap-8 px-6 pb-6 pt-10">
          <div className="flex flex-col gap-4 text-neutral-1000">
            <h2 className="font-heading text-5xl/14 font-extrabold">
              {titulo}
            </h2>
            <p className="max-w-170 text-[28px]/9 font-medium">{descripcion}</p>
          </div>
          <div className="p-2.5">
            <Button variant="secundario" href={href}>
              {boton}
              <Image src="/icons/chevron.svg" alt="" width={6} height={10} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
