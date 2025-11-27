import Img from "../../assets/Profile Picture .jpg";
import background from "../../assets/Hero Background.svg";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import SecondSection from "./SecondSection";
import { Link } from "react-router-dom";
const data = [{ image: Img, Key: "10" }];

function FirstSection() {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full  text-white p-8 md:p-16">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-400">Youssef</span>
          </h1>
          <p className="text-lg md:text-2xl opacity-80">
            Front-End React.js Developer
          </p>
          <span className="flex gap-7 text-3xl">
            <span className="text-xl">Check out my social</span>
            <a href="https://github.com/Youssefkhalil10" target="_blanck">
              <FaGithub className="hover:text-gray-400 duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/youssef-khalil-796a23333"
              target="_blanck"
            >
              <FaLinkedin className="hover:text-blue-400 duration-200" />
            </a>
            <a
              href="https://www.facebook.com/share/1MTZshKjKL/"
              target="_blanck"
            >
              <FaFacebook className="hover:text-blue-400 duration-200" />
            </a>
            <a href="https://wa.me/201275294235" target="_blanck">
              <FaWhatsapp className="hover:text-green-400 duration-200" />
            </a>
          </span>
        </div>
        <div
          className="flex justify-center md:justify-end w-full md:w-1/2 mb-6 md:mb-0 rounded-full bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          {data.map((img) => (
            <img
              key={img.Key}
              src={img.image}
              alt="Profile"
              className="rounded-full w-36 h-36 md:w-60 md:h-60 object-cover border-4 border-white/20 shadow-xl"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default FirstSection;
