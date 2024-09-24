import './Style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import LoginRegisterForm from './Component/LoginRegisterForm';
import { PopupProvider  } from './util/PopupContext';
import CreateStoryPopUp from './Component/CreateStoryPopUp';
import Bookmarks from './Pages/Bookmarks';
import Header from './Component/Header';
import MedicalImage from './assets/Medical.png'
import YourStory from './Pages/YourStory';
import StorySlide from './Component/StorySlide';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <PopupProvider >
    <Header isAuthenticated={true}
    userName={'Saloni Kansal Kumar'} 
    avatarUrl={MedicalImage} />

    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/bookmarks"  element={<Bookmarks />}/>
      <Route path="/your-story"  element={<YourStory isAuthenticate={true}/>}/>
      <Route path="/story/:storyid/slide/:slideid" element={<StorySlide />} />
    </Routes>
    </PopupProvider >

    </BrowserRouter>
  </div>
  );
}

export default App;
