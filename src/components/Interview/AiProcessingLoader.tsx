import React from "react";

const AiProcessingLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 w-full text-center space-y-4">
      <div className="text-purple-700 font-semibold text-lg animate-pulse">
        AI is thinking...
      </div>

      <div className="flex space-x-2 mt-2">
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
      </div>

      <p className="text-gray-500 text-sm max-w-xs">
        Generating intelligent questions based on the job profile and context...
      </p>
    </div>
  );
};

export default AiProcessingLoader;
