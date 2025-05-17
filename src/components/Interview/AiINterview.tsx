import React, { useState } from "react";
interface props {
  applicantData: any;
  setShowQuesions: () => void;
  jobPosition: string;
  setJobPosition: React.Dispatch<any>;
  experienceRange: string;
  setExperienceRange: React.Dispatch<React.SetStateAction<string>>;
  interviewTypes: Array<string>;
  setInterviewTypes: React.Dispatch<React.SetStateAction<string[]>>;
  expirationDate: string;
  setExpirationDate: React.Dispatch<React.SetStateAction<string>>;
  handleGenerateQuestions: () => void;
}
const AiInterview: React.FC<props> = ({
  handleGenerateQuestions,
  setExperienceRange,
  setExpirationDate,
  setInterviewTypes,
  setJobPosition,
  experienceRange,
  expirationDate,
  interviewTypes,
  jobPosition,
}) => {
  const [customType, setCustomType] = useState("");

  const handleCheckboxChange = (type: string) => {
    setInterviewTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const addCustomType = () => {
    if (customType.trim() && !interviewTypes.includes(customType)) {
      setInterviewTypes([...interviewTypes, customType]);
      setCustomType("");
    }
  };

  const handleSubmit = () => {
    // const payload = {
    //   jobPosition,
    //   experienceRange,
    //   interviewTypes,
    //   expirationDate,
    // };
    handleGenerateQuestions();
    // setShowQuesions();
  };

  return (
    <div>
      <div className="mb-4">
        <label className="text-purple-700 font-semibold">Job Position</label>
        <input
          type="text"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
          className="w-full mt-1 p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="text-purple-700 font-semibold">
          Experience Range
        </label>
        <select
          value={experienceRange}
          onChange={(e) => setExperienceRange(e.target.value)}
          className="w-full mt-1 p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="0-2 years">0-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="6-10 years">6-10 years</option>
          <option value="10+ years">10+ years</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-purple-700 font-semibold">Required Skills</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {["React", "TypeScript", "Next.js", "CSS/Tailwind"].map((skill) => (
            <span
              key={skill}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-purple-700 font-semibold">Interview Types</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[
            "Technical",
            "Behavioral",
            "Leadership",
            "Problem-Solving",
            "System Design",
            "Cultural Fit",
          ].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={interviewTypes.includes(type)}
                onChange={() => handleCheckboxChange(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-purple-700 font-semibold">
          Custom Interview Type
        </label>
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            value={customType}
            onChange={(e) => setCustomType(e.target.value)}
            className="flex-grow p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Add custom interview type"
          />
          <button
            onClick={addCustomType}
            className="px-4 py-2 bg-purple-500 text-white rounded-md"
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-purple-700 font-semibold">
          Interview Expiration Date
        </label>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="w-full mt-1 p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <p className="text-sm text-gray-500 mt-1">
          The interview link will expire after this date.
        </p>
      </div>

      <div className="flex justify-between">
        <button className="text-purple-500 font-semibold">Cancel</button>
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AiInterview;
