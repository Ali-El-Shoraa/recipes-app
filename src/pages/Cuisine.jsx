import { Link } from "react-router-dom";
import Button from "../components/Button";
import useCuisine from "../data/useCuisine";
function Cuisine() {
  // custome hook
  const { cuisine, number, total, ten } = useCuisine();
  // JSX
  return (
    <section className="pb-20 ">
      <div className="container mx-auto px-4">
        <div className={total > 2 ? "Grid" : "flex gap-12"}>
          {cuisine.map((cuisine) => {
            return (
              <div key={cuisine.id} className="text-center mb-3">
                <Link to={"/recipes-app/recipe/" + cuisine.id}>
                  <img
                    src={cuisine.image}
                    alt={cuisine.title}
                    className="w-full rounded-3xl"
                  />
                  <h3 className="text-[#383838] text-base font-bold">
                    {cuisine.title}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>

        <Button number={number} ten={ten} total={total} />
      </div>
    </section>
  );
}

export default Cuisine;
