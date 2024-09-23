import React ,{useState} from 'react'
import '../Style/FilterCardsStyle.css';
import AllImage from '../assets/All.png';
import FruitsImage from '../assets/Fruits.png'
import IndiaImage from '../assets/India.png'
import WorldImage from '../assets/World.png'
import MedicalImage from '../assets/Medical.png'


function FilterCards() {
    const categories = [
        { id: 1, label: 'All', imageUrl:AllImage },
        { id: 2, label: 'Medical', imageUrl: MedicalImage },
        { id: 3, label: 'Fruits', imageUrl: FruitsImage },
        { id: 4, label: 'World', imageUrl: WorldImage },
        { id: 5, label: 'India', imageUrl: IndiaImage }
      ];
      const [activeCategory, setActiveCategory] = useState(1);

      const handleCardClick = (categoryId) => {
        setActiveCategory(categoryId);
      };
  return (
    <div className='filter-cards-container'>
       {categories.map((category) => (
        <div
          key={category.id}
          className={`filter-card ${activeCategory === category.id ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${category.imageUrl})`,
            backgroundSize: 'cover'
          }}
          onClick={() => handleCardClick(category.id)}
        >
         <div className='overlay'>
            
         </div>

          <p className='filter-card-text'>{category.label}</p>
        </div>
      ))}
      </div>
  )
}

export default FilterCards;
