import CategoriesContainer from "../components/Categories/CategoriesContainer";
import HomeSlider from "../components/Home/HomeSlider";
const Home = () => {
  return (
    <div className={`w-full flex flex-col`}>
      <HomeSlider />
      <CategoriesContainer />
    </div>
  );
};

export default Home;
