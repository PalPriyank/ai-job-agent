import axios from "axios"

export const getApplicantByJobId = async (jobId: string) => {
    return axios.get(`/apply/v2/jobs/${jobId}/applies`, {
        headers: {
            'accept': '*/*',
            'Tenant-Id': '8ac30c3a7057a2ec01705d1709660000'
        }
    })

}