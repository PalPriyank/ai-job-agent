// src/App.tsx
import { useState } from "react";
import JobModal from "./components/job/JobModal";
import JobPreview from "./components/JobPreview";
import LoaderModal from "./components/LoaderModal";
import JobList from "./components/JobList/JobList";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Interview from "./components/Interview/Interview";

function App() {


  const [jobData, setJobData] = useState({
    title: "Frontend Developer",
    recommended_location: "Bangalore, India",
    recommended_salary: "$60,000 - $80,000 per year",
    job_description:
      "We are seeking a talented Frontend Developer to join our dynamic team in Bangalore. Our company specializes in cutting-edge technology solutions, and we are looking for someone passionate about building intuitive and responsive web applications.",
    roles_and_responsibilities: [
      "Develop and enhance user interfaces using modern frontend frameworks like React.js",
      "Work closely with UI/UX designers to implement design specifications",
      "Optimize web applications for maximum speed and scalability",
      "Collaborate with product and backend teams to deliver end-to-end solutions",
      "Maintain code quality and ensure application functionality",
    ],
    qualifications: [
      "Bachelor's Degree in Computer Science, Information Technology or a related field",
      "Proven experience of 2+ years in frontend development",
      "Experience working in agile development environments",
    ],
    skills: ["React", "JavaScript", "HTML", "CSS", "Redux"],
    screener_questions: [
      "What is your experience level with React.js and similar frontend technologies?",
      "Can you provide examples of how you have improved application performance in your previous projects?",
      "Describe a challenging project you worked on in frontend development and how you overcame it.",
      "What strategies do you use for troubleshooting and debugging frontend issues?",
      "How do you ensure cross-browser compatibility for your web applications?",
    ],
  })
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<JobList />} />
          <Route path="/interview" element={<Interview />} />
        </Route>
      </Routes>
    </Router>
    // <Layout>
    //   <div className="min-w-screen h-screen bg-gray-100 flex flex-col items-center overflow-hidden">
    //     <div className="min-w-full shadow-md px-3">

    //       {/* <button
    //       onClick={() => setModalOpen(true)}
    //       className="px-6 py-3 text-purple-700 transition"
    //     >
    //       + New job
    //     </button> */}
    //     </div>
    //     {/* <div className="overflow-y-auto">

    //     {isLoading ? <LoaderModal /> : <JobPreview jobData={jobData} />}
    //   </div> */}

    //     <JobList />
    //     {/* <JobModal setJobData={setJobData} isLoading={setIsLoading} isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}
    //   </div>
    // </Layout>
  );
}

export default App;