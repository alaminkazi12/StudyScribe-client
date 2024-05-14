import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center">
      <Helmet>
        <title>Error | StudyScribe.com</title>
      </Helmet>
      <img className="w-[300px]" src="/assets/404.png" />
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500 font-bold text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
