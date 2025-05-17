const ApplicantListSkeleton = () => {
    return (
      <div>
        <div className="flex justify-between items-center animate-pulse mb-4">
          <div className="h-6 w-48 bg-gray-200 rounded"></div>
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-400">
            <div className="h-4 w-4 bg-gray-300 rounded" />
            <div className="h-4 w-16 bg-gray-300 rounded" />
            <div className="h-5 w-5 bg-gray-300 rounded-full" />
          </div>
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
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="text-sm border-b animate-pulse">
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
                    <div>
                      <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-10 bg-gray-200 rounded"></div>
                    <div className="w-24 h-2 bg-gray-200 rounded"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
                </td>
                <td className="p-3">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </td>
                <td className="p-3 space-x-3 text-gray-500">
                  <div className="flex space-x-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

  export default ApplicantListSkeleton;