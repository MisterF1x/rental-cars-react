import { AboutUsSection } from '../components/AboutUsSection/AboutUsSection';
import { BlockForm } from '../components/BlockForm/BlockForm';
import { HeroSection } from '../components/HeroSection/HeroSection';
import PropTypes from 'prop-types';

// import { useData } from '../hooks/useData';

const Home = ({ navigate }) => {
  // const data = useData();
  // console.log(data);
  return (
    <>
      <HeroSection />
      <BlockForm navigate={navigate} />
      <AboutUsSection />
    </>
  );
};

export default Home;
Home.propTypes = {
  navigate: PropTypes.func.isRequired,
};
