import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

const ApplicantSummary: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-3 rounded-2xl">
            {/* Tabs */}

            {/* Summary message */}
            <div className="p-4 bg-violet-50 text-gray-800 rounded-lg text-lg mb-6">
                Strong technical background with excellent problem-solving skills.
                Experience aligns well with the role requirements.
            </div>

            {/* Strengths & Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Strengths */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                    <h3 className="flex items-center text-green-700 font-semibold mb-3">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                        Strengths
                    </h3>
                    <ul className="space-y-1 text-gray-900 pl-6 list-disc list-inside">
                        <li>Full stack development</li>
                        <li>System architecture</li>
                        <li>Team leadership</li>
                    </ul>
                </div>

                {/* Areas for Consideration */}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                    <h3 className="flex items-center text-orange-700 font-semibold mb-3">
                        <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                        Areas for Consideration
                    </h3>
                    <ul className="space-y-1 text-gray-900 pl-6 list-disc list-inside">
                        <li>Limited cloud experience</li>
                        <li>No enterprise-scale projects</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ApplicantSummary;
