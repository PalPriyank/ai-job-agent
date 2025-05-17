// src/App.tsx
import JobList from "./components/JobList/JobList";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Interview from "./components/Interview/Interview";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<JobList />} />
          <Route path="/interview" element={<Interview />} />
        </Route>
      </Routes>
    </Router>
    // <Layout>
    //   <div className="min-w-screen h-screen bg-gray-100 flex flex-col items-center overflow-hidden">
    //     <div className="min-w-full shadow-md px-3">

    //       {/* <button
    //       onClick={() => setModalOpen(true)}
    //       className="px-6 py-3 text-purple-700 transition"
    //     >
    //       + New job
    //     </button> */}
    //     </div>
    //     {/* <div className="overflow-y-auto">

    //     {isLoading ? <LoaderModal /> : <JobPreview jobData={jobData} />}
    //   </div> */}

    //     <JobList />
    //     {/* <JobModal setJobData={setJobData} isLoading={setIsLoading} isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}
    //   </div>
    // </Layout>
  );
}

export default App;