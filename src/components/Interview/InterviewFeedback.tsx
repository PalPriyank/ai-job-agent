import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

type CategoryScore = {
  name: string;
  score: number;
  comment: string;
};

type FeedbackData = {
  id: string;
  interviewId: string;
  userId: string;
  totalScore: number;
  categoryScores: CategoryScore[];
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
};

interface Props {
  feedback: FeedbackData;
}

const InterviewFeedbackWithChart: React.FC<Props> = ({ feedback }) => {
  feedback = { id: "X88H3oeyj9ji7dQO3gCD",
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
  return (
    <div className="relative max-w-5xl mx-auto p-6 bg-white rounded-xl shadow border border-gray-200 space-y-6">
      <header>
        <p className="text-2xl font-semibold text-purple-700">AI Interview Feedback Summary</p>
        <p className="text-sm text-gray-500 mt-1">Interview ID: {feedback.interviewId}</p>
        <p className="text-sm text-gray-500">User ID: {feedback.userId}</p>
      </header>
<div className="absolute top-2 right-5 border text-xs text-red-700 rounded-full p-2">
  X Close
</div>
      <section>
        <h2 className="text-lg font-medium text-gray-800">Total Score</h2>
        <div className="text-xl font-bold text-purple-600">{feedback.totalScore}/100</div>
      </section>

      <section className="w-full h-96">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Category Score Chart</h2>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={feedback.categoryScores}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Score" dataKey="score" stroke="#7e22ce" fill="#c084fc" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-800 mb-2">Category Feedback</h2>
        <div className="space-y-4">
          {feedback.categoryScores.map((cat) => (
            <div key={cat.name} className="bg-gray-50 p-4 rounded-md border">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold text-gray-700">{cat.name}</h3>
                <span className="text-sm font-medium text-purple-600">{cat.score}/100</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{cat.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-800 mb-2">Strengths</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
          {feedback.strengths.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-800 mb-2">Areas for Improvement</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
          {feedback.areasForImprovement.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-800 mb-2">Final Assessment</h2>
        <p className="text-sm text-gray-700">{feedback.finalAssessment}</p>
      </section>
    </div>
  );
};

export default InterviewFeedbackWithChart;
