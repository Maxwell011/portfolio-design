import Link from "next/link";
import Linkedin from "../svg/Linkedin";
import Twitter from "../svg/Twitter";
import Dribble from "../svg/Dribble";

const Nav = () => {
  return (
    <>
      <section className="px-[60px] py-3.5 border-b-[#403E3E] border-b border-solid flex items-center justify-around bg-black">
        <div>
          <div className="flex gap-[25px]">
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
          </div>
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[114px]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[108px]">
              <Link href="/#work">Work</Link>
            </li>
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[115px]">
              <Link href="#about">About</Link>
            </li>
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[129px]">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="h-[52px] w-[327px] px-6 py-2.5 rounded-lg border-2 border-solid border-[#CDAF75]">
          <h2 className=" text-xl font-normal leading-[normal] tracking-[0.4px] underline text-[#fff]">
            ofomastanley007@gmail.com
          </h2>
        </div>
      </section>
    </>
  );
};
export default Nav;
