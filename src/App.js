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
import Where from './components/Where/Where';
import PrivacyPolicy from './components/privacy/Privacy';
function App() {
  return <>
  <FirstScreen/>
<SecondScreen/>
<ThirdScreen/>
<AboutSection/>
<VideosScreen/>
<BackgroundGlass/>
<Where/>
<ForthScreen/>
<PrivacyPolicy 
  ownerName="שיראל זגורי - שיראל יוגה" 
  email="shirelzag9965@gmail.com" 
  phone="+972 55-228-8368" 
  domain="https://yoga-with-shirel.co.il/" 
/>
<ByMe/>
  </>
}

export default App;
