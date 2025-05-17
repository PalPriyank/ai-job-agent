import React, { useEffect, useState } from 'react';
import ApplicatList from '../applicant/ApplicantList';
import JobPreview from '../JobPreview';
import LoaderModal from '../LoaderModal';
import { getJobByAccountId } from '../JobService';
import JobListSkeleton from './JobListSkeleton';
import PublishJob from '../job/PublishJob';
import ScreeningQuestions from '../job/ScreeningQuestions';
import JobInterviewsList from '../job/JobInterviewsList';
import { LocateIcon, MapIcon, MapPin } from 'lucide-react';

type ApplicantStatus = 'New' | 'Screening' | 'Interview' | 'Rejected';

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
    status: 'ACTIVE' | 'CLOSED' | 'EXPIRED';
    applicants: Applicant[];
}
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

const jobs: Job[] = [
    {
        jobId: '1',
        title: 'Senior Full Stack Engineer',
        company: 'Murdock & Nelson',
        location: 'New York, NY',
        updatedAt: '04/15/2025',
        status: 'ACTIVE',
        applicants: [
            {
                name: 'Alex Johnson',
                email: 'alex.johnson@example.com',
                matchScore: 92,
                status: 'Screening',
                appliedDate: '04/18/2025',
            },
            {
                name: 'Jamie Smith',
                email: 'jamie.smith@example.com',
                matchScore: 88,
                status: 'Interview',
                appliedDate: '04/17/2025',
            },
            {
                name: 'Taylor Wilson',
                email: 'taylor.wilson@example.com',
                matchScore: 78,
                status: 'New',
                appliedDate: '04/19/2025',
            },
            {
                name: 'Morgan Lee',
                email: 'morgan.lee@example.com',
                matchScore: 65,
                status: 'Rejected',
                appliedDate: '04/16/2025',
            },
        ],
    },
    {
        jobId: '2',
        title: 'Accounts Payable Specialist',
        company: 'Financial Services Inc.',
        location: 'New York, NY',
        updatedAt: '03/20/2025',
        status: 'CLOSED',
        applicants: [],
    },
    // Add more jobs...
];



const JobList: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>();
    const [activeTab, setActiveTab] = useState<'job' | 'applicants' | 'questions'|'interview'>('job');
    const [isLoading, setIsLoading] = useState(false);
    const [listLoading, setListLoading] = useState(false);
    const [jobList, setJobList] = useState<any>();
