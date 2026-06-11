import './home.css';
import Body from '../body/index';
import Header from '../header/index';
import TerminalWindow from '../terminal/TerminalWindow';

const Home = () => {
  return (
    <div className="home">
      <TerminalWindow>
        <Header />
        <Body />
      </TerminalWindow>
    </div>
  );
};

export default Home;
