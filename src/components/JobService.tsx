import axios from "axios"

export const getJobPostPreview = async (data: any) => {
    return axios.post("http://localhost:3000/api/job-recommendation", data);
}

export const getJobByAccountId = async () => {
    return axios.get('/api/v1/jobs/accountId/cd214518-e5a1-4cda-bf49-6f6162fef23b', {
        headers: {
            'accept': '*/*'
        }
    })
}
const payload  = {
    "accountId": "254479a7-dd84-43ae-92f9-cb8f761a7b0e",
    "apply": {
      "applyType": "ONSITE",
      "applyUrl": "",
      "applicationNotificationEmail": "ppal@ses.nxtdev.monster.com",
      "onsiteApplyEmail": "ppal@ses.nxtdev.monster.com"
     },
    "attributeValuePairs": [
      { "name": "entitledSubscriptionPlan", "value": "PRO" },
      {
        "name": "creatorId",
        "value": "7df77300-b17a-4792-9b7c-6f367f1492ed"
      }
     ],
    "hiringOrganizationExt": { "companyVideos": [] },
    "jobPosting": {
      "baseSalary": { 
        "currency": "USD", "value": {
     "minValue": 104700,
       "maxValue": 152300,
       "unitText": "YEAR"
       }
      },
      "datePosted": "2025-05-14T07:53:05.241Z",
      "validThrough": "2025-06-13T07:53:05.241Z",
      "description": "<p tabindex='0' role='textbox' aria-invalid='false'>rovide a little insight into your company values and culture. Plus, a friendly and inviting tone can do wonders when it comes to response rates.</p>",
      "employmentType": [ "FULL_TIME" ],
      "hiringOrganization": {
        "name": "Priyank org",
        "description": "125 Summer Street, Boston, MA 02111",
        "logo": "",
        "numberOfEmployees": {
       "minValue": 1,
       "maxValue": 10
     },
        "address": {
       "description": "125 Summer Street, Boston, MA 02111",
       "streetAddress": "125 Summer Street",
       "addressLocality": "Boston",
       "addressRegion": "MA",
       "postalCode": "02111",
       "addressCountry": "US"
       },
        "url": "",
        "foundingDate": ""
     },
      "identifier": { "name": "Priyank org", "value": "" },
      "incentiveCompensation": "",
      "industry": "",
      "jobBenefits": [],
      "jobLocation": [ {
       "address": {
         "description": "125 Summer Street, Boston, MA 02111",
         "postalCode": "02111"
       },
       "geo": {
         "latitude": "42.3530889",
         "longitude": "-71.05751459999999"
       }
     } ],
      "jobLocationType": "ONSITE",
      "qualifications": [],
      "responsibilities": "",
      "title": "insurance agent"
    },
    "jobViewPreferences": { "hiringOrganizationConfidential": false },
    "qualifiedSkills": ["python"],
    "status": "ACTIVE",
    "videoObjects": []
  }
  
export const publishJob = (title: string, skills: Array<string>, address: string) => {
    return axios.post('/api/v1/jobs',
       payload,
        {
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*'
            }
        }
    )
}
// {
//     accountId: "254479a7-dd84-43ae-92f9-cb8f761a7b0e",
//     apply: {
//         applyType: "ONSITE",
//         applyUrl: "",
//         applicationNotificationEmail: "ppal@ses.nxtdev.monster.com",
//         onsiteApplyEmail: "ppal@ses.nxtdev.monster.com"
//     },
//     attributeValuePairs: [
//         { name: "entitledSubscriptionPlan", value: "PRO" },
//         {
//             name: "creatorId",
//             value: "7df77300-b17a-4792-9b7c-6f367f1492ed"
//         }
//     ],
//     hiringOrganizationExt: { companyVideos: [] },
//     jobPosting: {
//         baseSalary: {
//             currency: "USD",
//             value: {
//                 minValue: 104700,
//                 maxValue: 152300,
//                 unitText: "YEAR"
//             }
//         },
//         datePosted: "2025-05-14T07:53:05.241Z",
//         validThrough: "2025-06-13T07:53:05.241Z",
//         description:
//             "<p tabindex='0' role='textbox' aria-invalid='false'>Provide a little insight into your company values and culture. Plus, a friendly and inviting tone can do wonders when it comes to response rates.</p>",
//         employmentType: ["FULL_TIME"],
//         hiringOrganization: {
//             name: "Priyank org",
//             description: "125 Summer Street, Boston, MA 02111",
//             logo: "",
//             numberOfEmployees: {
//                 minValue: 1,
//                 maxValue: 10
//             },
//             address: {
//                 description: "125 Summer Street, Boston, MA 02111",
//                 streetAddress: "125 Summer Street",
//                 addressLocality: "Boston",
//                 addressRegion: "MA",
//                 postalCode: "02111",
//                 addressCountry: "US"
//             },
//             url: "",
//             foundingDate: ""
//         },
//         identifier: { name: "Priyank org", value: "" },
//         incentiveCompensation: "",
//         industry: "",
//         jobBenefits: [],
//         jobLocation: [
//             {
//                 address: {
//                     description: address,

//                     postalCode: "02111",

//                 },
//                 geo: {
//                     latitude: "42.3530889",
//                     longitude: "-71.05751459999999"
//                 }
//             }
//         ],
//         jobLocationType: "ONSITE",
//         qualifications: [],
//         responsibilities: "",
//         title: title// <-- placeholder title
//     },
//     jobViewPreferences: { hiringOrganizationConfidential: false },
//     qualifiedSkills: skills, // <-- placeholder skills
//     status: "ACTIVE",
//     videoObjects: []
// },