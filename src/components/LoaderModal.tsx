

const LoaderModal = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center space-y-4 w-80 text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
        <h2 className="text-lg font-semibold text-gray-800">Processing with AI</h2>
        <p className="text-sm text-gray-500">
          Hold tight! Our AI is thinking hard to generate the perfect results.
        </p>
      </div>
    </div>
  );
};

export default LoaderModal;
