import './home.css';
import Body from '../body/index';
import Header from '../header/index';

const Home = () => {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default Home;
