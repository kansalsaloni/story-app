import React, {useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { PopupContext } from '../util/PopupContext';
import FilterCards from "../Component/FilterCards";
import StoryCards from "../Component/StoryCards";

function Home() {

  const { isRegisterPopupOpen, isLoginPopupOpen ,isCreateStoryPopupOpen} = useContext(PopupContext);
  const navigate=useNavigate();

  return (
    <>
    <FilterCards />
    
    <StoryCards />
    
    {/* Show popup  */}
    
  {isRegisterPopupOpen&&(
      navigate('/register')
  )}
  {isLoginPopupOpen&&(
      navigate('/login')
  )}
  {isCreateStoryPopupOpen&&(
      navigate('/create-story')
  )}
    </>

  )
}

export default Home;
