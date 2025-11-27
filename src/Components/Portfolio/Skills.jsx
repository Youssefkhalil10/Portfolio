import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";

function Skills() {
  return (
    <div className=" p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-blue-500">Skills</h3>
      <ul className="text-white leading-relaxed space-y-2">
        <li className="flex items-center gap-2">
          <FaHtml5 className="text-orange-600" /> <strong>HTML5:</strong>{" "}
          Semantic HTML, Forms, Accessibility
        </li>
        <li className="flex items-center gap-2">
          <FaCss3Alt className="text-blue-600" /> <strong>CSS3:</strong>{" "}
          Flexbox, Grid, Animations
        </li>
        <li className="flex items-center gap-2">
          <SiJavascript className="text-yellow-400" />{" "}
          <strong>JavaScript (ES6+)</strong>
        </li>
        <li className="flex items-center gap-2">
          <SiTailwindcss className="text-blue-400" />{" "}
          <strong>Tailwind CSS</strong>
        </li>
        <li className="flex items-center gap-2">
          <SiBootstrap className="text-purple-600" />{" "}
          <strong>Bootstrap 5</strong>
        </li>
        <li className="flex items-center gap-2">
          <FaReact className="text-blue-500" /> <strong>React.js:</strong>{" "}
          Components, Hooks
        </li>
        <li className="flex items-center gap-2">
          <FaGitAlt className="text-orange-600" />{" "}
          <strong>Version Control:</strong> Git, GitHub
        </li>
        <li className="flex items-center gap-2">
          <SiRedux className="text-purple-600" />{" "}
          <strong>State Management:</strong> Redux, Context API
        </li>
      </ul>
    </div>
  );
}

export default Skills;
