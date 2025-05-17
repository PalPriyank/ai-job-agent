import { FC } from "react";
import { Pencil, X } from "lucide-react";

// type Question = {
//   id?: string;
//   type?: "Technical" | "Behavioral" | "Leadership" | string;
//   question: string;
// };

type QuestionCardProps = {
  id:string,
  question: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const AiQuestions: FC<QuestionCardProps> = ({id , question, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 shadow rounded-xl p-4 relative">
      <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
        {"Technical"}
      </span>

      <p className="text-md font-semibold mt-2 ">
        {question}
      </p>

      <div className="absolute top-3 right-3 flex space-x-2">
        <button onClick={() => onEdit(id)}>
          <Pencil className="w-4 h-4 text-purple-600 hover:text-purple-800" />
        </button>
        <button onClick={() => onDelete(id)}>
          <X className="w-4 h-4 text-red-500 hover:text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default AiQuestions;
