const Contact = () => {
  return (
    <>
      <section className="flex items-center flex-col bg-abyss">
        <div className="px-4 py-3 border-y-4 border-y-white border-t-4 border-t-white border-solid">
          <h1 className="text-white text-[40px] font-bold leading-[160%] ">
            CONTACT ME
          </h1>
        </div>{" "}
        <p className="text-white text-lg font-medium  mt-5">
          Let&apos s connect and discuss how I can be an asset to your team.
          I&apos m here and ready to contribute.
        </p>
        <h2 className="text-white text-2xl font-medium leading-[160%]">
          🌟Email me at:
        </h2>
        <div className="h-[52px] w-[327px] px-6 py-2.5 rounded-lg border-2 border-solid border-[#CDAF75]">
          <h2 className=" text-xl font-normal leading-[normal] tracking-[0.4px] underline text-[#fff]">
            ofomastanley007@gmail.com
          </h2>
        </div>
        <p className="text-white text-2xl font-medium leading-[160%]">OR</p>
        <h2 className="text-white text-2xl font-medium leading-[160%]">
          Send a message
        </h2>
        <label className="text-white text-lg not-italic font-normal leading-[160%]">
          Email
        </label>
        <input
          type="text"
          name=""
          id=""
          className="border flex w-[553px] h-[52px] items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#183135] border-solid border-[#9E9E9E]"
          placeholder="Your email address"
        />
        <label className="text-white text-lg font-normal leading-[160%]">
          Message
        </label>
        <textarea
          className="flex w-[553px] h-40 items-start gap-2.5 px-4 py-[15.5px] rounded-lg border-solid border-[#9E9E9E] bg-[#183135]"
          placeholder="Type your message here"
        ></textarea>
        <div className="flex justify-center items-center gap-2 px-[23.5px] py-[14.5px] rounded-lg bg-gold w-[553px] h-[52px]">
          <button className="text-black text-lg font-semibold tracking-[0.36px] uppercase">
            Send Message
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
