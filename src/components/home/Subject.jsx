import useQueryUserSubjects from '@/hooks/Queries/useQueryUserSubjects';
import useUserSubjects from '@/hooks/Store/useUserSubjects';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Subject() {
  const querySubject = useQueryUserSubjects();
  const userSubjects = useUserSubjects(state => state.subjects)

  return (
    <div className=" opacity-50 cursor-not-allowed">
      <p className="text-white font-bold mb-4">Your Subjects</p>
      <div className="space-y-2 bg-[#28343E] rounded-xl p-4 py-6">
        {userSubjects.map((subject, index) => (
          <div
            key={index}
            className="bg-[#1B2730] text-[0.7rem] flex justify-between items-center p-2 px-5 rounded-full text-white"
          >
            <p>{subject.subject}</p>
            <button
              disabled
              to={`/subject/${subject.subject}`}
              className="text-blue-500 text-xs"
            >
              View
            </button>
          </div>
        ))}
      </div>
      <p className="font-black w-full text-center text-white">
        THIS FEATURE WILL COME SOONE
      </p>
    </div>
  );
}
