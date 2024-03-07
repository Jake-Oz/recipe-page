import React from "react";
import { youngSerif } from "@/app/fonts";

interface NutritionProps {
  data: { [key: string]: string };
}

const Nutrition: React.FC<NutritionProps> = ({ data }) => {
  return (
    <div>
      <h2
        className={`${youngSerif.className} text-xl font-bold text-primary-nutmeg mb-4`}
      >
        Nutrition
      </h2>
      <p className="text-xs">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="mt-5 w-full">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <React.Fragment key={key}>
              <tr className="text-xs border-b-[1px] border-neutral-lightGrey last:border-b-0">
                <td className="pl-5 py-2 w-1/2 text-neutral-wengeBrown">
                  {key}
                </td>
                <td className="w-1/2 text-primary-nutmeg font-bold">{value}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nutrition;
