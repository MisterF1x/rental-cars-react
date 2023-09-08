import { useData } from '../hooks/useData';

const Home = () => {
  const data = useData();
  console.log(data);
  return (
    <>
      <section>
        <h1>Home</h1>
      </section>
    </>
  );
};

export default Home;
