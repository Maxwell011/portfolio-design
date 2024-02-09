import Image from "next/image";

export default function QuickShop() {
  return (
    <section>
      <section className="bg-black flex flex-col items-center justify-center text-center px-[100px] py-0">
        <h1 className="text-[64px] font-bold uppercase">Quickshop</h1>
        <p className="text-white text-lg font-normal tracking-[0.36px]">
          Welcome to our one-stop online store for all your football needs! We
          offer a wide range of high-quality football equipment, including
          jerseys, shin pads, footballs, boots, goalkeeper gloves, and training
          equipment. At our store, we passionate about football, and we believe
          that everyone should have access to high-quality equipment and
          training gear. That why we only stock products from trusted brands and
          offer them at competitive prices. Shop with us today and get ready to
          dominate the field!
        </p>
        <Image
          src="/Cover Presentation - Football.png"
          width={1140}
          height={815}
          alt="work image"
          className=""
        />
        <div>
          <div>
            <h2>Task</h2>
            <p>
              Create a user flow for users to access an ecommerce website and
              view product details. Make it mobile responsive.
            </p>
          </div>
          <div>
            <h2>Result</h2>
            <p>
              Designed both screens for mobile and desktop to ensure ease of use
              and consistent user experience for users as well as wider audience
              reach and improved conversion rate for the business.{" "}
            </p>
          </div>
          <div>
            <h2>Duration</h2>
            <p>2 Days</p>
            <h2>Role</h2>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <h2>Desktop Screens</h2>
        {/* image */}
        <h2>Mobile Screens</h2>
        {/* image */}
        <h3>Check out</h3>
        <h3>other projects</h3>
      </section>
    </section>
  );
}
