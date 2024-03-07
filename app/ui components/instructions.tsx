import React from "react";
import { youngSerif } from "@/app/fonts";

interface InstructionsProps {
  instructions: string[];
}

const Instructions: React.FC<InstructionsProps> = ({ instructions }) => {
  return (
    <div>
      <h2
        className={`${youngSerif.className} text-xl font-bold text-primary-nutmeg mb-4`}
      >
        Instructions
      </h2>
      <ol className="list-decimal ml-5 text-xs space-y-2 marker:text-primary-nutmeg marker:font-bold">
        {instructions.map((instruction, index) => {
          const colonIndex = instruction.indexOf(":");
          const boldText = instruction.slice(0, colonIndex + 1);
          const remainingText = instruction.slice(colonIndex + 1);

          return (
            <li key={index} className="pl-2">
              <strong>{boldText}</strong>
              {remainingText}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Instructions;
