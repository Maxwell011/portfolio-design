import Image from "next/image";

const About = () => {
  return (
    <>
      <section>
        <div className="px-4 py-3 border-y-4 border-y-white border-t-4 border-t-white border-solid">
          <h1 className="text-white text-[40px] font-bold leading-[160%]">
            ABOUT ME
          </h1>
        </div>
        <div className="w-[1240px] h-px bg-black"></div>

        <div className="flex justify-center items-center gap-10">
          <div className="flex pl-20">
            <div className="border w-[500px] h-[700px] rounded-3xl border-solid border-gold my-[30px]"></div>
            <Image
              src="/Rectangle 25.png"
              width={500}
              height={700}
              alt="Stanley image"
              className="rounded-3xl ml-[-516px] my-[30px]"
            />
          </div>

          <div className="">
            <p className="text-white text-lg font-normal leading-[160%] w-[670px]">
              I’m a dedicated and enthusiastic product designer with a strong
              passion for creating user-centered experiences. While designing to
              solve problems, I focus on the need to deliver effective
              conversion and align projects with business goals and objectives.
              Beyond my professional expertise, I have passion for nature and
              the solar system. This drives me to approach design challenges
              with a sense of wonder and a commitment to delivering exceptional
              experiences.
              <br />
              <br />
              I find inspiration in the beauty and complexity of the natural
              world. As a nature enthusiast, I often draw parallels between the
              elegance of nature&quot;s design and the principles I apply in my
              work. Just as the intricacies of a delicate flower captivate my
              attention, I strive to create designs that engage users, making
              their digital journeys seamless and enjoyable.
              <br />
              <br />
              My fascination with the solar system fuels my curiosity and
              imagination, influencing my design thinking. Exploring the
              vastness of the cosmos reminds me of the importance of clarity and
              simplicity in UX design. I believe in distilling complex ideas
              into elegant and accessible interfaces, allowing users to navigate
              through digital spaces with ease and confidence.
              <br />
              Whenever I am not designing, I take time to enjoy seasonal
              vacations, play football, hike adventures, movies, gym and camping
              activities with friends. The goal is to enjoy other&quot;s company
              and build stronger relationships outside of the work environment.
              <br />
              <br />
              <span>
                “Let&quot;s embark on a journey of designing delightful
                experiences that not only meet user needs but also inspire a
                sense of awe and wonder”.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
