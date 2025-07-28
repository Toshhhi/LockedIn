/* eslint-disable no-undef */
import { useState } from "react";
import logo from "../assets/logo.png";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(false);


  return (
    <div className="border rounded-2xl p-4 mb-4 shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-xl font-semibold flex justify-between items-center"
      >
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
};


const CreateProfile = () => {
    const [isWorkingOnProject, setIsWorkingOnProject] = useState(false);
const [projectDescription, setProjectDescription] = useState("");

const [collabGoals, setCollabGoals] = useState([]);
const [collabStyle, setCollabStyle] = useState("");
  return (
    <div style={{ fontFamily: 'Outfit' }} className="bg-black min-h-screen w-full min-h-[100vh] flex items-start text-white"> 
    <div className="mx-auto py-10 px-10 border border-[#8A7EA8] rounded-2xl w-full m-5 ">
      <div className="flex flex-col items-center  justify-center">
      <img src={logo} alt="logo" className="h-30 mb-4 pb-4" />
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Profile</h1>
      </div>

      <Section title="Basic Info">
        <input
        type="text"
        placeholder="Full Name"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        required
        />

        <input
        type="email"
        placeholder="Enter You Email"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        required
        />

        <input
        type="tel"
        placeholder="Enter Your Mobile Number"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        required
        />

        <input
        type="text"
        placeholder="Enter Your College Name"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        required
        />

        <input
        type="number"
        placeholder="Enter Your Passing Year"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        required
        />

      </Section>

      <Section title="Professional Info">
        <input type="text"
        placeholder="Current Company / Internship (if any)"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        />

        <input type="text"
        placeholder="Previous Internships / Freelance Projects (Short summary or links)"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        />

        <input type="url"
        placeholder="Portfolio / GitHub / LinkedIn URLs"
        className="w-full border border-[#8A7EA8] rounded-2xl px-4 py-2 mt-2"
        />

      </Section>

      <Section title="Preferences">
        {/* Are you currently working on a project? */}
<label className="block font-medium mt-4">💡 Are you currently working on a project?</label>
<div className="flex items-center gap-4 mt-2">
  <label>
    <input
      type="radio"
      name="projectStatus"
      value="yes"
      checked={isWorkingOnProject === true}
      onChange={() => setIsWorkingOnProject(true)}
    /> Yes
  </label>
  <label>
    <input
      type="radio"
      name="projectStatus"
      value="no"
      checked={isWorkingOnProject === false}
      onChange={() => setIsWorkingOnProject(false)}
    /> No
  </label>
</div>

{isWorkingOnProject && (
  <div className="mt-4">
    <label className="block font-medium">Describe your project in a few lines</label>
    <textarea
      className="w-full p-2 mt-1 border rounded-md"
      rows="3"
      value={projectDescription}
      onChange={(e) => setProjectDescription(e.target.value)}
    />
  </div>
)}

<label className="block font-medium mt-6">Looking to:</label>
<div className="flex flex-col gap-1 mt-2">
  {["Collaborate on Projects", "Join a Startup/Side Hustle", "Find Hackathon Buddies", "Just Explore", "Seeking Advice"].map((option) => (
    <label key={option}>
      <input
        type="checkbox"
        checked={collabGoals.includes(option)}
        onChange={() => {
          if (collabGoals.includes(option)) {
            setCollabGoals(collabGoals.filter((item) => item !== option));
          } else {
            setCollabGoals([...collabGoals, option]);
          }
        }}
      />{" "}
      {option}
    </label>
  ))}
</div>
<label className="block font-medium mt-6">Preferred Collaboration Style:</label>
<div className="flex flex-col gap-1 mt-2">
  {["Chill & Casual", "Fast & Focused", "Learn & Grow Together"].map((style) => (
    <label key={style}>
      <input
        type="radio"
        name="collabStyle"
        value={style}
        checked={collabStyle === style}
        onChange={(e) => setCollabStyle(e.target.value)}
      />{" "}
      {style}
    </label>
  ))}
</div>


       
      </Section>

      <Section title="Interests">
        {/* Add your form inputs here */}
      </Section>

      <Section title="Vibe">
        {/* Add your form inputs here */}
      </Section>

      <Section title="Privacy & Visibility Settings">
        {/* Add your form inputs here */}
      </Section>

      <div className="text-center mt-8">
        <button className="bg-[#8A7EA8] text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition">
          Save Profile
        </button>
      </div>
    </div>
    </div>
  );
};

export default CreateProfile;
