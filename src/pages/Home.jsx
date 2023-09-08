import { Toaster } from 'react-hot-toast';
import { AboutUsSection } from '../components/AboutUsSection/AboutUsSection';
import { BlockForm } from '../components/BlockForm/BlockForm';
import { HeroSection } from '../components/HeroSection/HeroSection';
import PropTypes from 'prop-types';

const Home = ({ navigate }) => {
  return (
    <>
      <HeroSection />
      <BlockForm navigate={navigate} />
      <AboutUsSection />
      <Toaster position="top-right" />
    </>
  );
};

export default Home;
Home.propTypes = {
  navigate: PropTypes.func.isRequired,
};
