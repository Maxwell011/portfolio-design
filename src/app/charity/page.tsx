import Image from "next/image";
import Chain from "../svg/chain";

export default function Charity() {
  return (
    <section className="bg-black flex flex-col items-center justify-center text-center px-[100px] py-0">
      {" "}
      <h1 className="text-[64px] font-bold uppercase">Save the world</h1>
      <p className="text-white text-lg font-normal tracking-[0.36px]">
        Welcome to the official landing page of Save The World. A dedicated
        charity organization committed to making a positive impact on the lives
        of those in need. Our mission is to bring hope, support, and change to
        communities worldwide. This landing page serves as a gateway to our
        charitable initiatives, events, and opportunities for you to join us in
        making a difference.
      </p>
      <div className="flex w-[1210px] h-[845px] justify-center items-center rounded-[40px] bg-[#233038]">
        {" "}
        <Image
          src="/Rectangle 23 (4).png"
          width={1140}
          height={815}
          alt="work image"
          className=""
        />
      </div>
      <div className="flex gap-[50rem]">
        <Chain />
        <Chain />
      </div>
      <div>
        <div>
          <h2>Task</h2>
          <p>
            With the existing desktop screen for the product “Meet D Expert,
            design a mobile responsiveness for users to seamlessly access and
            engage with our product on their smartphones, whether you are on the
            go or relaxing at home.
          </p>
        </div>
        <div>
          <h2>Result</h2>
          <ul>
            <li>Enhanced Awareness</li>
            <li>Event Promotion</li>
            <li>Community Building</li>
            <li>Access To Resources</li>
            <li>Global Reach</li>
            <li>Streamlined Donation Process</li>
            <li>Increased Volunteer Engagement</li>
          </ul>
        </div>
        <div>
          <h2>Duration</h2>
          <p>4 Hours</p>
          <h2>Role</h2>
          <p>UI/UX Designer</p>
        </div>
      </div>
      <h2></h2>
      {/* image */}
      <h2>Full landing page design</h2>
      {/* image */}
      <h3>Check out</h3>
      <h3>other projects</h3>{" "}
    </section>
  );
}
