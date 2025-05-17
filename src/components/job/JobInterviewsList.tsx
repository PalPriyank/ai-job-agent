import { useState } from "react";
import InterviewFeedback from "../Interview/InterviewFeedback";
import { Eye } from "lucide-react";
// type Interview = {
//   id?: string;
//   name: string;
//   role: string;
//   type: string;
//   level?: string;
//   techstack?: Array<string>;
//   questions?: any;
//   userId?: string;
//   jobId?: string;
//   finalized: boolean;
//   coverImage?: string;
//   createdAt: string;
// };
const JobInterviewsList = () => {
  const interviewList = [
    {
      name: "Ashish Kumar",
      role: "Sales Representative",
      type: "Technical",
      finalized: true,
      createdAt: "2025 05 13",
    },
    {
      name: "Ashish Kumar",
      role: "Sales Representative",
      type: "Technical",
      finalized: true,
      createdAt: "2025 05 13",
    },
    {
      name: "Ashish Kumar",
      role: "Sales Representative",
      type: "Technical",
      finalized: true,
      createdAt: "2025 05 13",
    },
    {
      name: "Ashish Kumar",
      role: "Sales Representative",
      type: "Technical",
      finalized: true,
      createdAt: "2025 05 13",
    },
  ]
  const interviewFeedbackData = {
    id: "X88H3oeyj9ji7dQO3gCD",
    interviewId: "jakUrzTAP8e6HPjh3gzi",
    userId: "8KRW6MBfIZXL7xntyhtm1GzSwAE3",
    totalScore: 30,
    categoryScores: [
      {
        name: "Communication Skills",
        score: 50,
        comment:
          "The candidate's communication was adequate but lacked detail and specific examples. Responses were often short and not well-structured.",
      },
      {
        name: "Technical Knowledge",
        score: 20,
        comment:
          "The candidate demonstrated a limited understanding of Next.js concepts such as data fetching methods (getStaticProps, getServerSideProps, getStaticPaths) and specific optimization techniques. They couldn't provide concrete examples of their experience.",
      },
      {
        name: "Problem Solving",
        score: 30,
        comment:
          "The candidate struggled to articulate specific challenges faced and solutions implemented, indicating a potential weakness in problem-solving or the ability to explain their problem-solving process.",
      },
      {
        name: "Cultural Fit",
        score: 40,
        comment:
          "The candidate mentioned collaborating with other developers, which is a positive sign. However, the lack of enthusiasm and detail makes it difficult to fully assess cultural fit.",
      },
      {
        name: "Confidence and Clarity",
        score: 10,
        comment:
          "The candidate lacked confidence and clarity in their responses. They frequently stated they had no experience or couldn't recall specific examples, which significantly impacted their overall presentation.",
      },
    ],
    strengths: ["Experience with peer code review."],
    areasForImprovement: [
      "Deepen technical knowledge of Next.js and front-end optimization techniques.",
      "Practice articulating problem-solving approaches with specific examples.",
      "Improve confidence and clarity in communication.",
    ],
    finalAssessment:
      "The candidate demonstrated limited technical knowledge and struggled to provide specific examples of their experience with Next.js. Significant improvement is needed in technical skills, problem-solving articulation, and confidence.",
  }
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  return (
    <div>
      {showFeedback ? (
        <InterviewFeedback feedback={interviewFeedbackData} />
      ) : (
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead className="text-left bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Interview Date</th>
              <th className="p-3">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {interviewList?.map((interview: any, index) => (
              <tr key={index} className="text-sm border-b">
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center font-bold uppercase">
                      {interview.name[0]}
                    </div>

                    <div>
                      <div className="font-medium">{interview.name}</div>
                      <div className="text-xs text-gray-500">
                        {interview.email ?? "akumar@monster.com"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    {interview.role}
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`text-xs font-semibold px-2 py-1 ${
                      interview.finalized ? "text-green-600" : "text-yellow-500"
                    } rounded-full`}
                  >
                    {interview.finalized ? "Completed" : "Pending"}
                  </span>
                </td>
                <td className="p-3">
                  {new Date(interview.createdAt).toDateString()}
                </td>
                <td className="p-3 space-x-3 text-gray-900">
                  <button
                    className="flex gap-3 "
                    onClick={() => setShowFeedback(true)}
                    disabled={!interview.finalized}
                  >
                    <Eye size={18} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default JobInterviewsList;
