import Linkedin from "../svg/Linkedin";
import Twitter from "../svg/Twitter";
import Dribble from "../svg/Dribble";

export default function Footer() {
    return (
        <>
        <section>
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
          </div>        </section>
        </>
    )
}