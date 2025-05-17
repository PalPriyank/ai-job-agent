// JobListSkeleton.tsx
const JobListSkeleton = ({ count = 5 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="p-3 rounded-lg mb-2 bg-gray-100 animate-pulse"
                >
                    <div className="flex justify-between">
                        <div className="space-y-2 w-full">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="h-5 w-16 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default JobListSkeleton;
