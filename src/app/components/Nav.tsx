import Linkedin from "../svg/Linkedin";
import Twitter from "../svg/Twitter";
import Dribble from "../svg/Dribble";

const Nav = () => {
  return (
    <>
      <section>
        {/* Social medial icon links */}
        <div>
          <div>
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
          <ul>
            {/* flex justify-center items-center gap-2.5 px-8 py-[5px] rounded-lg */}
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[108px]">
              Home
            </li>
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[108px]">
              Work
            </li>
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[108px]">
              About
            </li>
            <li className="text-lg gap-2.5 px-8 py-[5px] rounded-lg bg-[#051819] text-[#FFFFFF] h-[39px] w-[108px]">
              Contact
            </li>
          </ul>
        </div>

        <div className="h-[52px] w-[327px] px-6 py-2.5 rounded-lg border-2 border-solid border-[#CDAF75]">
          <h2 className=" text-xl font-normal leading-[normal] tracking-[0.4px] underline">
            ofomastanley007@gmail.com
          </h2>
        </div>
      </section>
    </>
  );
};
export default Nav;
