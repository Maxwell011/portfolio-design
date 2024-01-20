import Image from "next/image";
import { WORK_DATA } from "../../../constants/index";
import GreenEllipse from "../svg/GreenEllipse";
import YellowEllipse from "../svg/YellowEllipse";
import CrimsonEllipse from "../svg/CrimsonEllipse";

const Works = () => {
  return (
    <section className="" id="work">
      <div className="flex flex-col items-center gap-5">
        <div className="px-4 py-3 border-y-4 border-y-white border-t-4 border-t-white border-solid">
          <h1 className="uppercase text-[#fff] text-[40px] not-italic font-bold leading-[160%] ">
            work
          </h1>
        </div>
        <p className="text-white text-center text-lg font-medium leading-[160%] w-[954px]">
          Explore curated collections of projects that highlight my dedication
          to creating user-centered experience. Each project is a testament to
          my commitment to excellence and my ability to unique Approaches
        </p>
        <div className="w-[1240px] h-px bg-[#081f20] my-10"></div>
      </div>
      <div className="flex flex-col gap-10">
        {WORK_DATA.map((works) => (
          <WorkData
            key={works.title}
            heading={works.heading}
            title={works.title}
            image={works.image}
            description={works.description}
            tech={works.tech}
            link={works.link}
          />
        ))}
      </div>
    </section>
  );
};

type WorkData = {
  heading: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
};

const WorkData = ({
  heading,
  title,
  image,
  description,
  tech,
  link,
}: WorkData) => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="flex items-center gap-10">
          <div className="backdrop-blur-[50px] w-[564px] h-[400px] rounded-3xl bg-[#32294c] flex items-center justify-center">
            <Image
              src={image}
              width={524}
              height={360}
              alt="work image"
              className=""
            />
          </div>

          <div>
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex gap-[5px]">
                  <GreenEllipse />
                  <YellowEllipse />
                  <CrimsonEllipse />
                </div>
                <h2 className="text-white text-lg font-light">{heading}</h2>
              </div>

              <h1 className=" text-white text-[40px] font-semibold leading-[160%] tracking-[0.8px] mb-3">
                {title}
              </h1>
              <p className=" text-white  text-lg font-normal leading-[160%] tracking-[0.36px] w-[670px] h-[58px] mb-6">
                {description}
              </p>
              <div className="mb-12">
                {tech.map((e, index) => {
                  return (
                    <span
                      key={index}
                      className="text-base font-normal leading-[160%] tracking-[0.32px] text-white border px-4 py-1 rounded-lg border-solid border-[#DBA6F4] bg-[#1d444642] mr-4"
                    >
                      {e}
                    </span>
                  );
                })}
              </div>
              <div className="w-[181px] h-[52px] px-[23.5px] py-[14.5px] rounded-lg bg-gold">
                <h3 className="flex items-center justify-center text-black text-lg font-medium tracking-[0.36px] uppercase">View Project{link}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
