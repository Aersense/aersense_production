import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import ShowCase from './component/ShowCase/ShowCase';
import "./fonts/BankGothicMdBT.ttf"
import "./App.css"
import Footer from './component/Footer/Footer';
import Homescreen from './views/Homescreen/Homescreen';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <ShowCase/>
      <Footer/>
      <Homescreen />


    </div >
  );
}

export default App;
