import Image from "next/image";
import Chain from "../svg/chain";

export default function MarketPlace() {
  return (
    <section className="bg-black flex flex-col items-center justify-center text-center px-[100px] py-0">
      <h1 className="text-[64px] font-bold uppercase">Munmba</h1>
      <p className="text-white text-lg font-normal tracking-[0.36px]">
        💎 Own a Piece of the Future: Imagine owning a digital masterpiece that
        as unique as your fingerprint. With NFTs, you can acquire digital assets
        that are yours, and backed by blockchain technology. Discover the Future
        of Digital Ownership with Munmba! 🎉 Step into a world where creativity
        meets technology, and art takes on a new form of expression. Welcome to
        Munmba, your gateway to the exciting universe of Non-Fungible Tokens
        (NFTs) – where every creation tells a unique story.
      </p>
      <div className="flex w-[1210px] h-[845px] justify-center items-center rounded-[40px] bg-[#233038]">
        <Image
          src="/Rectangle 23.png"
          width={1140}
          height={815}
          alt="work image"
          className=""
        />
      </div>
      <div className="flex gap-[50rem]">
        <Chain />
        <Chain />
      </div>
      <div className="border flex w-[1240px] flex-col items-start rounded-3xl border-solid border-gold">
        <div className="border-b-[#CDAF75] border-b border-solid flex flex-col items-start gap-3 px-12 py-6   ">
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
              effective landing page that resonates with the target audience and
              reinforces the brand presence.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
            Duration
          </h2>
          <p className="text-white text-lg font-normal tracking-[0.36px]">
            1 Day
          </p>
          <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
            Role
          </h2>
          <p className="text-white text-lg font-normal tracking-[0.36px]">
            UI/UX Designer
          </p>
        </div>
      </div>
      <h2></h2>
      {/* image */}
      <Image
        src="/Cover Presentation.png"
        width={1140}
        height={815}
        alt="work image"
        className=""
      />
      <h2>Full landing page design</h2>
      {/* image */}
      <h3>Check out</h3>
      <h3>other projects</h3>{" "}
    </section>
  );
}
