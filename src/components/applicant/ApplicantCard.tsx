import React, { useState } from "react";
import JobFitAnalysis from "./JobFitAanalysis"
import ApplicantSummary from "./ApplicantSummary";


interface analysisProps {
    onClose: () => void;
    isOpen: boolean
}

type tabOptions = "Summary" | "Job Fit"
const ApplicantAnalysis: React.FC<analysisProps> = ({ onClose, isOpen }) => {
    const [selctedtab, setSelectedTab] = useState<tabOptions>("Summary")

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50  z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl w-full max-w-4xl shadow-2xl relative overflow-x-hidden">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold mb-4">AI Analysis: Alex Johnson</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl font-bold">&times;</button>
                </div>
                {/* Tabs */}
                <div className="flex gap-4 border-b mb-6">
                    {["Summary","Job Fit"].map(
                        (tab, i) => (
                            <div
                                key={i}
                                onClick={()=>setSelectedTab(tab as tabOptions)}
                                className={`px-4 py-2 cursor-pointer text-md font-medium ${tab === selctedtab
                                    ? "text-purple-700 "
                                    : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {tab}
                            </div>
                        )
                    )}
                </div>
                {selctedtab == "Summary" ?
                    <ApplicantSummary />
                    : <JobFitAnalysis />}

            </div>
        </div>)
}
export default ApplicantAnalysis;