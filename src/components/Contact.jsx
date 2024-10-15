import Input from "./Input";
import banner from "/bannerImg.svg";

function Contact() {
  return (
    <section id="contacts">
      <div className="mx-5 my-5 rounded-lg bg-custom-gradient text-white sm:mx-40 sm:my-10">
        <div className="flex h-full flex-col items-center justify-start sm:h-screen sm:flex-row sm:justify-between">
          <div className="mt-10 w-64 sm:mx-0 sm:ms-0 sm:w-1/2">
            <img
              src={banner}
              alt="banner"
              className="mx-auto sm:mx-0 sm:ms-12"
            />
          </div>

          <div className="sm:w-1/2">
            <p className="my-10 text-center text-3xl font-semibold sm:mb-5 sm:text-start sm:text-5xl">
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

              <button className="mb-3 rounded-full border border-slate-200 px-5 py-3 transition hover:bg-purple-900 sm:px-10 sm:py-5">
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