console.log('✌️jobList --->', jobList);
    const [isModalOpen, setModalOpen] = useState(false);
    const [screeningQuestions, setScreeningQuestions] = useState([
        {
            question: "What is multithreading?",
            options: [
                { id: 1, value: "A process that improves CPU performance" },
                { id: 2, value: "Maintaining a connection between a server and a client" },
                { id: 3, value: "A strict mode for specific functions or entire scripts" },
                { id: 4, value: "It allows clients to specify exactly what data they need" }
            ],
            answer: 1,
        },
        {
            question: "What is React used for?",
            options: [
                { id: 1, value: "Styling web pages" },
                { id: 2, value: "Handling server-side logic" },
                { id: 3, value: "Building user interfaces" },
                { id: 4, value: "Database management" }
            ],
            answer: 3,
        },
        {
            question: "What is multithreading?",
            options: [
                { id: 1, value: "A process that improves CPU performance" },
                { id: 2, value: "Maintaining a connection between a server and a client" },
                { id: 3, value: "A strict mode for specific functions or entire scripts" },
                { id: 4, value: "It allows clients to specify exactly what data they need" }
            ],
            answer: 1,
        },
        {
            question: "What is React used for?",
            options: [
                { id: 1, value: "Styling web pages" },
                { id: 2, value: "Handling server-side logic" },
                { id: 3, value: "Building user interfaces" },
                { id: 4, value: "Database management" }
            ],
            answer: 3,
        },
        {
            question: "What is multithreading?",
            options: [
                { id: 1, value: "A process that improves CPU performance" },
                { id: 2, value: "Maintaining a connection between a server and a client" },
                { id: 3, value: "A strict mode for specific functions or entire scripts" },
                { id: 4, value: "It allows clients to specify exactly what data they need" }
            ],
            answer: 1,
        },
        {
            question: "What is React used for?",
            options: [
                { id: 1, value: "Styling web pages" },
                { id: 2, value: "Handling server-side logic" },
                { id: 3, value: "Building user interfaces" },
                { id: 4, value: "Database management" }
            ],
            answer: 3,
        },
        {
            question: "What is multithreading?",
            options: [
                { id: 1, value: "A process that improves CPU performance" },
                { id: 2, value: "Maintaining a connection between a server and a client" },
                { id: 3, value: "A strict mode for specific functions or entire scripts" },
                { id: 4, value: "It allows clients to specify exactly what data they need" }
            ],
            answer: 1,
        },
        {
            question: "What is React used for?",
            options: [
                { id: 1, value: "Styling web pages" },
                { id: 2, value: "Handling server-side logic" },
                { id: 3, value: "Building user interfaces" },
                { id: 4, value: "Database management" }
            ],
            answer: 3,
        },
        {
            question: "What is multithreading?",
            options: [
                { id: 1, value: "A process that improves CPU performance" },
                { id: 2, value: "Maintaining a connection between a server and a client" },
                { id: 3, value: "A strict mode for specific functions or entire scripts" },
                { id: 4, value: "It allows clients to specify exactly what data they need" }
            ],
            answer: 1,
        },
        {
            question: "What is React used for?",
            options: [
                { id: 1, value: "Styling web pages" },
                { id: 2, value: "Handling server-side logic" },
                { id: 3, value: "Building user interfaces" },
                { id: 4, value: "Database management" }
            ],
            answer: 3,
        }
    ])
    const [selectedJobData, setSelectedJobData] = useState<jobData>(
        {
            title: "Frontend Developer",
            recommended_location: "Bangalore, India",
            recommended_salary: "$60,000 - $80,000 per year",
            job_description:
                "We are seeking a talented Frontend Developer to join our dynamic team in Bangalore. Our company specializes in cutting-edge technology solutions, and we are looking for someone passionate about building intuitive and responsive web applications.",
            roles_and_responsibilities: [
                "Develop and enhance user interfaces using modern frontend frameworks like React.js",
                "Work closely with UI/UX designers to implement design specifications",
                "Optimize web applications for maximum speed and scalability",
                "Collaborate with product and backend teams to deliver end-to-end solutions",
                "Maintain code quality and ensure application functionality",
            ],
            qualifications: [
                "Bachelor's Degree in Computer Science, Information Technology or a related field",
                "Proven experience of 2+ years in frontend development",
                "Experience working in agile development environments",
            ],
            skills: ["React", "JavaScript", "HTML", "CSS", "Redux"],
            screener_questions: [
                "What is your experience level with React.js and similar frontend technologies?",
                "Can you provide examples of how you have improved application performance in your previous projects?",
                "Describe a challenging project you worked on in frontend development and how you overcame it.",
                "What strategies do you use for troubleshooting and debugging frontend issues?",
                "How do you ensure cross-browser compatibility for your web applications?",
            ],
        }
    );
    const fethcJobList = async () => {
        try {
            setListLoading(true);
            const result = await getJobByAccountId();
            setJobList(result.data)
        } catch (error) {
            console.error("Error While fetching JOB list")
        } finally {
            setListLoading(false)
        }
    }
    useEffect(() => {
        fethcJobList();
    }, [])
    return (
        <div className="flex h-screen w-full font-sans">
            {/* Sidebar */}
            <aside className="w-[380px] bg-gray-100">
                <div className="flex justify-between text-white bg-[#3d2462] px-3 mr-1 pt-2 flex-col items-center">
                    <h2 className="text-xl mb-6  font-semibold">Jobs</h2>

                    <div className="w-full mb-3 flex gap-3">
                        <div className="text-sm px-3 aria-pressed:true border rounded-md ">All</div>
                        <div className="text-sm">Active</div>
                        <div className="text-sm">Closed</div>
                    </div>
                </div>
                <div className='overflow-y-auto p-2 h-[calc(100vh-100px)]'>
                    {listLoading ? <JobListSkeleton /> : jobList?.map((job: any) => (
                        <div
                            key={job.jobId}
                            className={`p-4 bg-white  shadow-md border-gray-200 mb-2 cursor-pointer overflow-y-auto ${selectedJob?.jobId === job.jobId ? 'bg-purple-50 border-l-4 border-purple-500' : ''
                                }`}
                            onClick={() => (setSelectedJob(job), setSelectedJobData(job), setActiveTab('job'))}
                        >
                            <div className="flex justify-between">
                                <div className='flex flex-col '>
                                    <p className="font-semibold text-md text-black">{job.jobPosting.title}</p>
                                    <p className="text-sm flex gap-1 items-center"><MapPin size={15}/>{job.jobPosting.jobLocation[0].address.description??"Newport Ave, Pawtucket, RI"}</p>
                                    <p className="text-xs ml-1 text-gray-500">Posted: {new Date(job.modifiedDate).toDateString()}</p>
                                    {/* <p className="text-xs text-gray-500">Id: {job.jobId}</p> */}
                                </div>
                                <span
                                    className={`text-[10px] px-2 py-1 rounded-full self-start ${job.jobStatus.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'
                                        }`}
                                >
                                    {job.jobStatus.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 pb-3 ">
                <div className="flex justify-end bg-[#3d2462] text-white pt-3 px-6 items-center">
                    {/* <h1 className="text-xl font-bold">{selectedJob.title}</h1> */}
                    <div onClick={() => setModalOpen(true)}
                        className="cursor-pointer  px-4 py-2 font-semibold border-2  rounded-full text-sm hover:bg-gray-200 hover:text-black" >
                        + Post a Job
                    </div>
                </div>

                {/* Tabs */}

                <div className="flex space-x-6 px-3 mb-2 text-white bg-[#3d2462] border-b">
                    <div
                        className={`p-2 border-b-4 ${activeTab === 'job' ? 'border-white font-medium' : 'border-transparent hover:border-white'}`}
                        onClick={() => setActiveTab('job')}
                    >
                        Job Details
                    </div>
                    <div className={`p-2 border-b-4 ${activeTab === 'questions' ? 'border-white font-medium' : 'border-transparent hover:border-white'}`}  onClick={() => setActiveTab('questions')}>Screening Questions</div>
                    <div
                        className={`p-2 border-b-4 ${activeTab === 'applicants' ? 'border-white font-medium' : 'border-transparent hover:border-white transition'}`}
                        onClick={() => setActiveTab('applicants')}
                    >
                        Applicants
                    </div>
                    <div
                        className={`p-2 border-b-4 ${activeTab === 'interview' ? 'border-white font-medium' : 'border-transparent hover:border-white transition'}`}
                        onClick={() => setActiveTab('interview')}
                    >
                        Interviews
                    </div>
                </div>
                <div className='overflow-y-auto mx-6 h-5/6'>
                    {activeTab === 'job' && (isLoading ? <LoaderModal /> : <JobPreview jobData={selectedJobData} />)}
                    {activeTab === 'applicants' && <ApplicatList selectedJob={selectedJob} />}
                    {activeTab === 'questions' && <ScreeningQuestions  questions={screeningQuestions} />}
                    {activeTab === 'interview' && <JobInterviewsList/>}
                </div>
          <PublishJob isLoading={isLoading} fetchJob={fethcJobList} isModalOpen={isModalOpen} setModalOpen={setModalOpen} selectedJobData={selectedJobData} setIsLoading={setIsLoading} setSelectedJobData={setSelectedJobData} />
            </main>
        </div>
    );
};

export default JobList;
