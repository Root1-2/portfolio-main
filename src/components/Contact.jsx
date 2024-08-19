import Input from "./Input";
import banner from "/bannerImg.svg";

function Contact() {
  return (
    <section id="contacts">
      <div className="mx-5 my-5 h-[45rem] rounded-lg bg-custom-gradient text-white sm:mx-40 sm:my-10 sm:h-screen">
        <div className="flex h-screen flex-wrap items-center justify-between">
          <div className="ms-20 w-40 sm:ms-0 sm:w-1/2">
            <img src={banner} alt="banner" className="sm:ms-12" />
          </div>

          <div className="sm:w-1/2">
            <p className="mb-10 text-center text-3xl font-semibold sm:text-start sm:text-5xl">
              Get In Touch
            </p>
            <div className="mx-3 flex flex-wrap gap-3 sm:gap-10">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <div className="w-full">
                <Input placeholder="Message" type="textarea" />
              </div>

              <button className="rounded-full border border-slate-200 px-5 py-3 transition hover:bg-purple-900 sm:px-10 sm:py-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
