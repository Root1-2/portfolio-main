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
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative h-44 w-80 scale-90 transform rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 transition duration-300 ease-in-out hover:scale-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-700"
              >
                <img
                  src={project.thumbnail}
                  className="absolute left-0 top-0 h-full w-full rounded-lg object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                  alt={project.name}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-2xl font-semibold">{project.name}</p>
                  <p className="text-base">{project.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
