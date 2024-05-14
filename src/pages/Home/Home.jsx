import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import BestOfMonth from "../../components/BestOfMonth/BestOfMonth";
import BooksToRent from "../../components/BooksToRent/BooksToRent";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | StudyScribe.com</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <BestOfMonth></BestOfMonth>
      <BooksToRent></BooksToRent>
    </div>
  );
};

export default Home;
