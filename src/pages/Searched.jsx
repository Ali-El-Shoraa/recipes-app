import { Link } from "react-router-dom";
import Button from "../components/Button";
import useSearched from "../data/useSearched";

function Searched() {
  const { cuisine, number, total, ten } = useSearched();

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className={total > 2 ? "Grid" : "flex gap-12"}>
          {cuisine.map((cuisine) => {
            return (
              <div key={cuisine.id} className="text-center mb-3">
                <Link to={"/recipes-app/recipe/" + cuisine.id}>
                  <img
                    src={cuisine.image}
                    alt={cuisine.title}
                    className="w-full rounded-3xl "
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

export default Searched;
