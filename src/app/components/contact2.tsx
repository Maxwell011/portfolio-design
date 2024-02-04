import Linkedin from "../svg/Linkedin";
import Twitter from "../svg/Twitter";
import Dribble from "../svg/Dribble";
import Link from "next/link";

export default function contact2() {
  return (
    <div>
      <p className="text-lg font-normal text-white">
        Thank you for your time! 🙌 Your interest means a lot to me, and I am
        excited about the possibilities ahead. Looking forward to the next steps{" "}
      </p>
      <h1 className="text-[32px] font-medium leading-[51px]">
        Let stay connected for future opportunities! 🌟{" "}
      </h1>
      <div className="h-[52px] w-[327px] px-6 py-2.5 rounded-lg border-2 border-solid border-[#CDAF75]">
        <Link
          href=""
          className=" text-xl font-normal leading-[normal] tracking-[0.4px] underline text-[#fff]"
        >
          ofomastanley007@gmail.com
        </Link>
      </div>
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
  );
}
