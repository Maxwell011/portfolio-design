import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-black">
      <Image
        src="/Profile Image.png"
        width={154.839}
        height={154.839}
        alt="Stanley Image"
      />
      <h1 className="text-[64px] font-bold text-center">
        <span className="bg-gradient-to-r from-grapevine to-vine bg-clip-text text-transparent">
          Hello, I’m Stanley,
        </span>
        <br />A Product Designer.
      </h1>
      <p className="w-[935px] h-[87px] text-center text-lg font-normal leading-[160%] text-[#fff] font-plex">
        {" "}
        I am a dedicated and enthusiastic product designer with a strong passion
        for creating user-centered experiences. While designing to solve
        problems, I focus on the need to deliver effective conversion and align
        projects with business goals and objectives.
      </p>
      <div className="w-[174px] h-[52px] px-[23.5px] py-[14.5px] rounded-lg bg-gold ">
        <button className="text-black font-semibold tracking-[0.36px] underline uppercase">
          Get In Touch
        </button>
      </div>
    </main>
  );
}
