
import { useNavigate } from 'react-router-dom'
import '../styles/HotelCard.css'
import GenerateStart from '../Shared/GenerateStart'

const HotelCard = ({hotel}) => {

  const navigate =useNavigate()
  
  const navigateHotelid = () => {
    navigate(`/hotel/${hotel.id}`)
  }

 


  return (

    <article className='hcard_article'>
        <header className='hcard_header'>
            <img className='hicard_img' src={hotel?.images[0].url} alt="" /> 
        </header>
            
        <section className='hcard_section'>
            <h3 className='hcard_title'>{hotel?.name}</h3>
            <GenerateStart 
              rating = {hotel?.rating}
            />
            <div className='hcard_rating'>
              
              {hotel?.rating}</div>
           
            <div className='hcard_city'>{hotel?.city.name}, {hotel?.city.country}</div>
            <div className='hcard_price'>$ {hotel?.price}</div>
        </section>
        <footer className='hcard_footer'>
            <button onClick={navigateHotelid} className='hcard_button'>See more...</button>
        </footer>

    </article>
  )
}

export default HotelCard