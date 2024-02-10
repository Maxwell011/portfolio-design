import Image from "next/image";
import Chain from "../svg/chain";

export default function MeetExpert() {
  return (
    <section>
      {" "}
      <h1 className="text-[64px] font-bold uppercase">REVAMPING Autofixhub</h1>
      <Image
        src="/Cover page Expert.png"
        width={1140}
        height={815}
        alt="work image"
        className=""
      />
      <div className="flex gap-[50rem]">
        <Chain />
        <Chain />
      </div>
      <div className="border flex w-[1240px] flex-col items-start rounded-3xl border-solid border-gold">
        <div className="border-b-[#CDAF75] border-b border-solid flex flex-col items-start gap-3 px-12 py-6">
          <div className="flex flex-col items-start gap-3 self-stretch px-12 py-6 border-b-[#CDAF75] border-b border-solid">
            <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
              Task
            </h2>
            <p className="text-white text-lg font-normal tracking-[0.36px]">
              Design an auto repair website where car owners can get
              professional solutions for their car problems. This website should
              address user pain points through research and also serve a
              specific target audience.
            </p>
          </div>
          <div>
            <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
              Product
            </h2>
            <p className="text-white text-lg font-normal tracking-[0.36px]">
              AutoFixHub is a network of mechanics committed to revolutionizing
              the car repair experience, for car owners. Our goal is to offer a
              expert solution for all your vehicle maintenance and repair
              requirements. Through AutoFixHub you can effortlessly connect with
              certified mechanics receive pricing estimates and easily arrange
              appointments that suit your schedule. Every mechanic undergoes a
              screening process that includes background checks, criminal record
              checks and reference checks. Our focus is on empowering car owners
              with solutions to ensure that you have a partner, for all your
              automotive needs.
            </p>
          </div>
          <div>
            <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
              Result
            </h2>
            <ul>
              <li>User-Centric Design</li>
              <li>Competitive Edge</li>
              <li>24/7 Availability</li>
              <li>Educational Resources</li>
              <li>Improved Online Presence</li>
              <li>Online Booking & Scheduling</li>
            </ul>
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
      <h2>Overview</h2>
      {/* image */}
      <h2>Full landing page design</h2>
      {/* image */}
      <h3>Check out</h3>
      <h3>other projects</h3>{" "}
    </section>
  );
}
