import React, { useState,useContext } from 'react';
import '../Style/StoryCardsStyle.css';
import YourStory from '../Pages/YourStory';
import StorySlide from './StorySlide';
import { PopupContext } from '../util/PopupContext';
import { useNavigate } from 'react-router-dom';
import ShimmerCard from '../util/ShimmerCard'
// function StoryCards({isAuthenticate,categoryValue=[], setSearchParams,categories=[],setCategories , setSelectedStory}) {


//   const toggleSeeMore = (categoryIndex) => {
//     const updatedCategories = categories.map((category, index) => {
//       if (index === categoryIndex) {
//         return { ...category, showAll: !category.showAll };
//       }
//       return category;
//     });
//     setCategories(updatedCategories);
//   };
//   const handleCardClick = (story) => {
//     setSelectedStory(story);

//     setSearchParams({ story: story.id, slide: 0 });
//   };
//   return (
//   <>
//     {isAuthenticate&&(
//         <YourStory />
//       )}
//     <div className='story-cards-container'>
//     {categoryValue.map((categoryName, catIndex) => {
//           const categoryData = categories.find((cat) => cat.category === categoryName);

//           if (!categoryData) return 'No availiabel'; 

//           return (
//          <div className="category-section">
//     <h2 className="category-heading">{`Top story for Food`}</h2>

//           <div className="category-cards">
//             {categoryData.cards
//               .slice(0, categoryData.showAll ? categoryData.cards.length : 4) 
//               .map((card) => (
//                 <div key={card.id} className="story-card" style={{ backgroundImage: `url(${card.image})` }}  onClick={() => handleCardClick(card)}>
//                   <div className="card-overlay">
//                     <h3>{card.title}</h3>
//                     <p className='text'>{card.text}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//           <button className="btn see-more-button" onClick={() => toggleSeeMore(catIndex)}>
//             {categoryData.showAll ? 'See Less' : 'See More'}
//           </button>
//         </div>

// );
// })}
//     </div>
//     </>
//   );
// }

// export default StoryCards;

function StoryCards({ isAuthenticate, categoryArray = [], setSearchParams, categories = [], setCategories, setSelectedStory,isShimmerLoading }) {
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
      {isAuthenticate && <YourStory isShimmerLoading={isShimmerLoading}/>}
      <div className='story-cards-container'>
        {
          categoryArray.map((categoryName, catIndex) => {
            const categoryData = categories.find((cat) => cat.category === categoryName);

            if (!categoryData) return null;

            return (
              <div key={catIndex} className="category-section">
                <h2 className="category-heading">{`Top story for ${categoryName}`}</h2>

                <div className="category-cards">
                  {isShimmerLoading
                  
                    ? Array(4).fill().map((_, index) =><ShimmerCard />)
                    : categoryData.cards
                        .slice(0, categoryData.showAll ? categoryData.cards.length : 4)
                        .map((card) => (
                          <div
                            key={card.id}
                            className="story-card"
                            style={{ backgroundImage: `url(${card.image})` }}
                            onClick={() => handleCardClick(card)}
                          >
                            <div className="card-overlay">
                              <h3>{card.title}</h3>
                              <p className="text">{card.text}</p>
                            </div>
                          </div>
                        ))}
                </div>

                <button className="btn see-more-button" onClick={() => toggleSeeMore(catIndex)}>
                  {categoryData.showAll ? 'See Less' : 'See More'}
                </button>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default StoryCards;

