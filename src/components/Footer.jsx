import LogoSvg from "../assets/svg/LogoSvg";
import { footer } from "../constants";
import Divider from "../design/Divider";

const Footer = () => {
  return (
    <>
      <Divider />
      <div className="pt-10 pb-10 md:pt-24 md:pb-24">
        <div className="flex flex-wrap md:p-10 gap-5 justify-center md:items-start ">
          <div className="flex md:flex-[2] w-[50rem] justify-center md:justify-start pb-5 md:pb-0">
            <LogoSvg width={200} height={200} />
          </div>
          <div className="flex flex-col md:flex-1 gap-1 ">
            {footer.map((item) => (
              <>
                <div className="flex flex-col ">
                  <a
                    href={item.url}
                    className="pb-8 font-poppins sm:text-[65px] text-[40px] md:text-left text-white font-light text-center"
                  >
                    {item.title}
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Footer;
