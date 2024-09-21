import React, { useState,useContext } from 'react';
import FoodImage from '../assets/Food.png'
import '../Style/StoryCardsStyle.css';
import YourStory from '../Pages/YourStory';
import StorySlide from './StorySlide';
import { PopupContext } from '../util/PopupContext';
import { useNavigate } from 'react-router-dom';

function StoryCards({isAuthenticate}) {
  const {isModalOpen,setIsModalOpen } = useContext(PopupContext);
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
    setIsModalOpen(true);
  };
  return (
  <>
    {isAuthenticate&&(
        <YourStory />
      )}
    <div className={`story-cards-container ${isModalOpen ? 'blur' : ''}`}>
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
    {isModalOpen && (
     <StorySlide story={selectedStory} onClose={ ()=>setIsModalOpen(false)} />
      )}
    </>
  );
}

export default StoryCards;
