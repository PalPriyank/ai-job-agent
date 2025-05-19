import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";

interface Evaluation {
  feedback: string;
  score: number;
}

interface QuestionAnswer {
  question: string;
  answer_text_area: string;
  evaluation: Evaluation;
  question_type: string;
  question_index: number;
}

interface HrEvaluation {
  analysis: string;
  communication_feedback: string;
  communication_score: number;
  energy_feedback: string;
  energy_score: number;
  overall_score: number;
  professionalism_feedback: string;
  professionalism_score: number;
  sociability_feedback: string;
  sociability_score: number;
}

interface Props {
  hr_evaluation: HrEvaluation;
  questions_answers: Record<string, QuestionAnswer>;
}

const ScoreBadge = ({ score }: { score: number }) => {
  const colors = {
    1: "bg-red-500",
    2: "bg-orange-400",
    3: "bg-yellow-400",
    4: "bg-green-400",
    5: "bg-green-600",
  };
  return (
    <span
      className={`text-white text-sm px-2 py-1 rounded-full ${
        colors[score as keyof typeof colors]
      }`}
    >
      Score: {score}
    </span>
  );
};
declare module "jspdf" {
  interface jsPDF {
    lastAutoTable?: { finalY: number };
  }
}

const CandidateEvaluation: React.FC<Props> = ({
  hr_evaluation,
  questions_answers,
}) => {
  const chartData = [
    { category: "Communication", score: hr_evaluation.communication_score },
    { category: "Energy", score: hr_evaluation.energy_score },
    { category: "Professionalism", score: hr_evaluation.professionalism_score },
    { category: "Sociability", score: hr_evaluation.sociability_score },
    { category: "Overall", score: hr_evaluation.overall_score },
  ];

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Candidate Evaluation Summary", 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [["Category", "Score"]],
      body: chartData.map((item) => [item.category, item.score.toString()]),
    });

    autoTable(doc, {
      startY: doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 40,
      head: [["Q#", "Question", "Answer", "Feedback", "Score"]],
      body: Object.values(questions_answers).map((qa) => [
        `Q${qa.question_index + 1}`,
        qa.question,
        qa.answer_text_area,
        qa.evaluation.feedback,
        qa.evaluation.score.toString(),
      ]),
    });

    doc.save("candidate_evaluation.pdf");
  };

  const handleDownloadCSV = () => {
    let csv = "Category,Score\n";
    csv += chartData.map((item) => `${item.category},${item.score}`).join("\n");
    csv += "\n\nQ#,Question,Answer,Feedback,Score\n";
    csv += Object.values(questions_answers)
      .map(
        (qa) =>
          `Q${qa.question_index + 1},"${qa.question}","${
            qa.answer_text_area
          }","${qa.evaluation.feedback}",${qa.evaluation.score}`
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "candidate_evaluation.csv");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 space-y-8 bg-gray-200"
    >
      <div className="flex justify-end gap-4">
        <Button onClick={handleDownloadPDF}><Download size={18}/> PDF</Button>
        {/* <Button onClick={handleDownloadCSV} variant="outline">
          Download CSV
        </Button> */}
      </div>

      {/* HR Evaluation Summary */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white shadow rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          HR Evaluation Summary
        </h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Analysis:</strong> {hr_evaluation.analysis}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Communication:</strong>{" "}
                {hr_evaluation.communication_feedback}
              </p>
              <ScoreBadge score={hr_evaluation.communication_score} />
            </div>
            <div>
              <p>
                <strong>Energy:</strong> {hr_evaluation.energy_feedback}
              </p>
              <ScoreBadge score={hr_evaluation.energy_score} />
            </div>
            <div>
              <p>
                <strong>Professionalism:</strong>{" "}
                {hr_evaluation.professionalism_feedback}
              </p>
              <ScoreBadge score={hr_evaluation.professionalism_score} />
            </div>
            <div>
              <p>
                <strong>Sociability:</strong>{" "}
                {hr_evaluation.sociability_feedback}
              </p>
              <ScoreBadge score={hr_evaluation.sociability_score} />
            </div>
          </div>
          <div>
            <p className="font-semibold">Overall Score:</p>
            <ScoreBadge score={hr_evaluation.overall_score} />
          </div>
        </div>
      </motion.div>

      {/* Score Chart */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white shadow rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Score Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="category" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Questions and Answers */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white shadow rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Interview Questions & Feedback
        </h2>
        <div className="space-y-6">
          {Object.values(questions_answers).map((qa, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "#f9fafb" }}
              className="border-t pt-4"
            >
              <p className="text-gray-800 font-medium">
                Q{qa.question_index + 1} ({qa.question_type}): {qa.question}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Answer:</strong> {qa.answer_text_area}
              </p>
              <p className="mt-1 text-gray-600">
                <strong>Feedback:</strong> {qa.evaluation.feedback}
              </p>
              <div className="mt-2">
                <ScoreBadge score={qa.evaluation.score} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CandidateEvaluation;
