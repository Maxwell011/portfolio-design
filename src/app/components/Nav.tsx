import Linkedin from "../svg/Linkedin";

const Nav = () => {
  return (
    <>
      <section>
        {/* Social medial icon links */}
        <div>
          <div>
            <div className="w-12 h-12 opacity-[0.29] bg-base rounded-3xl">
              <div className="w-[34.286px] h-[34.286px] opacity-[0.58] bg-base rounded-2xl ">
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
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
