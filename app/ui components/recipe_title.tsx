import React from "react";
import { youngSerif } from "@/app/fonts";

interface TextProps {
  heading: string;
  paragraph: string;
}

const RecipeTitle: React.FC<TextProps> = ({ heading, paragraph }) => {
  return (
    <div>
      <h1 className={`${youngSerif.className} py-5 text-3xl`}>{heading}</h1>
      <p className="text-neutral-darkCharcoal text-xs leading-tight">
        {paragraph}
      </p>
    </div>
  );
};

export default RecipeTitle;
