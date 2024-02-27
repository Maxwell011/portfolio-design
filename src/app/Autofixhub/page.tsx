import Image from "next/image";
import Chain from "../svg/chain";
import Contact2 from "../components/contact2";

export default function AutoFixHub() {
  return (
    <section>
      <section className="bg-black flex flex-col items-center justify-center text-center px-[100px] py-0">
        <h1 className="text-[64px] font-bold uppercase">
          REVAMPING Autofixhub
        </h1>{" "}
        <Image
          src="/Cover page Expert.png"
          width={1240}
          height={779}
          alt="work image"
          className=""
        />
        <div className="flex gap-[50rem]">
          <Chain />
          <Chain />
        </div>
        <div className="mb-10 border flex w-[1240px] flex-col items-start rounded-3xl border-solid border-gold">
          <div className="border-b-[#CDAF75] border-b border-solid flex flex-col items-start gap-3 px-12 py-6">
            <div className="flex flex-col items-start gap-3 self-stretch px-12 py-6 border-b-[#CDAF75] border-b border-solid">
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Task
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                Design a landing page that aligns with a brand look and feel.
                Consistent branding fosters trust and recognition among users.
              </p>
            </div>
            <div>
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Result
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                Designed a cohesive and consistent experience that reflects the
                brand identity, values, and messaging. A visually appealing and
                effective landing page that resonates with the target audience
                and reinforces the brand presence.
              </p>
            </div>
          </div>
          <div className="flex gap-[40rem] p-[15px]">
            <div className="flex flex-col">
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Duration
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                1 Day
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Role
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Project overview</h2>
          <p>
            AutoFixHub is an platform that aims to transform the car repair
            experience, for car owners. Our main objective is to create a
            website that easy to use and offers convenience, transparency and
            expert solutions for all your car related requirements. Our design
            focuses on resolving issues such, as locating mechanics ensuring
            pricing transparency, managing scheduling conflicts and much more.
          </p>
          <div>
            <Image
              src="/Frame 34050.png"
              width={675}
              height={441}
              alt="work image"
              className=""
            />
          </div>
        </div>
        <div>
          <h2>Problem Identification</h2>
          <ul>
            <li>
              1. Finding Reliable Mechanics: Car owners struggle to find
              trustworthy mechanics for their vehicles, leading to uncertainty
              and frustration.
            </li>
            <li>
              2. Transparency in Pricing: Many car owners feel uncertain about
              repair costs and worry about hidden charges.
            </li>
            <li>
              3. Scheduling Conflicts: Car owners find it difficult to align
              repair appointments with their busy schedules.
            </li>
            <li>
              4. Uncertainty About Repair Costs: Car owners may worry about
              unexpected repair costs and might delay or avoid necessary repairs
              due to fear of high expenses.
            </li>
            <li>
              5. Limited Availability: Getting an appointment at a repair shop
              might be challenging, especially during peak times, leaving car
              owners with delayed repairs.
            </li>
            <li>
              6. Lack of Information: Car owners might not have enough knowledge
              about their car issues, making it difficult for them to make
              informed decisions about repairs.
            </li>
            <li>
              7. Emergency Situations: Sudden breakdowns or emergencies can
              leave car owners feeling stranded and anxious, especially if they
              don know where to turn for help.
            </li>
            <li>
              8. DIY Frustration: Attempting to diagnose and fix issues
              themselves can lead to frustration and potential further damage if
              they lack the necessary skills.
            </li>
          </ul>
          <div>
            <Image
              src="/Frame 34056 (1).png"
              width={1140}
              height={815}
              alt="work image"
              className=""
            />
          </div>
        </div>
        <div>
          <Image
            src="/Frame 34056.png"
            width={1140}
            height={815}
            alt="work image"
            className=""
          />
        </div>
        <Image
          src="/Design Process.png"
          width={1240}
          height={1001}
          alt="work image"
          className=""
        />
        <Image
          src="/Interview survey.png"
          width={1240}
          height={2761}
          alt="work image"
          className=""
        />
        <div>
          <h2>EMPATHIZING</h2>
          <p>
            Using the gathered data, I formulated straightforward user personas.
            These personas served as reference points during the design process,
            aiding in decision-making. Additionally, they provided a foundation
            to support and justify these choices when presenting to
            stakeholders.
          </p>
          <Image
            src="/Frame 34065.png"
            width={1140}
            height={815}
            alt="work image"
            className=""
          />
          <Image
            src="/User Journey Map.png"
            width={1140}
            height={815}
            alt="work image"
            className=""
          />
          <Image
            src="/Frame 34084.png"
            width={1140}
            height={815}
            alt="work image"
            className=""
          />
        </div>
        <div>
          <h2>WEBSITE HOMEPAGE DESIGN</h2>
          <Image
            src="/Frame 34067.png"
            width={1140}
            height={815}
            alt="work image"
            className=""
          />
        </div>
        <Image
          src="/Usability Study.png"
          width={1140}
          height={815}
          alt="work image"
          className=""
        />
        <Image
          src="/Refining the design - Accessibility consideration.png"
          width={1140}
          height={815}
          alt="Accessibility image image"
          className=""
        />
        <Image
          src="/Going forward.png"
          width={1240}
          height={1953}
          alt="Going Forward image"
          className="mb-20"
        />
        <Image
          src="/Style Guide.png"
          width={1240}
          height={1999}
          alt="style guide image"
          className="mb-20"
        />
      </section>
      <Contact2 />
    </section>
  );
}
