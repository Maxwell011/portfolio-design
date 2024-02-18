import Image from "next/image";
import Chain from "../svg/chain";
import Available from "../components/Available";
import Contact2 from "../components/contact2";

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
          alt="Project image"
          className=""
        />
        <div className="flex gap-[50rem]">
          <Chain />
          <Chain />
        </div>
        <div className="border flex w-[1240px] flex-col items-start rounded-3xl border-solid border-gold">
          <div className="border-b-[#CDAF75] border-b border-solid flex flex-col items-start gap-3 px-12 py-6">
            <div className="flex flex-col items-start gap-3 self-stretch px-12 py-6 border-b-[#CDAF75] border-b border-solid">
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Task
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                Create a user flow for users to access an ecommerce website and
                view product details. Make it mobile responsive.
              </p>
            </div>
            <div>
              <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                Result
              </h2>
              <p className="text-white text-lg font-normal tracking-[0.36px]">
                Designed both screens for mobile and desktop to ensure ease of
                use and consistent user experience for users as well as wider
                audience reach and improved conversion rate for the business.{" "}
              </p>
            </div>
            <div className="flex gap-[40rem] p-[15px]">
              <div className="flex flex-col">
                <h2 className="text-white text-[32px] font-semibold tracking-[0.64px]">
                  Duration
                </h2>
                <p className="text-white text-lg font-normal tracking-[0.36px]">
                  2 Days
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
        </div>
        <Image
          src="/Frame-desktop-boots.png"
          width={1240}
          height={1035}
          alt="Desktop screen image"
          className=""
        />
        <Image
          src="/Frame - mobile -screen-boots.png"
          width={1240}
          height={2157}
          alt="Mobile screen image"
          className=""
        />
        <div className="my-[60px] w-[1500px]">
          <Available />
        </div>
        <h3 className="text-lg font-medium text-white">Check out</h3>
        <h3 className="text-[40px] font-bold uppercase">other projects</h3>
      </section>
      <Contact2 />
    </section>
  );
}
