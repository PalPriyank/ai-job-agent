import axios from "axios"

export const generateInterviewQuestions = (body:any)=>{
    return axios.post("/ai-api/generate-questions",body)
}
export const createInterview = (body:any)=>{
    return axios.post("/ai-api/create-interview",body)
}