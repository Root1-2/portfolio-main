import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { LuMonitorPlay } from "react-icons/lu";
import bg from "/banner-bg.png";
import Header from "../components/Header";
import projects from "../list/projects";

function Project() {
  let { id } = useParams();

  const project = projects.find((project) => project.id === id);

  console.log(project);
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
        <div className="pt-24 text-white">
          <div className="mx-52">
            <div className="mb-5 flex justify-between">
              <div className="flex">
                <div className="h-44 w-80 rounded-lg">
                  <img
                    src={project.thumbnail}
                    className="h-full w-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div className="ms-10">
                  <p className="mb-2 text-4xl font-semibold text-slate-300">
                    {project.name}
                  </p>
                  <p className="mb-4 text-xl text-slate-100">{project.tools}</p>
                  <p className="text-xl">Created: {project.created}</p>
                  <div className="mt-5 flex gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub title="GitHub" size={30} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LuMonitorPlay title="Live" size={30} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p className="rounded-full bg-cyan-950 px-5 py-3 text-xl font-semibold text-slate-100">
                  {project.type}
                </p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="mt-5">
              <p className="text-4xl font-semibold text-slate-200">
                Description
              </p>
              <p className="mt-5 text-xl text-slate-100">
                {project.description}
              </p>
              <p className="mt-10 text-4xl font-semibold text-slate-200">
                Features
              </p>
              <p>Features List</p>
              <p className="mt-10 text-4xl font-semibold text-slate-200">
                Screenshots
              </p>
              <p>Screenshots</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
