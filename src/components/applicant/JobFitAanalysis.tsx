import React from "react";
import { motion } from "framer-motion";

type ScoreCardProps = {
  label: string;
  value: number;
  color: string;
};

const ScoreCard: React.FC<ScoreCardProps> = ({ label, value, color }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 border rounded-xl shadow-sm bg-white">
      <svg className="w-20 h-20 mb-2" viewBox="0 0 80 80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="16"
          className="font-semibold fill-gray-800"
        >
          {value}%
        </text>
      </svg>
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
};

const JobFitAnalysis: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white p-3 rounded-2xl">
      

      

      {/* Scores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <ScoreCard label="Skills Match" value={92} color="#a855f7" />
        <ScoreCard label="Experience Match" value={88} color="#3b82f6" />
        <ScoreCard label="Culture Fit" value={85} color="#22c55e" />
      </div>

      {/* Recommendation */}
      <div className="p-4 bg-gray-50 border rounded-xl">
        <p className="text-sm font-medium text-gray-800 mb-1">Overall Recommendation</p>
        <p className="text-green-600 font-semibold text-sm">
          ● Strong match{" "}
          <span className="text-gray-500 font-normal"> - Recommended to advance</span>
        </p>
      </div>
    </div>
  );
};

export default JobFitAnalysis;
