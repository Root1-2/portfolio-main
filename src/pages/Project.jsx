// import { useParams } from "react-router-dom";
import bg from "/banner-bg.png";
import Header from "../components/Header";

function Project() {
  // let { id } = useParams();
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
                <div className="h-44 w-80 bg-red-400"></div>
                <div className="ms-10">
                  <p className="mb-2 text-3xl font-semibold text-slate-200">
                    Project Name
                  </p>
                  <p className="mb-2 text-2xl text-slate-100">Project Tools</p>
                  <p>Project Links</p>
                </div>
              </div>
              <div>
                <p>Project Created</p>
                <p>Project Type</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="mt-5">
              <p className="text-4xl font-semibold text-slate-200">
                Description
              </p>
              <p className="mt-5 text-xl text-slate-100">
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem Ipsum
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
