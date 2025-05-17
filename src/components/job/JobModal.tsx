import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { debounce } from "../../utility/utils";
import { getJobPostPreview } from "../JobService";

interface JobModalProps {
    isLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    openPreview:()=>void
    setJobData: React.Dispatch<React.SetStateAction<any>>;
    onClose: () => void;
}

const fetchJobRoles = async (): Promise<{ value: string; label: string }[]> => {
    const mockRoles = ["Developer", "Manager", "Designer", "Tester", "Analyst"];
    return mockRoles.map((role) => ({ value: role, label: role }));
};
const loadLocationOptions = async (inputValue: string) => {
    if (!inputValue) return [];

    try {
        const res = await axios.get("https://nominatim.openstreetmap.org/search", {
            params: {
                q: inputValue,
                format: "json",
                addressdetails: 1,
                limit: 5,
            },
        });

        return res.data.map((place: any) => ({
            label: place.display_name,
            value: place.display_name,
        }));
    } catch (err) {
        console.error("Nominatim error", err);
        return [];
    }
};

const loadJobTitleOptions = async (inputValue: string) => {
    if (!inputValue) return [];

    try {
        const response = await axios.get(
            "https://jsearch.p.rapidapi.com/search",
            {
                params: {
                    query: inputValue,
                    num_pages: 1,
                },
                headers: {
                    "X-RapidAPI-Key": "88ac065326msh2005d9677bda344p110a55jsn7bf4d76d4479",
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
            }
        );

        const jobs = response.data.data || [];
        const uniqueTitles = Array.from(new Set(jobs.map((job: any) => job.job_title)));

        return uniqueTitles.map((title) => ({
            label: title,
            value: title,
        }));
    } catch (err) {
        console.error("Error fetching job titles:", err);
        return [];
    }
};
const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, setJobData, isLoading ,openPreview}) => {
    const [formData, setFormData] = useState({
        title: "",
        role: "",
        location: "",
        company: "",
        description: "",
    });


    const [jobRoleOptions, setJobRoleOptions] = useState<{ value: string; label: string }[]>([]);
    const debounceRef = useRef<(inputValue: string, callback: (options: any[]) => void) => void>(null);
    const jobRef = useRef<(inputValue: string, callback: (options: any[]) => void) => void>(null);

    if (!debounceRef.current) {
        debounceRef.current = debounce(async (inputValue, callback) => {
            const options = await loadLocationOptions(inputValue);
            callback(options);
        }, 500);
    }
    if (!jobRef.current) {
        jobRef.current = debounce(async (inputValue, callback) => {
            const options = await loadJobTitleOptions(inputValue);
            callback(options);
        }, 500);
    }
    useEffect(() => {
        const loadOptions = async () => {
            const roles = await fetchJobRoles();
            setJobRoleOptions(roles);
        };
        loadOptions();
    }, []);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        onClose();
        isLoading(true);
        e.preventDefault();
        try {

            const query = `We need a ${formData.title} for our team in ${formData.location}`
            const result = await getJobPostPreview({
                query
            })
            setJobData(result.data);
            onClose();
            openPreview()
            setFormData({
                title: "",
                role: "",
                location: "",
                company: "",
                description: "",
            })

        } catch (error) {
            console.error("Error in getting job summary ", error);

        } finally {
            isLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50  z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl w-full max-w-xl shadow-2xl relative">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-purple-700">Post a Job</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl font-bold">&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <AsyncSelect
                        cacheOptions
                        defaultOptions
                        loadOptions={jobRef.current}
                        onChange={(option: any) => handleSelectChange("title", option?.value || "")}
                        placeholder="Type to search Job Titles..."
                        className="text-left"
                    />


                    <Select
                        options={jobRoleOptions}
                        value={jobRoleOptions.find((opt) => opt.value === formData.role)}
                        onChange={(option) => handleSelectChange("role", option?.value || "")}
                        placeholder="Select Job Role..."
                        className="text-left"
                    />

                    <AsyncSelect
                        cacheOptions
                        defaultOptions
                        loadOptions={debounceRef.current}
                        onChange={(option: any) => handleSelectChange("location", option?.value || "")}
                        placeholder="Type to search locations..."
                        className="text-left"
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />

                    <textarea
                        name="description"
                        placeholder="Job Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />

                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-700 text-white rounded-xl hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobModal;
