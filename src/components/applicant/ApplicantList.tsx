import React, { useEffect, useState } from "react";
import { Ellipsis, EllipsisVertical, Eye, Mail, Option, Phone, SlidersHorizontal } from "lucide-react";
import FilterApplicantsModal from "./FilterApplicantsModal";
import { getApplicantByJobId } from "./applicantService";
import ApplicantAnalysis from "./ApplicantCard";
import ApplicantListSkeleton from "./ApplicantListSkeleton";
import { useNavigate } from "react-router-dom";
type ApplicantStatus = "New" | "Screening" | "Interview" | "Rejected";
interface Applicant {
  name: string;
  email: string;
  matchScore: number;
  status: ApplicantStatus;
  appliedDate: string;
}
interface Job {
  jobId: string;
  title: string;
  company: string;
  location: string;
  updatedAt: string;
  status: "ACTIVE" | "CLOSED" | "EXPIRED";
  applicants: Applicant[];
}
interface Props {
  selectedJob: Job | null | undefined;
}
const statusColors: Record<ApplicantStatus, string> = {
  New: "bg-blue-100 text-blue-700",
  Screening: "bg-yellow-100 text-yellow-700",
  Interview: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};
const ApplicatList: React.FC<Props> = ({ selectedJob }) => {
  const navigate = useNavigate();

  const count = 0;
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [viewAnalysis, setViewAnalysis] = useState(false);
  const [applicantList, setApplicantList] = useState([]);
  const dummyApplicants = [
    {
        name :"John Alex",
        email : "jalex@monster.com",
        matchScore:56,
        status : "Screening",
        applyDate : '2025 12 03',

    },
    {
        name :"Rober D. Junior",
        email : "rdjunior@monster.com",
        matchScore:96,
        status : "Rejected",
        applyDate : '2025 02 11',

    },
    {
        name :"Chrish Hemsworth",
        email : "chemsowrth@monster.com",
        matchScore:36,
        status : "New",
        applyDate : '2025 03 14',

    }
  ]
  const [applicantLoader, setApplicantLoader] = useState<boolean>(false);
  const fetchApplicantList = async () => {
    try {
      setApplicantLoader(true);
      const response = await getApplicantByJobId(selectedJob?.jobId ?? "");
      setApplicantList(response.data);
    } catch (error) {
      console.error("Error fetching Applicants ", error);
    } finally {
      setApplicantLoader(false);
    }
  };
  useEffect(() => {
    fetchApplicantList();
  }, []);
  return (
    <div>
      <ApplicantAnalysis
        isOpen={viewAnalysis}
        onClose={() => setViewAnalysis(false)}
      />
      <FilterApplicantsModal
        isOpen={isFilterModalOpen}
        onClose={() => setFilterModalOpen(false)}
      />
      {applicantLoader ? (
        <ApplicantListSkeleton />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-4">
              {[...dummyApplicants,...applicantList].length } candidate
              {selectedJob?.applicants?.length !== 1 && "s"} have applied
            </h2>
            <button
              onClick={() => setFilterModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100"
            >
              <SlidersHorizontal size={16} className="text-gray-600" />
              <span>Filters</span>
              {count > 0 && (
                <span className="bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {count}
                </span>
              )}
            </button>
          </div>
          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead className="text-left bg-gray-100">
              <tr className="text-sm text-gray-700">
                <th className="p-3">Name</th>
                <th className="p-3">Match Score</th>
                <th className="p-3">Status</th>
                <th className="p-3">Applied Date</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...dummyApplicants,...applicantList]?.map((applicant: any, index) => (
                <tr key={index} className="text-sm border-b">
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center font-bold uppercase">
                        {applicant.user?.firstName[0] ?? applicant?.name[0]}
                      </div>
                      <div>
                        <div className="font-medium">
                          {applicant?.user?.firstName ??applicant.name} {applicant?.user?.lastName}
                        </div>
                        <div className="text-xs text-gray-500">
                          {applicant.email ?? "akumar@monster.com"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex flex-col space-x-1">
                      <div className="flex items-center justify-between  w-[100px]">
                        <span className="font-semibold">
                          {applicant.matchScore ?? 74}%
                        </span>
                        <button onClick={() => setViewAnalysis(true)}>
                          <Eye size={18} />
                        </button>
                      </div>
                      <div className="w-24 h-2 bg-gray-200 rounded">
                        <div
                          className={`h-2 rounded ${
                            applicant.matchScore  > 85
                              ? "bg-green-500"
                              : applicant.matchScore ?? 74 > 70
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${applicant.matchScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        statusColors[
                          (applicant.status ?? "Screening") as ApplicantStatus
                        ]
                      }`}
                    >
                      {applicant.status ?? "Screening"}
                    </span>
                  </td>
                  <td className="p-3">
                    {new Date(applicant.applyDate).toDateString()}
                  </td>
                  <td className="p-3 space-x-3 text-gray-500">
                    {/* <button>
                      <Eye size={18} />
                    </button> */}
                    <button>
                      <Mail size={18} />
                    </button>
                    <button><Phone size={18} /></button>
                    <button className="relative group font-extrabold">
                      <EllipsisVertical size={20}/>
                      <div className="absolute hidden group-hover:block bg-white border shadow-md rounded-md p-2 right-0 mt-2 z-10">
                        <button
                          onClick={() =>
                            navigate("/interview", {
                              state: { applicant, selectedJob },
                            })
                          }
                          className="block text-sm px-4 py-1 hover:bg-gray-100 w-full text-left"
                        >
                          Schedule Interview
                        </button>
                        <button className="block text-sm px-4 py-1 hover:bg-gray-100 w-full text-left">
                          Add Note
                        </button>
                        <button className="block text-sm px-4 py-1 hover:bg-red-100 text-red-600 w-full text-left">
                          Reject
                        </button>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ApplicatList;
