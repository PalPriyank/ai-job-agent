import { useLocation } from "react-router-dom";
import AiInterview from "./AiINterview";
import AiQuestions from "./AiQuesrtions";
import { useState } from "react";
import AiConfirmation from "./AiConfirmation";
import {
  createInterview,
  generateInterviewQuestions,
} from "./InterviewService";
import AiProcessingLoader from "./AiProcessingLoader";
type InterviewData = {
  id: string;
  [key: string]: any; // <-- Allows any other fields
};
const Interview = () => {
  const location = useLocation();
  const data = location.state;
  const [questionLoader, setQuestionLoader] = useState(false);
  const [questions, setQuestions] = useState<Array<string>>([]);
  const [showQuesions, setShowQuesions] = useState(false);
  const [showDetails, setShowDeatails] = useState(false);
  const [jobPosition, setJobPosition] = useState(data?.applicant.job.title);
  const [experienceRange, setExperienceRange] = useState("3-5 years");
  const [interviewTypes, setInterviewTypes] = useState<string[]>(["Technical"]);
  const [expirationDate, setExpirationDate] = useState("2025-01-05");
  const [interviewData, setInterviewData] = useState<InterviewData | null>();
  const handleEdit = (id: string) => {
    alert(`Edit question ${id}`);
  };

  const handleDelete = (id: string) => {
    setQuestions((prev) =>
      prev.filter((q, index) => (index as unknown as string)||q!== id)
    );
  };
  const handleGenerateQuestions = async () => {
    try {
      setQuestionLoader(true);
      const response = await generateInterviewQuestions({
        type: interviewTypes[0],
        role: jobPosition,
        level: "senior",
        techStack: ["React", "javascript", "HTML", "CSS"],
        amount: 5,
      });
      setQuestions(response.data.questions);
      setShowQuesions(true);
    } catch (error) {
      console.error("Error while generating interview question ", error);
    } finally {
      setQuestionLoader(false);
    }
  };
  const handleCreateInterview = async () => {
    try {
      const response = await createInterview({
        type: interviewTypes[0],
        role: jobPosition,
        level: "senior",
        techstack: ["React", "javascript", "HTML", "CSS"],
        amount: 5,
        userid: data.applicant.user.userId,
        jobid: data.applicant.job.jobId,
        name: `${data.applicant.user.firstName} ${data.applicant.user.lastName}`,
        questions,
      });
      setShowDeatails(true);
      console.log("✌️response --->", response);
      setInterviewData(response.data.interview);
    } catch (error) {
      console.error("Error while generating interview question ", error);
    }
  };
  return (
    <div className="max-w-3xl my-3 mx-auto p-6 border bg-white rounded-2xl ">
      
      <p className="font-semibold">
        Schedule Interview :{" "}
        {`${data.applicant.user.firstName} ${data.applicant.user.lastName}`}
      </p>
      <div className="flex items-center mb-4">
        <div className="text-gray-500 flex-1 bg-gray-200 px-4 py-2 rounded-lg text-center font-medium">
          Human Recruiter
        </div>
        <div className="bg-purple-500 flex-1 text-center text-white px-4 py-2 rounded-lg font-medium">
          AI Recruiter
        </div>
      </div>
      {questionLoader ? <AiProcessingLoader />:!showQuesions ? (
        <AiInterview
          experienceRange={experienceRange}
          expirationDate={expirationDate}
          interviewTypes={interviewTypes}
          jobPosition={jobPosition}
          setExperienceRange={setExperienceRange}
          setExpirationDate={setExpirationDate}
          setInterviewTypes={setInterviewTypes}
          setJobPosition={setJobPosition}
          setShowQuesions={() => setShowQuesions(true)}
          applicantData={data.applicant}
          handleGenerateQuestions={() => handleGenerateQuestions()}
        />
      ) : showDetails ? (
        <AiConfirmation
          experienceRange={experienceRange}
          expirationDate={expirationDate}
          interviewTypes={interviewTypes}
          interviewLink={`https://ai-interviewer-livid.vercel.app/interview/${interviewData?.id}`}
          position={jobPosition}
          questionCount={questions.length}
          candidateEmail="abc@ama"
          candidateName={`${data.applicant.user.firstName} ${data.applicant.user.lastName}`}
        />
      ) : (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-semibold text-purple-700">
              AI Generated Questions
            </p>
            <span className="text-sm text-purple-500 bg-purple-100 px-3 py-1 rounded-full">
              {questions.length} Questions
            </span>
          </div>

          <div className="grid  gap-4">
            {questions.map((q, index) => (
              <AiQuestions
                key={index}
                id={index as unknown as string}
                question={q}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
          <div className="flex  mt-5 justify-between">
            <button className="text-purple-500 font-semibold">Cancel</button>
            <button
              onClick={handleCreateInterview}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              Create Interview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interview;
