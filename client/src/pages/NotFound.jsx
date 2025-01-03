import { Link } from "react-router-dom";

const NotFound = ({ page }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 my-20 text-center">
      <div className="text-mainGray text-9xl">404</div>
      <div className="text-mainGray text-4xl">Page not found</div>
      <Link
        to="/"
        className="w-auto text-4xl font-light text-white bg-mainGreen rounded-3xl px-10 py-1 hover:scale-90"
      >
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
