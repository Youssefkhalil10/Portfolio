import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear(); // السنة الحالية

  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="text-center space-y-6">
        {/* العنوان */}
        <h1 className="text-3xl font-bold text-blue-400">Contact With Me</h1>

        {/* أيقونات السوشيال */}
        <div className="flex justify-center gap-7 text-3xl">
          <a
            href="https://github.com/Youssefkhalil10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400 duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/youssef-khalil-796a23333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 duration-200" />
          </a>
          <a
            href="https://www.facebook.com/share/1MTZshKjKL/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-400 duration-200" />
          </a>
          <a
            href="https://wa.me/201275294235"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-400 duration-200" />
          </a>
        </div>

        {/* الاسم والسنة */}
        <p className="text-gray-400">Youssef Khalil &copy; {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
