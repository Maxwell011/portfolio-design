import { WORK_DATA } from "../../../constants/index";

const Works = () => {
  return (
    <section>
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
      </div>
      <div className="">
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
  tech: object;
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
  return <div></div>;
};

export default Works;
