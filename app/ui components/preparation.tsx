import React from "react";

interface Props {
  title: string;
  items: { Total: string; Preparation: string; Cooking: string };
}

const Preparation: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="bg-neutral-roseWhite mt-5 rounded-lg p-4">
      <h1 className="text-primary-darkRaspberry font-bold">{title}</h1>
      <ul className="ml-6 mt-2 list-disc text-xs space-y-2">
        {Object.keys(items).map((item) => (
          <li key={item} className="pl-3">
            <span className="font-bold">{item}</span>
            {`: ${items[item as keyof typeof items]}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preparation;
