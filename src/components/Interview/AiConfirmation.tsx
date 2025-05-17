import React, { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface AIInterviewDetailsProps {
  candidateName: string;
  candidateEmail: string;
  experienceRange: string;
  questionCount: number;
  position: string;
  interviewTypes: string[];
  expirationDate: string;
  interviewLink: string;
}

const AiConfirmation: React.FC<AIInterviewDetailsProps> = ({
  candidateName,
  candidateEmail,
  experienceRange,
  questionCount,
  position,
  interviewTypes,
  expirationDate,
  interviewLink,

}) => {
  const [copied, setCopied] = useState(false);
const navigate = useNavigate();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(interviewLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy interview link:", error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto  bg-white overflow-hidden border border-gray-100 rounded-lg ">
      <p className="text-2xl bg-purple-100 p-3 text-purple-700 font-bold text-center mb-6">
        AI Interview Details
      </p>

      <div className="grid grid-cols-2 px-6 gap-6 ">
        <div className="">
          <p className=" text-purple-600 font-semibold">Candidate</p>
          <p className="font-medium text-gray-900">{candidateName}</p>
          <p className="text-gray-600">{candidateEmail}</p>
        </div>
        <div>
          <p className=" text-purple-600 font-semibold">Experience Range</p>
          <p className="text-gray-600">{experienceRange}</p>
        </div>

        <div>
          <p className=" text-purple-600 font-semibold">Questions</p>
          <p className="text-gray-600">{questionCount} questions</p>
        </div>

        <div>
          <p className=" text-purple-600 font-semibold">Position</p>
          <p className="text-gray-600">{position}</p>
        </div>

        <div>
          <p className=" text-purple-600 font-semibold">Interview Types</p>
          <p className="text-gray-600">{interviewTypes.join(", ")}</p>
        </div>
        <div className="mb-8">
          <p className=" text-purple-600 font-semibold">Expiration Date</p>
          <p className="text-gray-600">{expirationDate}</p>
        </div>
      </div>

      <div className="border-t px-6 border-gray-200 py-5">
        <h2 className=" text-purple-600 font-semibold">AI Interview Link</h2>
        <div className="flex items-center justify-between gap-2  mt-1">
          <div className="border rounded bg-purple-100 flex-1">
            <a
              href={interviewLink}
              className="text-blue-600 pl-3 text-xs hover:text-blue-800 break-all pr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {interviewLink}
            </a>
          </div>

          <button
            onClick={handleCopy}
            className="text-purple-600 hover:text-purple-800 p-1"
            title="Copy link"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <ClipboardCopy className="w-4 h-4" />
            )}
          </button>
        </div>

        <p className="text-gray-500 text-sm ">
          Share this link with the candidate to start the AI interview. Results
          will be available once completed.
        </p>
      </div>
      <button
        type="submit"
        className="w-[97.8%] py-1 m-2 bg-purple-700 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Send Email to Candidate
      </button>
      <button
      onClick={()=>navigate("/")}
        type="submit"
        className="w-[97.8%] py-1 m-2 bg-gray-200  rounded-xl hover:bg-gray-300 transition"
      >
        Close
      </button>
    </div>
  );
};

export default AiConfirmation;
