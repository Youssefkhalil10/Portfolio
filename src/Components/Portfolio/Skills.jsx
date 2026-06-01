import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiVite,
  SiFirebase,
  SiSupabase,
  SiReactquery,
  SiAxios,
  SiTestinglibrary,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { SiFormspree } from "react-icons/si";
function Skills() {
  return (
    <div className="p-2 sm:p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-blue-500">Skills</h3>

      <ul className="text-white leading-relaxed text-sm sm:text-base space-y-3">
        {/* Core */}
        <li className="flex items-center gap-2">
          <FaHtml5 className="text-orange-600" />
          <strong>HTML5:</strong> Semantic HTML, Forms, Accessibility
        </li>

        <li className="flex items-center gap-2">
          <FaCss3Alt className="text-blue-600" />
          <strong>CSS3:</strong> Flexbox, Grid, Animations
        </li>

        <li className="flex items-center gap-2">
          <SiJavascript className="text-yellow-400" />
          <strong>JavaScript (ES6+)</strong>
        </li>

        <li className="flex items-center gap-2">
          <FaReact className="text-blue-500" />
          <strong>React.js:</strong> Components, Hooks, Routing
        </li>

        <li className="flex items-center gap-2">
          <SiVite className="text-purple-500" />
          <strong>Vite:</strong> Fast build tool for React apps
        </li>

        {/* Styling */}
        <li className="flex items-center gap-2">
          <SiTailwindcss className="text-blue-400" />
          <strong>Tailwind CSS</strong>
        </li>

        <li className="flex items-center gap-2">
          <SiBootstrap className="text-purple-600" />
          <strong>Bootstrap 5</strong>
        </li>

        {/* State Management */}
        <li className="flex items-center gap-2">
          <SiRedux className="text-purple-600" />
          <strong>State Management:</strong> Redux, Redux Toolkit, Context API
        </li>

        {/* Data Fetching */}
        <li className="flex items-center gap-2">
          <SiReactquery className="text-red-500" />
          <strong>React Query:</strong> Server State Management & Caching
        </li>

        <li className="flex items-center gap-2">
          <SiAxios className="text-indigo-500" />
          <strong>APIs:</strong> RESTful APIs, Axios, Fetch API
        </li>

        {/* Backend Services */}
        <li className="flex items-center gap-2">
          <SiFirebase className="text-yellow-500" />
          <strong>Firebase</strong>
        </li>

        <li className="flex items-center gap-2">
          <SiSupabase className="text-green-500" />
          <strong>Supabase</strong>
        </li>

        {/* Forms & Testing */}
        <li className="flex items-center gap-2">
          <SiFormspree className="text-pink-400" />
          <strong>Forms:</strong> React Hook Form
        </li>

        <li className="flex items-center gap-2">
          <SiTestinglibrary className="text-red-400" />
          <strong>Testing:</strong> React Testing Library
        </li>

        {/* Tools */}
        <li className="flex items-center gap-2">
          <FaGitAlt className="text-orange-600" />
          <strong>Tools:</strong> Git, GitHub, NPM
        </li>
      </ul>
    </div>
  );
}

export default Skills;
