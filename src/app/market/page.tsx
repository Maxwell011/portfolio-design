import Image from "next/image";
import Chain from "../svg/chain";
import Contact2 from "../components/contact2";

export default function MarketPlace() {
  return (
    <section>
      <section className="bg-black flex flex-col items-center justify-center text-center px-[100px] py-0">
        <h1 className="text-[64px] font-bold uppercase">Munmba</h1>
        <p className=" mb-6 text-white text-lg font-normal tracking-[0.36px]">
          💎 Own a Piece of the Future: Imagine owning a digital masterpiece
          that as unique as your fingerprint. With NFTs, you can acquire digital
          assets that are yours, and backed by blockchain technology. Discover
          the Future of Digital Ownership with Munmba! 🎉 Step into a world
          where creativity meets technology, and art takes on a new form of
          expression. Welcome to Munmba, your gateway to the exciting universe
          of Non-Fungible Tokens (NFTs) – where every creation tells a unique
          story.
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
        <h2></h2>
        <Image
          src="/Cover Presentation.png"
          width={1140}
          height={815}
          alt="Project cover image"
          className=""
        />
        <Image
          src="/Full-landing-page.png"
          width={1240}
          height={4692}
          alt="Full landing page image"
          className=""
        />
        <h3 className="text-lg font-medium text-white">Check out</h3>
        <h3 className="text-[40px] font-bold uppercase">other projects</h3>{" "}
      </section>
      <Contact2 />
    </section>
  );
}
