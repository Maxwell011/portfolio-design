import Image from "next/image";
import Chain from "../svg/chain";

export default function AutoFixHub() {
  return (
    <section>
      <h1 className="text-[64px] font-bold uppercase">REVAMPING Autofixhub</h1>
      <div className="flex w-[1210px] h-[845px] justify-center items-center rounded-[40px] bg-[#233038]">
        {" "}
        <Image
          src="/Cover page Expert.png"
          width={1240}
          height={779}
          alt="work image"
          className=""
        />
      </div>
      <div className="flex gap-[50rem]">
        <Chain />
        <Chain />
      </div>
    </section>
  );
}
