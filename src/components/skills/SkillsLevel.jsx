import React from "react";

const SkillsLevel = ({ skillsName, percentage }) => {
  return (
    <>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">{skillsName}</p>
          <p className="text-sm text-right">{percentage}</p>
        </div>
        <div className="w-full bg-stone-500 h-3 rounded-full">
          <div
            style={{ width: `${percentage}` }}
            className={`h-3 bg-yellow-300 rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SkillsLevel;
