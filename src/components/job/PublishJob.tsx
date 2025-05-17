import React, { useState } from "react";
import JobQuestionsModal from "./JobQuestionsModal";
import JobPreviewModal from "./JobPreviewModal";
import JobModal from "./JobModal";
import LoaderModal from "../LoaderModal";

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
interface props {
    setSelectedJobData: React.Dispatch<React.SetStateAction<jobData>>,
    selectedJobData: jobData
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isLoading:boolean;
    isModalOpen: boolean, setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    fetchJob:() => Promise<void>
}
const PublishJob: React.FC<props> = ({ selectedJobData,fetchJob,isLoading, setIsLoading, setSelectedJobData,isModalOpen,setModalOpen }) => {
    const [isPreviewOpen, setIsPreview] = useState(false);

    const [questionModal, setQuestionModal] = useState(false);
    const screeningQuestions = [
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
    ]
    return (
        <div>
            <JobQuestionsModal fetchjob={fetchJob} selectedJob={selectedJobData} isOpen={questionModal} onClose={() => setQuestionModal(false)} questions={screeningQuestions} />
            {isPreviewOpen&&<JobPreviewModal openScreening={()=>setQuestionModal(true)} isOpen={isPreviewOpen} onClose={() => setIsPreview(false)} jobData={selectedJobData} />}
           { isLoading?<LoaderModal/>:<JobModal openPreview={()=>setIsPreview(true)} setJobData={setSelectedJobData} isLoading={setIsLoading} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}
        </div>
    )
}

export default PublishJob;