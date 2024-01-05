import Linkedin from "../svg/Linkedin";

const Nav = () => {
  return (
    <>
      <section>
        {/* Social medial icon links */}
        <div>
          <div>
            <div className="w-[34.286px] h-[34.286px] opacity-[0.58] bg-base rounded-2xl flex items-center justify-center ">
              <div className="w-12 h-12 opacity-[0.29] bg-base rounded-3xl flex items-center justify-center p-5">
                <Linkedin />
              </div>
            </div>
            <div className="w-[34.286px] h-[34.286px] opacity-[0.58] bg-base rounded-2xl flex items-center justify-center ">
              <div className="w-12 h-12 opacity-[0.29] bg-base rounded-3xl flex items-center justify-center p-5">
                <Linkedin />
              </div>
            </div>
            <div className="w-[34.286px] h-[34.286px] opacity-[0.58] bg-base rounded-2xl flex items-center justify-center ">
              <div className="w-12 h-12 opacity-[0.29] bg-base rounded-3xl flex items-center justify-center p-5">
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {/* flex justify-center items-center gap-2.5 px-8 py-[5px] rounded-lg */}
            <li className="text-lg">Home</li>
            <li className="text-lg">Work</li>
            <li className="text-lg">About</li>
            <li className="text-lg">Contact</li>
          </ul>
        </div>

        <div>
          <h2>ofomastanley007@gmail.com</h2>
        </div>
      </section>
    </>
  );
};
export default Nav;
