import projects from "../list/projects";

function Projects() {
  return (
    <section id="projects">
      <div className="mx-24 h-screen pt-20 text-white">
        <div className="rounded-lg bg-neutral-900 px-8 py-5">
          <p className="text-center text-4xl font-semibold text-slate-100">
            Projects
          </p>
          <div className="mt-14 flex h-[70vh] flex-wrap gap-20 overflow-y-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="h-44 w-80 rounded-lg bg-purple-400 p-5"
              >
                <p>{project.name}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
