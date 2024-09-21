import React ,{useState,useEffect} from 'react'
import '../Style/StorySlideStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBookmark, faHeart ,faPaperPlane}  from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Style/StoryCardsStyle.css';
import { useParams } from 'react-router-dom';

const StorySlide = ({ story, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => 
        prevIndex < story.slides.length - 1 ? prevIndex + 1 : 0
      );
    }, 15000); 
    return () => clearInterval(timer);
  }, [story.slides.length]);

  const handleClose = () => {
    onClose();
  };

  const handleNext = () => {
    if (currentSlideIndex < story.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
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

