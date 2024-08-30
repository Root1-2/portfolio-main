import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { LuMonitorPlay } from "react-icons/lu";
import bg from "/banner-bg.png";
import Header from "../components/Header";
import projects from "../list/projects";

function Project() {
  let { id } = useParams();

  const project = projects.find((project) => project.id === id);

  const features = projects[id - 1].features.split("/");
  const screenshots = projects[id - 1].screenshots.split("|");
  console.log(screenshots);
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-screen overflow-y-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
        <div className="pt-24 text-white">
          <div className="mx-5 sm:mx-52">
            <div className="mb-5 flex justify-between">
              <div className="flex flex-wrap">
                <div className="w-full rounded-lg sm:h-44 sm:w-80">
                  <img
                    src={project.thumbnail}
                    className="h-full w-full rounded-lg object-cover"
                    alt="thumbnail"
                  />
                </div>
                <div className="sm:ms-10">
                  <p className="mb-2 text-3xl font-semibold text-slate-300 sm:text-4xl">
                    {project.name}
                  </p>
                  <p className="mb-2 text-lg text-slate-100 sm:text-xl">
                    {project.tools}
                  </p>
                  <p className="text-lg sm:text-xl">
                    Created: {project.created}
                  </p>
                  <div className="mt-6 flex gap-5">
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
              <div className="animate__animated animate__jackInTheBox flex flex-col justify-end sm:block">
                <p className="whitespace-nowrap rounded-full bg-blue-950 px-3 py-2 text-sm font-semibold text-slate-100 sm:px-5 sm:py-3 sm:text-base">
                  {project.type}
                </p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="mt-5">
              <p className="text-2xl font-semibold text-slate-200 underline underline-offset-4 sm:text-4xl">
                Description
              </p>
              <p className="mt-5 text-base text-slate-100 sm:text-xl">
                {project.description}
              </p>
              <p className="mb-3 mt-10 text-2xl font-semibold text-slate-200 underline underline-offset-4 sm:text-4xl">
                Features
              </p>
              <ul className="ms-6 flex list-disc flex-wrap">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="mb-2 w-2/5 text-sm text-slate-200 sm:w-1/4 sm:text-xl"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-2xl font-semibold text-slate-200 underline underline-offset-4 sm:text-4xl">
                Screenshots
              </p>
              <div className="flex w-full gap-5 overflow-x-scroll">
                {screenshots.map((screenshot, index) => (
                  <img
                    src={screenshot}
                    alt=""
                    className="my-5 w-48 sm:w-96"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
