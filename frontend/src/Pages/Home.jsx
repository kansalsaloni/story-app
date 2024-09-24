import React, { useState,useContext, useEffect } from 'react';
import FoodImage from '../assets/Food.png'
import {  useNavigate, useSearchParams } from "react-router-dom";
import { PopupContext } from '../util/PopupContext';
import FilterCards from "../Component/FilterCards";
import StoryCards from "../Component/StoryCards";
import StorySlide from "../Component/StorySlide";
import LoginRegisterForm from '../Component/LoginRegisterForm';
import CreateStoryPopUp from '../Component/CreateStoryPopUp';

function Home() {

  const { isRegisterPopupOpen, isLoginPopupOpen ,isCreateStoryPopupOpen} = useContext(PopupContext);
  const navigate=useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedStory, setSelectedStory] = useState(null);


  const [categories, setCategories] = useState([
    {
      category: 'Food',
      heading: 'Top Stories for Food',
      showAll: false,
      cards: [
        { id: 1, title: 'Food Story 1', text: 'Delicious food from around the world.', image: FoodImage ,slides: [
          { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
          { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
          { id: 3, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
          { id: 4, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
          { id: 5, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
          { id: 6, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },  
         
        ],},
        { id: 2, title: 'Food Story 2', text: 'Healthy eating tips.', image: FoodImage ,slides: [
          { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
          { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
        ],},
        { id: 3, title: 'Food Story 3', text: 'Top 10 recipes.', image: FoodImage },
        { id: 4, title: 'Food Story 4', text: 'How to grow your own food.', image: FoodImage },
        { id: 5, title: 'Food Story 5', text: 'Food sustainability tips.', image: FoodImage },
        { id: 6, title: 'Food Story 6', text: 'Exotic ingredients to try.', image: FoodImage },
        { id: 7, title: 'Food Story 7', text: 'Restaurant trends.', image: FoodImage},
      ],
    },
    {
      category: 'Medical',
      heading: 'Top Stories for Medical',
      showAll: false,
      cards: [
        { id: 1, title: 'Medical Story 1', text: 'Latest medical breakthroughs.', image: FoodImage,
          slides: [
            { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
            { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
          ],
         },
        { id: 2, title: 'Medical Story 2', text: 'Healthcare innovation.', image: FoodImage,slides: [
          { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
          { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
        ], },
        { id: 3, title: 'Medical Story 3', text: 'Medical technology advancements.', image: FoodImage,slides: [
          { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
          { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
        ],},
        { id: 4, title: 'Medical Story 4', text: 'Health tips for 2024.', image: FoodImage },
        { id: 5, title: 'Medical Story 5', text: 'The future of surgeries.', image: FoodImage },
        { id: 6, title: 'Medical Story 6', text: 'Pandemic preparedness.', image: FoodImage },
        { id: 7, title: 'Medical Story 7', text: 'Mental health awareness.', image: FoodImage },
      ],
    },
  ]);
  const storyId = searchParams.get('story');
  const slideId = searchParams.get('slide');
  const closePopup = () => {
    searchParams.delete('story');
    searchParams.delete('slide');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const hasPopupOpen = storyId || isRegisterPopupOpen || isLoginPopupOpen || isCreateStoryPopupOpen;
    
    if (hasPopupOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll'); // Clean up on component unmount
    };
  }, [storyId, isRegisterPopupOpen, isLoginPopupOpen, isCreateStoryPopupOpen]);





  return (
    <>
    <div className={`home-content ${storyId || isRegisterPopupOpen || isLoginPopupOpen || isCreateStoryPopupOpen ? 'background-blurred' : ''}`}>

        <FilterCards />  
        <StoryCards isAuthenticate={true} setSearchParams={setSearchParams} categories={categories} setCategories={setCategories}  setSelectedStory={setSelectedStory}/>
    </div>

    {storyId && (
        <StorySlide 
          storyId={storyId} 
          slideId={slideId} 
          onClose={closePopup} 
        />
      )}
    
    {/* Show popup  */}
    
  {isRegisterPopupOpen&&(
  <LoginRegisterForm popupHeading="Register"/>
    )}
  {isLoginPopupOpen&&(
     <LoginRegisterForm popupHeading="Login"/>
  )}
  {isCreateStoryPopupOpen&&(
<CreateStoryPopUp />

  )}
    </>

  )
}

export default Home;
