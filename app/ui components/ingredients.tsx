import React from "react";
import { youngSerif } from "@/app/fonts";

interface IngredientsProps {
  ingredients: string[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <div className="mt-5">
      <h2
        className={`${youngSerif.className} text-xl font-bold text-primary-nutmeg mb-4`}
      >
        Ingredients
      </h2>
      <ul className="list-disc ml-5 text-xs space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="pl-2">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
