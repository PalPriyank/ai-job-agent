import { useState } from 'react';

type FilterKey = 'overallMatch' | 'skillsMatch' | 'experienceMatch' | 'cultureFit';

type Filter = {
  enabled: boolean;
  value: number;
};

const FilterApplicantsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [filters, setFilters] = useState<Record<FilterKey, Filter>>({
    overallMatch: { enabled: true, value: 70 },
    skillsMatch: { enabled: false, value: 70 },
    experienceMatch: { enabled: false, value: 70 },
    cultureFit: { enabled: false, value: 70 },
  });

  const updateValue = (key: FilterKey, newValue: number) => {
    setFilters(prev => ({
      ...prev,
      [key]: { ...prev[key], value: newValue }
    }));
  };

  const toggleEnabled = (key: FilterKey) => {
    setFilters(prev => ({
      ...prev,
      [key]: { ...prev[key], enabled: !prev[key].enabled }
    }));
  };
  const resetFilters = () => {
    setFilters({
      overallMatch: { enabled: true, value: 70 },
      skillsMatch: { enabled: false, value: 70 },
      experienceMatch: { enabled: false, value: 70 },
      cultureFit: { enabled: false, value: 70 },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50  flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-semibold">Filter Applicants</h2>
        <p className="text-sm text-gray-500 mb-4">Set thresholds for matching scores</p>

        {(Object.entries(filters) as [FilterKey, Filter][]).map(([key, { enabled, value }]) => (
          <div key={key} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="checkbox"
                checked={enabled}
                onChange={() => toggleEnabled(key)}
                className="toggle toggle-sm"
              />
            </div>
            <div className="flex items-center gap-3">
              <select className="text-sm border rounded p-1">
                <option>Greater than</option>
                <option>Less than</option>
                <option>Equal to</option>
              </select>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={value}
                onChange={(e) => updateValue(key, parseInt(e.target.value))}
                className={`w-full ${enabled ? '' : 'opacity-50 pointer-events-none'}`}
              />
              <span className="text-sm w-10">{value}%</span>
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <button onClick={resetFilters} className="text-gray-500 hover:underline">Reset</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Apply Filters</button>
        </div>
      </div>
    </div>
  );
};

export default FilterApplicantsModal;
