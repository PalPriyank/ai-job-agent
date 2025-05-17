import React from "react"; 
import parse from 'html-react-parser';


interface Props {
  jobData: any;
}

const JobPreview: React.FC<Props> = ({ jobData }) => {
  const [showAllSkills, setShowAllSkills] = React.useState(false);
  const skillsToShow = showAllSkills ? jobData.skills : jobData.skills?.slice(0, 6)??[];

  return (
    <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
      {/* Intro Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-1">Job Description</h2>
        <p className="text-sm text-gray-500 mb-4">
        Please review, edit, and approve this job description I wrote based on best practices.
        </p>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white font-bold text-lg rounded-md w-10 h-10 flex items-center justify-center">
              M-N
            </div>
            <div>
              <h3 className="text-lg font-bold">{jobData.jobPosting?.title}</h3>
              <p className="text-sm text-gray-600">{jobData.recommended_location}</p>
            </div>
          </div>
          <button className="text-purple-500 hover:text-purple-600">
            {/* <Pencil size={18} /> */}
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-md font-semibold">Skills</h3>
          <button className="text-purple-500 hover:text-purple-600">
            {/* <Pencil size={18} /> */}
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {skillsToShow.map((skill:any, idx:number) => (
            <span key={idx} className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700">
              {skill}
            </span>
          ))}
        </div>
        {jobData.skills?.length > 6 && (
          <button
            className="text-green-600 text-sm font-medium mt-1"
            onClick={() => setShowAllSkills(!showAllSkills)}
          >
            {showAllSkills ? "− show less" : "+ show more"}
          </button>
        )}
      </section>

      {/* Description Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-md font-semibold">Description</h3>
          <button className="text-purple-500 hover:text-purple-600">
            {/* <Pencil size={18} /> */}
          </button>
        </div>
        <p className="text-sm leading-relaxed text-gray-800">{parse(jobData.jobPosting?.description??"")}</p>
      </section>
    </div>
  );
};

export default JobPreview;
