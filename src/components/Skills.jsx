import Carousel from "./Carousel";

function Skills() {
  return (
    <section id="skills">
      <div className="h-screen pt-20 text-white">
        <div className="mx-20 rounded-full bg-neutral-900 p-10">
          <p className="text-center text-4xl font-semibold">Skills</p>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Skills;
