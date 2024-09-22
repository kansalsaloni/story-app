import React, { useState,useContext} from 'react'
import '../Style/BookmarksStyle.css';
import FoodImage from '../assets/Food.png'
import '../Style/StoryCardsStyle.css';
import { PopupContext } from '../util/PopupContext';
import StorySlide from '../Component/StorySlide';
import { useSearchParams } from 'react-router-dom';

function Bookmarks() {
  const {isModalOpen,setIsModalOpen} = useContext(PopupContext);
  const [selectedStory, setSelectedStory] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

    const [bookmarkedStories, setBookmarkedStories] = useState([
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
      const handleCardClick = (story) => {
        setSelectedStory(story);
        setIsModalOpen(true);   
        setSearchParams({ story: story.id, slide: 0 });   
      };
      const storyId = searchParams.get('story');
      const slideId = searchParams.get('slide');
      const closePopup = () => {
        searchParams.delete('story');
        searchParams.delete('slide');
        setSearchParams(searchParams);
      };
  return (
    <>
    <div className='bookmarks-container'>
    <h2 className="heading">Your Bookmarked </h2>
    <div className='story-cards-container'>
    <div className='category-cards'>
        {bookmarkedStories.map((story) => (
          <div className="story-card" key={story.id} style={{ backgroundImage: `url(${story.backgroundImage})` }} onClick={() => handleCardClick(story)}>
            <div className="card-overlay">
            <h3>{story.heading}</h3>
            <p className="text">{story.text}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    {storyId && (
        <StorySlide 
          storyId={storyId} 
          slideId={slideId} 
          onClose={closePopup} 
        />
      )}
    {/* {isModalOpen && (
        <StorySlide story={selectedStory} onClose={ ()=>setIsModalOpen(false)} />
      )} */}
    </>
  )
}

export default Bookmarks
