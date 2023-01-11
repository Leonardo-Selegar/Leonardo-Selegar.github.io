import Principal from "./pages/Principal";
import Habilidades from "./pages/Habilidades"
import Projetos from './pages/Projetos';
import Certificados from './pages/Certificados';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="pags">
      <Principal />
      <Habilidades />
      <Projetos />
      <Certificados />
      <Footer />
    </div>
  );
}

export default App;
