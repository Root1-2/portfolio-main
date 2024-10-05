function ProjectNavbar({ handleProjectShow }) {
  return (
    <div className="flex h-[60px] items-center justify-between rounded-full border border-gray-700 text-lg font-semibold text-white">
      <div
        className="group relative h-full flex-1"
        onClick={() => handleProjectShow("full")}
      >
        <p className="relative z-10 flex h-full cursor-pointer items-center justify-center rounded-s-full bg-transparent transition-all duration-300 ease-in-out">
          Full-Fledged Projects
        </p>
        <div className="absolute inset-0 z-0 rounded-s-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      </div>
      <span className="h-full w-[1px] bg-gray-500"></span>
      <div
        className="group relative h-full flex-1"
        onClick={() => handleProjectShow("side")}
      >
        <p className="relative z-10 flex h-full cursor-pointer items-center justify-center rounded-e-full bg-transparent transition-all duration-300 ease-in-out">
          Side Projects
        </p>
        <div className="absolute inset-0 z-0 rounded-e-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      </div>
    </div>
  );
}

export default ProjectNavbar;
