import RecipeImage from "./ui components/image";
import data from "@/recipeData";
import RecipeTitle from "./ui components/recipe_title";
import Preparation from "./ui components/preparation";
import Ingredients from "./ui components/ingredients";
import Instructions from "./ui components/instructions";
import Nutrition from "./ui components/nutrition";
import Attribution from "./ui components/attribution";

export default function Home() {
  return (
    <main
      role="main"
      className="mx-auto max-w-lg min-w-[200px] bg-neutral-white sm:my-16 rounded-xl sm:p-7"
    >
      <RecipeImage src="/image-omelette.jpeg" alt="Recipe App" />
      <div className="sm:p-0 p-7">
        <RecipeTitle heading={data.title} paragraph={data.description} />
        <Preparation title="Preparation time" items={data.preparationTime} />
        <Ingredients ingredients={data.ingredients} />
        <hr className="my-5 border-neutral-lightGrey border-b-[1px]" />{" "}
        <Instructions instructions={data.instructions} />
        <hr className="my-5 border-neutral-lightGrey border-b-[1px]" />{" "}
        <Nutrition data={data.nutrition} />
        <Attribution />
      </div>
    </main>
  );
}
