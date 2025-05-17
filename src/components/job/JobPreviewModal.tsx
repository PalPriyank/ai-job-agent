import React, { useEffect, useState } from 'react';
import { XMarkIcon, PencilIcon, CheckIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
interface JobData {
  title: string;
  recommended_location: string;
  recommended_salary: string;
  job_description: string;
  roles_and_responsibilities: Array<string>;
  qualifications: Array<string>;
  skills: Array<string>;
  screener_questions: Array<string>;
}
type JobDescriptionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  jobData: JobData;
  openScreening :()=>void
};

const JobPreviewModal: React.FC<JobDescriptionModalProps> = ({ openScreening,isOpen, onClose, jobData }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const [title, setTitle] = useState(jobData.title);

  const [address, setAddress] = useState(jobData.recommended_location)
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState(
    jobData.job_description
  );
  const [responsibility, setResponsibility] = useState<Array<string>>(
  );

  const skills =showAllSkills ? jobData.skills : jobData.skills?.slice(0, 6) ?? []
  const handlePublishJob = async () => {
    onClose()
    openScreening()
    
  }

  useEffect(() => {
    setTitle(jobData.title);
    setAddress(jobData.recommended_location);
    setResponsibility(jobData.roles_and_responsibilities)
  }, [title])
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50  flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Header */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Job Description</h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Please review, edit, and approve this job description I wrote based on best practices.
            </p>

            {/* Job Title */}
            <div className="flex items-start justify-between mb-4">
              <div>
                {isEditingTitle ? (
                  <input
                    className="text-xl font-bold text-gray-900 border rounded p-1 w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                )}
                <p className="text-sm text-gray-600">Murdock & Nelson • {address}</p>
              </div>
              <button
                className="ml-2 text-purple-500"
                onClick={() => setIsEditingTitle(!isEditingTitle)}
              >
                {isEditingTitle ? <CheckIcon className="w-5 h-5" /> : <PencilIcon className="w-5 h-5" />}
              </button>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {(showAllSkills ? skills : skills.slice(0, 6)).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
                {skills.length > 6 && (
                  <button
                    className="text-sm text-purple-600 hover:underline"
                    onClick={() => setShowAllSkills(!showAllSkills)}
                  >
                    {showAllSkills ? 'show less' : '+ show more'}
                  </button>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Description</h4>
                <button
                  className="text-purple-500"
                  onClick={() => setIsEditingDesc(!isEditingDesc)}
                >
                  {isEditingDesc ? <CheckIcon className="w-4 h-4" /> : <PencilIcon className="w-4 h-4" />}
                </button>
              </div>
              {isEditingDesc ? (
                <textarea
                  className="w-full border rounded p-2 text-sm text-gray-700"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              ) : (
                <p className="text-sm text-gray-700 whitespace-pre-line">{description}</p>
              )}
            </div>
            {/* Roles and Responsibilities */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Role and Responsibility</h4>
                <button
                  className="text-purple-500"
                  onClick={() => setIsEditingDesc(!isEditingDesc)}
                >
                  {isEditingDesc ? <CheckIcon className="w-4 h-4" /> : <PencilIcon className="w-4 h-4" />}
                </button>
              </div>
              {
                responsibility?.map(item =>

                  <p className="text-sm text-gray-700 whitespace-pre-line">- {item}</p>
                )
              }
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button onClick={handlePublishJob} className="bg-purple-600 text-white px-4 py-2 w-full rounded-lg hover:bg-purple-700 transition">
                Approve Job Description
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobPreviewModal;
