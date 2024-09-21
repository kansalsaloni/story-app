import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isCreateStoryPopupOpen, setIsCreateStoryPopupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate();

  const toggleRegisterPopup = () => {
    setIsRegisterPopupOpen(prev => !prev);

  };
  const toggleCreateStoryPopup = () => {
    setIsCreateStoryPopupOpen(prev => !prev);

  };
  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(prev => !prev);

  };

  const closePopup = () => {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    navigate('/')

  };
const closeCreateStoryPopup=(isEditing)=>{
  setIsCreateStoryPopupOpen(false);
  if(isEditing==='editing')
  {
    navigate('/your-story')
  }else{
  navigate('/');
  }
}

  return (
    <PopupContext.Provider value={{isModalOpen,setIsModalOpen, isRegisterPopupOpen, isLoginPopupOpen, toggleRegisterPopup, toggleLoginPopup,closePopup,closeCreateStoryPopup,isCreateStoryPopupOpen,toggleCreateStoryPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
