import './styles/App.css';
import Banner from './components/banner/Banner';
import Featured from './components/featured/Featured';
import Services from './components/services/Services';
import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Featured />
      <Footer />
    </>
  );
}


export default App;
