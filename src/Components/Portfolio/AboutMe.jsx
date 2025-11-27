import Skills from "./Skills";

function AboutMe() {
  return (
    <section className="max-w-6xl mx-auto p-8 md:p-16 text-gray-900  rounded-xl space-y-12">
      {/* Summary */}
      <div className="p-6 rounded-lg  shadow-lg ">
        <h3 className="text-2xl font-bold mb-4 text-blue-500">Summary</h3>
        <p className=" text-white leading-relaxed">
          Front-End Developer with a strong foundation in HTML, CSS, JavaScript,
          and React.js. Skilled in building responsive and interactive web
          applications with a focus on clean UI and enhancing user experience.
          Proficient in version control using Git/GitHub and integrating RESTful
          APIs. Passionate about learning new technologies and collaborating in
          dynamic team environments to deliver high-quality web solutions.
        </p>
      </div>

      {/* Skills */}
      <Skills />
    </section>
  );
}

export default AboutMe;
