import React, { useState } from "react";
import { XMarkIcon, PencilIcon, CheckIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { publishJob } from "../JobService";

type Option = {
  id: number;
  value: string;
};

type Question = {
  question: string;
  options: Option[];
  answer: number;
};
interface jobData {
  title: string;
  recommended_location: string;
  recommended_salary: string;
  job_description: string;
  roles_and_responsibilities: Array<string>;
  qualifications: Array<string>;
  skills: Array<string>;
  screener_questions: Array<string>;
}
type Props = {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  selectedJob: jobData;
  fetchjob: () => Promise<void>;
};

const JobQuestionsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  questions: initialQuestions,
  selectedJob,
  fetchjob,
}) => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [editing, setEditing] = useState<{
    qIndex: number;
    oIndex: number;
  } | null>(null);

  const markCorrect = (qIndex: number, optionId: number) => {
    const updated = [...questions];
    updated[qIndex].answer = optionId;
    setQuestions(updated);
  };

  const updateOptionValue = (qIndex: number, oIndex: number, value: string) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex].value = value;
    setQuestions(updated);
  };
  const [loader, setLoader] = useState(false);
  const handlePublishJob = async () => {
    try {
      setLoader(true);
      onClose();
      const publishedJob = await publishJob(
        selectedJob?.title,
        selectedJob.skills,
        selectedJob.recommended_location,
        selectedJob.job_description
      );
      console.log("✌️publishedJob --->", publishedJob);
      fetchjob();
    } catch (error) {
      console.error("Error while publishing job ", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-lg relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Header */}
            <h2 className="text-xl font-bold mb-1 text-gray-800 text-center">
              Screening Questions
            </h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Please review, edit, and approve these questions to qualify ideal
              candidates.
            </p>

            {/* Questions List */}
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="mb-6 border rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-md font-semibold">
                    Question {qIndex + 1}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-800">{q.question}</p>

                {/* Options */}
                {q.options.map((opt, oIndex) => {
                  const isCorrect = opt.id === q.answer;
                  const isEditing =
                    editing?.qIndex === qIndex && editing?.oIndex === oIndex;

                  return (
                    <div
                      key={opt.id}
                      className={`flex items-center justify-between border rounded-lg px-4 py-2 mb-2 ${
                        isCorrect
                          ? "border-green-400 bg-green-50"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border border-gray-400" />
                        {isEditing ? (
                          <input
                            value={opt.value}
                            onChange={(e) =>
                              updateOptionValue(qIndex, oIndex, e.target.value)
                            }
                            onBlur={() => setEditing(null)}
                            className="text-sm text-gray-700 border-b border-gray-300 focus:outline-none"
                            autoFocus
                          />
                        ) : (
                          <span className="text-sm text-gray-800">
                            {opt.value}
                          </span>
                        )}

                        {isCorrect && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            Correct Answer
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 items-center">
                        {!isCorrect && (
                          <button
                            className="text-xs text-gray-500 hover:text-green-600"
                            onClick={() => markCorrect(qIndex, opt.id)}
                          >
                            Mark Correct
                          </button>
                        )}
                        <button
                          onClick={() =>
                            isEditing
                              ? setEditing(null)
                              : setEditing({ qIndex, oIndex })
                          }
                          className="text-purple-500"
                        >
                          {isEditing ? (
                            <CheckIcon className="w-4 h-4" />
                          ) : (
                            <PencilIcon className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Footer */}
            <div className="flex justify-end mt-4">
              <button
                disabled={loader}
                onClick={handlePublishJob}
                className="bg-purple-600 text-white px-4 py-2 w-full rounded-lg hover:bg-purple-700"
              >
                {loader?"Publishing Job ...":"Approve Screening Questions"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobQuestionsModal;
