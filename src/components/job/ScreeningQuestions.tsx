import { useState } from "react";
import { publishJob } from "../JobService";


const ScreeningQuestions = ({ questions }: { questions: Array<any> }) => {
    return (<div>
        {questions.map((q, qIndex) => (
            <div key={qIndex} className="mb-6  rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-md font-semibold">Question {qIndex + 1}</h3>

                </div>
                <p className="mb-4 text-sm text-gray-800">{q.question}</p>

                {/* Options */}
                {q.options.map((opt: any, oIndex: number) => {
                    const isCorrect = opt.id === q.answer;

                    return (
                        <div
                            key={opt.id}
                            className={`flex items-center justify-between border rounded-lg px-4 py-2 mb-2 ${isCorrect ? 'border-green-400 bg-green-50' : 'border-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full border border-gray-400" />

                                <span className="text-sm text-gray-800">{opt.value}</span>


                                {isCorrect && (
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                        Correct Answer
                                    </span>
                                )}
                            </div>

                            {/* <div className="flex gap-3 items-center">
                        {!isCorrect && (
                          <button
                            className="text-xs text-gray-500 hover:text-green-600"
                            onClick={() => markCorrect(qIndex, opt.id)}
                          >
                            Mark Correct
                          </button>
                        )}
                        <button
                          onClick={() =>
                            isEditing ? setEditing(null) : setEditing({ qIndex, oIndex })
                          }
                          className="text-purple-500"
                        >
                          {isEditing ? <CheckIcon className="w-4 h-4" /> : <PencilIcon className="w-4 h-4" />}
                        </button>
                      </div> */}
                        </div>
                    );
                })}
            </div>
        ))}

    </div>)
}


export default ScreeningQuestions;