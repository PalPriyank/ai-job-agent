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
      finalized: false,
      createdAt: "2025 05 13",
    },
    {
      name: "Ashish Kumar",
      role: "Sales Representative",
      type: "Technical",
      finalized: false,
      createdAt: "2025 05 13",
    },
    {
      name: "Ashish Kumar",
      role: "Sales Representative",
      type: "Technical",
      finalized: false,
      createdAt: "2025 05 13",
    },
  ];
  const interviewFeedbackData = {
    hr_evaluation: {
      analysis:
        "The candidate's performance in the interview was extremely poor. Their responses were dismissive and unprofessional, showing a lack of interest in the role and a disregard for the interview process. The candidate did not demonstrate any of the skills or qualifications listed on their resume, such as experience with CRM systems or a commitment to customer service. Their lack of effort to engage in the interview process raises serious concerns about their suitability for the role.",
      communication_feedback:
        "The candidate's communication was poor. Their responses were not clear or articulate, and they did not demonstrate the ability to structure their thoughts or convey information logically. The candidate's language proficiency and vocabulary were lacking, and they were unable to explain even basic concepts.",
      communication_score: 2,
      energy_feedback:
        "The candidate showed a lack of enthusiasm and engagement during the interview. Their responses did not demonstrate any passion for the role or the industry. The candidate's level of dynamism and motivation was extremely low, as evidenced by their dismissive responses.",
      energy_score: 2,
      overall_score: 2,
      professionalism_feedback:
        "The candidate's responses were unprofessional and lacked any semblance of workplace behavior and ethics. Their dismissive responses and lack of effort to engage in the interview process reflect poorly on their professional demeanor and conduct. The candidate did not adhere to professional standards during the interview.",
      professionalism_score: 2,
      sociability_feedback:
        "The candidate did not demonstrate any effort to build rapport or show interpersonal skills. Their responses were dismissive and lacked any attempt to connect with the interviewer or show social awareness. The candidate did not display any friendliness, openness, or approachability.",
      sociability_score: 2,
    },
    questions_answers: {
      "0": {
        answer_text_area: "Don't have any idea",
        clarifications: null,
        evaluation: {
          feedback:
            "The candidate's response does not address the question at all. The question asked for a specific example of handling a difficult customer request, but the candidate simply stated they have no idea. This does not demonstrate any relevant skills or alignment with the job requirements, which include ensuring customer satisfaction and managing customer communications.",
          score: 1,
        },
        question:
          "Can you describe a time when you had to handle a particularly difficult customer request at BrightConnect Communications, and how you ensured customer satisfaction?",
        question_index: 0,
        question_timestamp: "2025-05-18T16:39:28.722378",
        question_type: "behavioral",
        submit_timestamp: "2025-05-18T16:40:51.745108",
        video_filename: null,
        video_path: null,
        video_submit: false,
        video_transcript: null,
      },
      "1": {
        answer_text_area: "No idea about CRM systems",
        clarifications: null,
        evaluation: {
          feedback:
            "The candidate's response does not address the question at all. The question asked about their experience with Salesforce CRM, but the candidate stated they have no idea about CRM systems. This shows a lack of relevant skills and does not align with the job requirements.",
          score: 1,
        },
        question:
          "You mentioned that you have experience with CRM Systems. Can you share how you utilized Salesforce CRM at BrightConnect Communications to track customer interactions and follow-ups?",
        question_index: 1,
        question_timestamp: "2025-05-18T16:40:51.758201",
        question_type: "technical",
        submit_timestamp: "2025-05-18T16:41:04.921650",
        video_filename: null,
        video_path: null,
        video_submit: false,
        video_transcript: null,
      },
      "2": {
        answer_text_area: "No idea",
        clarifications: null,
        evaluation: {
          feedback:
            "The candidate's response does not address the question at all. The question asked about their role at BrightConnect Communications and how they managed to exceed their KPIs. However, the candidate responded with 'No idea', which shows a lack of understanding or willingness to engage with the question. This response does not demonstrate any relevant skills or alignment with the job requirements.",
          score: 1,
        },
        question:
          "In your role at BrightConnect Communications, you were recognized as 'Top Performer of the Quarter' for exceeding KPI goals. Can you share more about the KPIs you were responsible for and how you managed to exceed them?",
        question_index: 2,
        question_timestamp: "2025-05-18T16:41:04.932472",
        question_type: "technical",
        submit_timestamp: "2025-05-18T16:41:12.222326",
        video_filename: null,
        video_path: null,
        video_submit: false,
        video_transcript: null,
      },
      "3": {
        answer_text_area: "Not encounter any such situation",
        clarifications: null,
        evaluation: {
          feedback:
            "The candidate's response does not address the question asked. The question was about a specific experience dealing with customer complaints in collaboration with department managers, but the candidate stated they have not encountered such a situation. This does not demonstrate the necessary skills for the customer service representative role, which requires handling customer complaints and coordinating with other team members. The candidate should provide examples of similar experiences if they do not have the exact experience asked in the question.",
          score: 1,
        },
        question:
          "At Target, you collaborated with department managers to resolve customer complaints. Can you share an example of a significant complaint you resolved and how you worked with the department managers?",
        question_index: 3,
        question_timestamp: "2025-05-18T16:41:12.233814",
        question_type: "behavioral",
        submit_timestamp: "2025-05-18T16:41:31.674485",
        video_filename: null,
        video_path: null,
        video_submit: false,
        video_transcript: null,
      },
      "4": {
        answer_text_area: "No",
        clarifications: null,
        evaluation: {
          feedback:
            "The candidate's response is not relevant to the question asked. The question was about how they would approach quoting machine repairs, especially without a technical background. However, the candidate simply responded with 'No', which does not provide any insight into their skills, experience, or approach to the task. It would be beneficial for the candidate to provide a more detailed response, explaining how they would handle the situation, what strategies they might use, and how their past experiences might aid them in this task.",
          score: 1,
        },
        question:
          "In the role at Yancey Bros. Co., you will be required to quote machine repairs. Based on your experience, how would you approach this task, especially considering you might not have a technical background in machine repairs?",
        question_index: 4,
        question_timestamp: "2025-05-18T16:41:31.684412",
        question_type: "technical",
        submit_timestamp: "2025-05-18T16:41:36.947741",
        video_filename: null,
        video_path: null,
        video_submit: false,
        video_transcript: null,
      },
    },
  };
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  return (
    <div>
      {showFeedback ? (
        <InterviewFeedback
          hr_evaluation={interviewFeedbackData.hr_evaluation}
          questions_answers={interviewFeedbackData.questions_answers}
        />
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
