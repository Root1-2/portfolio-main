import Input from "./Input";
import banner from "/bannerImg.svg";

function Contact() {
  return (
    <section id="contacts">
      <div className="mx-40 my-10 h-screen rounded-lg bg-custom-gradient text-white">
        <div className="flex h-screen items-center justify-between">
          <div className="w-1/2">
            <img src={banner} alt="banner" className="ms-12" />
          </div>

          <div className="w-1/2">
            <p className="mb-10 text-5xl font-semibold">Get In Touch</p>
            <div className="flex flex-wrap gap-10">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <div className="w-full">
                <Input placeholder="Message" type="textarea" />
              </div>

              <button className="rounded-lg border border-slate-200 px-10 py-5 transition hover:bg-purple-900">
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
