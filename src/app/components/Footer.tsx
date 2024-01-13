import Linkedin from "../svg/Linkedin";
import Twitter from "../svg/Twitter";
import Dribble from "../svg/Dribble";

export default function Footer() {
  return (
    <>
      <section className="h-[204px] bg-black">
        <div className="flex gap-[25px]">
          <h2 className="text-white text-2xl font-medium leading-[160%]">
            Socials:
          </h2>
          <div className="w-[34.286px] h-[34.286px] opacity-[0.58] bg-base rounded-2xl flex items-center justify-center ">
            <div className="w-12 h-12 opacity-[0.29] bg-base rounded-3xl flex items-center justify-center p-5">
              <Dribble />
            </div>
          </div>
          <div className="w-[34.286px] h-[34.286px] opacity-[0.58] bg-base rounded-2xl flex items-center justify-center ">
            <div className="w-12 h-12 opacity-[0.29] bg-base rounded-3xl flex items-center justify-center p-5">
              <Linkedin />
            </div>
          </div>
          <div className="w-[34.286px] h-[34.286px] opacity-[0.58] bg-base rounded-2xl flex items-center justify-center ">
            <div className="w-12 h-12 opacity-[0.29] bg-base rounded-3xl flex items-center justify-center p-5">
              <Twitter />
            </div>
          </div>
          <div>
            <p className="text-white text-lg font-normal">
              ©2023 Stanley-Asokingz. All Rights Reserved
            </p>
          </div>
        </div>{" "}
      </section>
    </>
  );
}
