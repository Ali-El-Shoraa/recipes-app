import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        className="flex items-center w-fit gap-2 font-['Lobster',cursive] text-2xl mx-auto md:mx-0"
        to={"/recipes-app/"}
      >
        <GiKnifeFork /> deliciousss
      </Link>
    </div>
  );
}

export default Logo;
