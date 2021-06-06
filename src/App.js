import './styles.css';
import Image from './components/Images';
import butterflies from './images/butterflies.jpeg';


export default function App() {
  return (
    <div className="App">
	  <Image source={butterflies} w='75vw' h='auto'/>
	  
    </div>
  );
}
