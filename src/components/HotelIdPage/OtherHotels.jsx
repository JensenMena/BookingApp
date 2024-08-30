
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({city, id}) => {

const[ hotelsByCity, getHotelByCity ] = useFetch()

useEffect( () => {
    if(city){
        const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
    getHotelByCity(url)
}

}, [city]) 

  return (
    <section className='oh_container'>
        <h3 className='oh_title'>Other Hotels in <span className='oh_title_city'>{city?.country }</span></h3>
        <div className='oh_cards'>
            {
             hotelsByCity?.filter(hotel => hotel.id !== Number(id)).map( hotel => (
                <HotelCard 
                    key={hotel.id}
                 hotel ={hotel}
                />
             ))   
            }
        </div>

    </section>
  )
}

export default OtherHotels