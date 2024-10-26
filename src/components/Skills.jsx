import { useState } from "react";
import Carousel from "./Carousel";
import skills from "../list/skills";
import subskills from "../list/subskills";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSubskills = subskills.filter(
    (sub) => sub.for === selectedSkill,
  );

  return (
    <section id="skills">
      <div className="h-screen pt-20 text-white">
        <div className="mx-7 rounded-full bg-neutral-900 p-1 md:mx-20 md:p-10">
          <p className="mb-10 pt-4 text-center text-xl font-semibold text-slate-100 md:text-4xl">
            Skills
          </p>
          <Carousel data={skills} onClick={setSelectedSkill} />
        </div>

        {selectedSkill && filteredSubskills.length > 0 && (
          <div className="animate__animated animate__backInUp mx-7 mt-7 rounded-full bg-neutral-900 p-1 md:mx-20 md:p-10">
            <p className="mb-10 pt-4 text-center text-xl font-semibold text-slate-100 md:text-4xl">
              Sub-Skills for {selectedSkill}
            </p>
            <Carousel data={filteredSubskills} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
