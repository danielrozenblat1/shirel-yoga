import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutSection from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import BackgroundGlass from './components/If/If';
import VideosScreen from './screens/VideosScreen';
function App() {
  return <>
  <FirstScreen/>
<SecondScreen/>
<ThirdScreen/>
<AboutSection/>
<VideosScreen/>
<BackgroundGlass/>
<ForthScreen/>

<ByMe/>
  </>
}

export default App;
