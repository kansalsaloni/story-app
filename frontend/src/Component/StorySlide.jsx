import React ,{useState,useEffect} from 'react'
import '../Style/StorySlideStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBookmark, faHeart ,faPaperPlane}  from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Style/StoryCardsStyle.css';
import { useSearchParams } from 'react-router-dom';
import FoodImage from '../assets/Food.png'

const StorySlide = ({ storyId, slideId, onClose  }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const story =  { id: 1, title: 'Food Story 1', text: 'Delicious food from around the world.', image: FoodImage ,slides: [
    { id: 1, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
    { id: 2, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
    { id: 3, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
    { id: 4, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },
    { id: 5, title: 'Slide 1 Title', text: 'Slide 1 Description', image: FoodImage },
    { id: 6, title: 'Slide 2 Title', text: 'Slide 2 Description', image: FoodImage },  
   
  ],};
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => {
        if (prevIndex < story.slides.length - 1) {
          return prevIndex + 1;
        } else {
          // Close after last slide instead of restarting
          onClose();
          return prevIndex;  // Stop the slide progression
        }
      });
    }, 15000); 
    return () => clearInterval(timer);
  }, [story.slides.length]);  

  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    const slideFromParams = parseInt(searchParams.get('slide'), 10);
    if (!isNaN(slideFromParams) && slideFromParams >= 0 && slideFromParams < story.slides.length) {
      setCurrentSlideIndex(slideFromParams);
    }
  }, [searchParams, story.slides.length]);
  const handleNext = () => {
    if (currentSlideIndex < story.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setSearchParams({ story: storyId, slide: currentSlideIndex + 1 });
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setSearchParams({ story: storyId, slide: currentSlideIndex - 1 });

    }
  };

  return (
    <div className="story-modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="slide-navigation">
          <button 
            className="nav-button" 
            onClick={handlePrevious} 
            disabled={currentSlideIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          <div className="slide-container">
            
            <div className='slide' style={{ backgroundImage: `url(${story.slides[currentSlideIndex].image})` }}>
               <div className='slides-container'>
                    <div className='slides-line-container'>
                        {story.slides.map((slide, index) => (
                           <div key={index} className="slide-line-wrapper">
                           <div
                             className={`slide-line ${currentSlideIndex === index ? 'active' : ''}`}
                           ></div>
                         </div>

                        ))}
                    </div>
                    <div className="slide-close-share-container">
                        <div className='slide-close-icon' onClick={handleClose}>
                          X
                        </div>
                        <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white', cursor: 'pointer' }}/>       
                    </div>
               </div>
              <div className='card-overlay slide-overlay'>
                    <div>
                        <h4 className='slide-title'>{story.slides[currentSlideIndex].title}</h4>
                        <p className='slide-text'>{story.slides[currentSlideIndex].text}</p>
                    </div>
                    <div className="slide-bookmark-like-action-container">
                        <div>
                          <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <div >
                          <FontAwesomeIcon icon={faHeart} />123
                        </div>
                    </div>
               </div>
          
           </div>
          </div>
          <button 
            className="nav-button" 
            onClick={handleNext} 
            disabled={currentSlideIndex === story.slides.length - 1}
          >
              <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorySlide;

