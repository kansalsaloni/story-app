import React, { useState,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Style/LoginRegisterFormStyle.css';
import '../Style/App.css'
import '../Style/Header.css'
import { PopupContext } from '../util/PopupContext';

function LoginRegisterForm({popupHeading}) {
  const { closePopup } = useContext(PopupContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const [errors, setErrors] = useState({});

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleFieldFocus = (fieldName) => {
        setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
      };
    
      const validateForm = () => {
        const newErrors = {};
        if(!formData.username && !formData.password)
        {
            newErrors.allfiled = 'Enter all valid value';
            return newErrors;
        }
        if (!formData.username) {
          newErrors.username = 'Username is required';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        }
        return newErrors;
      };
      const formSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          console.log(errors)

          return;
        }
        setErrors({});
        try {

        } catch (error) {
        }
        finally {
        }
    
      };
  return (
    <div className="login-register-popup-overlay">
    <div className="login-register-popup">
      <button className='popup-close-icon' onClick={closePopup}>X</button>
      <h2>{popupHeading}</h2>
      <form onSubmit={formSubmit}>
      <div className='form-fields'> 
      <div className="form-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" 
            name='username'
              value={formData.username}
              onChange={handleFormChange}
              onFocus={() => handleFieldFocus('username')}
              error={errors.username} />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                     name='password'
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleFormChange}
                error={errors.password}
                onFocus={() => handleFieldFocus('password')}
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          </div>
          {errors.allfiled && <p className="error-message">{errors.allfiled}</p>}
          {errors.username && <p className="error-message">{errors.username}</p>}
          {errors.password && <p className="error-message">{errors.password}</p>}

          <div className="form-row-button">
          <button type="submit" className='btn' style={{'marginTop':'30px'}}>{popupHeading}</button>
          </div>
      </form>
    </div>
  </div>
  )
}

export default LoginRegisterForm
