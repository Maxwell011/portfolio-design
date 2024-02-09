import Image from "next/image";
import Chain from "../svg/chain";

export default function PublishingHouse() {
  return (
    <section>
      <section className="bg-black flex flex-col items-center justify-center text-center px-[100px] py-0">
        {" "}
        <h1>SAFAR-BOOKIES</h1>
        <p>
          🌍 Safars Beyond Borders SafarBookies transcends boundaries, bringing
          you stories from around the globe. Immerse yourself in cultures,
          experiences, and perspectives through our diverse selection of
          international literature.
        </p>
        {/* image */}
        <Image
          src="/Publishing Cover Presentation.png"
          width={1240}
          height={872}
          alt="work image"
          className=""
        />
        <div className="flex gap-[50rem]">
          <Chain />
          <Chain />
        </div>
        <div>
          <div>
            <h2>Task</h2>
            <p>
              Design a landing page that will aid and contribute to the overall
              success of marketing campaigns and user interactions of a
              publishing house.
            </p>
          </div>
          <div>
            <h2>Result</h2>
            <p>
              Designed a cohesive and consistent experience that reflects the
              brand identity, values, and messaging. A visually appealing and
              effective landing page that resonates with the target audience and
              reinforces the brand presence.
            </p>
          </div>
          <div>
            <h2>Duration</h2>
            <p>6 Hours</p>
            <h2>Role</h2>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <h2></h2>
        <Image
          src="/Books Categories.png"
          width={1240}
          height={2157}
          alt="Book categories image"
          className=""
        />
        <h2>Full landing page design</h2>
        <Image
          src="/Full publishing landing page.png"
          width={1240}
          height={2157}
          alt="Full landing page image"
          className=""
        />
        <h3 className="text-lg font-medium text-white">Check out</h3>
        <h3 className="text-[40px] font-bold uppercase">other projects</h3>
      </section>
    </section>
  );
}
