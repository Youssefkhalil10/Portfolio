import Solar from "../../assets/Solar System.png";
import E_commerce from "../../assets/E-commerce.png";
import Movies from "../../assets/Movies.png";
import Eat from "../../assets/Eat-n-split.png";
import Dash_bord from "../../assets/Dash Bord.png";
const data = [
  {
    title: "Solar System",
    img: Solar,
    link: "https://youssefkhalil10.github.io/Solar-System/",
  },
  {
    title: "E-Commerce",
    img: E_commerce,
    link: "https://e-commerce-web-masters-seven.vercel.app/",
  },
  {
    title: "Web Trending Movies",
    img: Movies,
    link: "https://github.com/Youssefkhalil10/React-Projects/tree/main/finalproject",
  },
  {
    title: "Eat-n-split",
    img: Eat,
    link: "https://eat-n-split-gold.vercel.app/",
  },
  {
    title: "Dash Board",
    img: Dash_bord,
    link: "https://dash-board-two-pi.vercel.app/",
  },
];

function SecondSection() {
  return (
    <section className="text-center py-12  text-white">
      <h4 className="text-3xl font-bold mb-8">My Projects</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{project.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SecondSection;
