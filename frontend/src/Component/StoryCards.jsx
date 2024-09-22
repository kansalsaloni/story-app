import React, { useState,useContext } from 'react';
import '../Style/StoryCardsStyle.css';
import YourStory from '../Pages/YourStory';
import StorySlide from './StorySlide';
import { PopupContext } from '../util/PopupContext';
import { useNavigate } from 'react-router-dom';

function StoryCards({isAuthenticate, setSearchParams,categories,setCategories , setSelectedStory}) {


  const toggleSeeMore = (categoryIndex) => {
    const updatedCategories = categories.map((category, index) => {
      if (index === categoryIndex) {
        return { ...category, showAll: !category.showAll };
      }
      return category;
    });
    setCategories(updatedCategories);
  };
  const handleCardClick = (story) => {
    setSelectedStory(story);

    setSearchParams({ story: story.id, slide: 0 });
  };
  return (
  <>
    {isAuthenticate&&(
        <YourStory />
      )}
    <div className='story-cards-container'>
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-heading">{category.heading}</h2>
          <div className="category-cards">
            {category.cards
              .slice(0, category.showAll ? category.cards.length : 4) 
              .map((card) => (
                <div key={card.id} className="story-card" style={{ backgroundImage: `url(${card.image})` }}  onClick={() => handleCardClick(card)}>
                  <div className="card-overlay">
                    <h3>{card.title}</h3>
                    <p className='text'>{card.text}</p>
                  </div>
                </div>
              ))}
          </div>
          <button className="btn see-more-button" onClick={() => toggleSeeMore(index)}>
            {category.showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      ))}
    </div>
    </>
  );
}

export default StoryCards;
