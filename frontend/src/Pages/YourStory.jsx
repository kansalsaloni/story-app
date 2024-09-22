import React, { useState,useContext} from 'react'
import '../Style/BookmarksStyle.css';
import FoodImage from '../assets/Food.png'
import '../Style/StoryCardsStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { PopupContext } from '../util/PopupContext';
import { useNavigate } from 'react-router-dom';
import StorySlide from '../Component/StorySlide';

function YourStory() {
  const navigate=useNavigate();
  const [selectedStory, setSelectedStory] = useState(null);
  const {toggleCreateStoryPopup,isCreateStoryPopupOpen,isModalOpen,setIsModalOpen} = useContext(PopupContext);
  const [showAllStories, setShowAllStories] = useState(false);
    const [userStories, setUserStories] = useState([
        {
          id: 1,
          heading: 'Story 1',
          text: 'This is a short description of Story 1',
          backgroundImage: FoodImage,
          slides: [
            { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
            { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
          ],
        },
        {
          id: 2,
          heading: 'Story 2',
          text: 'This is a short description of Story 2',
          backgroundImage: FoodImage,
          slides: [
            { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
            { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
          ],
        },
        {
          id: 3,
          heading: 'Story 3',
          text: 'This is a short description of Story 3',
          backgroundImage:FoodImage,
          slides: [
            { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
            { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
          ],
        },
        {
          id: 4,
          heading: 'Story 4',
          text: 'This is a short description of Story 4',
          backgroundImage: FoodImage,
        },
        {
            id: 4,
            heading: 'Story 4',
            text: 'This is a short description of Story 4',
            backgroundImage: FoodImage,
          },
          {
            id: 4,
            heading: 'Story 4',
            text: 'This is a short description of Story 4',
            backgroundImage: FoodImage,
          }, {
            id: 4,
            heading: 'Story 4',
            text: 'This is a short description of Story 4',
            backgroundImage: FoodImage,
          }, {
            id: 4,
            heading: 'Story 4',
            text: 'This is a short description of Story 4',
            backgroundImage: FoodImage,
          }, {
            id: 4,
            heading: 'Story 4',
            text: 'This is a short description of Story 4',
            backgroundImage: FoodImage,
          }
      ]);
      const handleSeeMore = () => {
        setShowAllStories(!showAllStories);
      };
      
      const displayedStories = showAllStories ? userStories : userStories.slice(0, 4);

      const handleCardClick = (story) => {
        setSelectedStory(story);
        setIsModalOpen(true);
      };

  return (
    <>
    <div className='bookmarks-container'>
    <h2 className="heading">Your Stories </h2>
    <div className='story-cards-container'>
    <div className='category-cards'>
        {displayedStories.map((story) => (
          <div className='your-story-edit-cards'>
          <div className="story-card" key={story.id} style={{ backgroundImage: `url(${story.backgroundImage})` }}  onClick={() => handleCardClick(story)}>
            <div className="card-overlay">
            <h3>{story.heading}</h3>
            <p className="text">{story.text}</p>
            </div>
          </div>
          <button className="edit-button" onClick={toggleCreateStoryPopup}>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" /> Edit
                </button>
          </div>
          
        ))}
      </div>
      </div>
      <button className="btn see-more-button" onClick={handleSeeMore}>
        {showAllStories ? 'See Less' : 'See More'}
      </button>
    </div>
    {isCreateStoryPopupOpen&&(
      navigate('/edit-story')
  )}
    {isModalOpen && (
        <StorySlide story={selectedStory} onClose={ ()=>setIsModalOpen(false)} />
      )}
    </>
  )
}

export default YourStory
