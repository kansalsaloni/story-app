import React, { useState ,useContext} from 'react'
import '../Style/CreateStoryPopupStyle.css';
import { PopupContext } from '../util/PopupContext';

function CreateStoryPopUp() {
    const [addSlider,setAddSlider]=useState(['']);
    const { closeCreateStoryPopup } = useContext(PopupContext);

    
    const handleAddSlider = () => {
        if(addSlider.length<6)
        setAddSlider([...addSlider, '']);
    };
    const handleRemoveSlider = (indexToRemove) => {
        setAddSlider(addSlider.filter((_, index) => index !== indexToRemove));
    };

    const handleCreateStoryDataSubmit=()=>{

    }
    const isEditing=false;
  return (
    <div className="create-story-popup-overlay">
        <div className="create-story-popup">
            <button className='close-icon' onClick={()=>closeCreateStoryPopup(isEditing?'editing':'')} >X</button>
            <p className='text popup-text'>Add upto 6 slides</p>
            <p className='text popup-mobile-text'>Add Story to feed</p>
            <div className='create-story-form-container'>
                <div className='add-slider-container'>
                    {addSlider.map((slider, index) => (
                        <div className='add-slider'>
                            {index!==0&&(
                            <button className='add-slider-close-icon' onClick={()=>handleRemoveSlider(index)}>X</button>
                            )}
                            <div className='add-slider-button' key={index}>
                              <p>Slider</p>
                            <p>{`${index+1}`}</p> 
                                
                            </div>
                        </div>
                    ))}
                    {addSlider.length<6&&(
                        <div className='add-slider-button' onClick={handleAddSlider}>
                                   <p>Add</p>
                                   <p>+</p>
                                 
                        </div>
                    )}
                </div>
                <form onSubmit={handleCreateStoryDataSubmit} className='create-story-form'>
                    <div className='create-story-form-row'>
                        <label htmlFor="heading">Heading:</label>
                        <input type="text" id="heading" placeholder="Your Heading" 
                        name='heading' />
                    </div>
                    <div className='create-story-form-row'>
                        <label htmlFor="description">Description:</label>
                        <textarea type="text" id="description" placeholder="Story Description" 
                        name='description' />
                    </div>
                    <div className='create-story-form-row'>
                        <label htmlFor="image">Image:</label>
                        <input type="text" id="image" placeholder="Add Image Url" 
                        name='image' />
                    </div>
                    <div className='create-story-form-row'>
                        <label htmlFor="category">Category:</label>
                        <select
                id="category"
                //   name="category"
                //   value={category}
                //   onChange={handleCategoryChange} 
                >
                <option value="" disabled selected hidden >Select Category</option>
                <option value="Food">Food</option>
                <option value="Health and fitness">Health and fitness</option>
                <option value="Travel">Travel</option>
                <option value="Education">Education</option>
                <option value="Movies">Movies</option>
                </select>
                    </div>
                    <div className='create-story-form-buttons-container'>
                        <div className='create-story-form-buttons'>
                            <button className='btn previous-button'>Previous</button>
                            <button className='btn next-button'>Next</button>
                        </div>
                        <button className='btn post-button'>Post</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateStoryPopUp
