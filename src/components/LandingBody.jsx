import { CiCircleChevRight } from "react-icons/ci";

function LandingBody() {
  return (
    <section id="landing">
      <div className="flex h-screen flex-wrap items-center justify-between p-5 text-white sm:p-20">
        <div className="w-1/2">
          <p className="mb-3 sm:mb-10">
            <span className="bg-custom-gradient mb-2 border border-gray-100 px-1 py-3 font-mono text-sm sm:px-3 sm:py-5 sm:text-4xl">
              Welcome To My Portfolio
            </span>
          </p>
          <p className="text-2xl font-semibold sm:mb-2 sm:text-6xl">
            Hi! I'm Abdullah Al Masrur
          </p>
          <p className="mb-5 text-xl font-thin sm:text-6xl">Web Developer</p>
          <p className="mb-5 text-justify text-sm font-thin text-slate-300 sm:text-xl">
            Highly motivated individual seeking for a challenging position in
            the computer science field. My strong command in Python, C, C++, PHP
            and with other languages has been proven by successfully designing,
            developing and implementing various state of the art projects. Eager
            to apply these gained knowledge and experience towards critical
            problem solving in an innovative way for the success of the
            organization.
          </p>
          <button className="rounded-lg border p-2 transition hover:bg-slate-800 sm:p-5">
            <span className="flex gap-3 text-xl">
              {`Let's Connect`} <CiCircleChevRight size={25} />
            </span>
          </button>
        </div>
        <div className="w-1/3 text-center">
          <img
            src="src/img/bannerImg.svg"
            className="animate-updown"
            alt="bannerLogo"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingBody;