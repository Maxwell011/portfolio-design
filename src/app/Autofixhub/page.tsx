import Image from "next/image";
import Chain from "../svg/chain";

export default function AutoFixHub() {
  return (
    <section>
      <section className="bg-black flex flex-col items-center justify-center text-center px-[100px] py-0">
        <h1 className="text-[64px] font-bold uppercase">
          REVAMPING Autofixhub
        </h1>{" "}
        <Image
          src="/Cover page Expert.png"
          width={1240}
          height={779}
          alt="work image"
          className=""
        />
        <div className="flex gap-[50rem]">
          <Chain />
          <Chain />
        </div>
        <div className="mb-10 border flex w-[1240px] flex-col items-start rounded-3xl border-solid border-gold">
          <div className="border-b-[#CDAF75] border-b border-solid flex flex-col items-start gap-3 px-12 py-6">
            <div className="flex flex-col items-start gap-3 self-stretch px-12 py-6 border-b-[#CDAF75] border-b border-solid">
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Task
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                Design a landing page that aligns with a brand look and feel.
                Consistent branding fosters trust and recognition among users.
              </p>
            </div>
            <div>
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Result
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                Designed a cohesive and consistent experience that reflects the
                brand identity, values, and messaging. A visually appealing and
                effective landing page that resonates with the target audience
                and reinforces the brand presence.
              </p>
            </div>
          </div>
          <div className="flex gap-[40rem] p-[15px]">
            <div className="flex flex-col">
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Duration
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                1 Day
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Role
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Project overview</h2>
          <p>
            AutoFixHub is an platform that aims to transform the car repair
            experience, for car owners. Our main objective is to create a
            website that's easy to use and offers convenience, transparency and
            expert solutions for all your car related requirements. Our design
            focuses on resolving issues such, as locating mechanics ensuring
            pricing transparency, managing scheduling conflicts and much more.
          </p>
          <div>
            <Image
              src="/Frame 34050.png"
              width={675}
              height={441}
              alt="work image"
              className=""
            />
          </div>
        </div>
      </section>
    </section>
  );
}
