import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import 'boxicons'
import OtherHotels from "../components/HotelIdPage/OtherHotels"
import '../components/styles/HotelIdPage.css'
import MapHotel from "../components/HotelIdPage/MapHotel"
import FormReservation from "../components/HotelIdPage/FormReservation"
import SliderImgs from "../components/HotelIdPage/SliderImgs"
import Reviews from "../components/HotelIdPage/Reviews"
import GenerateStart from "../components/Shared/GenerateStart"


 
const HotelIdPage = () => {

    const {id} = useParams()

    const [hotel, getHotel  ] = useFetch()

    useEffect( () => {
      const url = `https://hotels-api.academlo.tech/hotels/${id}`  
      getHotel(url)

    },[id])
    
    console.log (hotel)
   

  return (
    <article className="hpage_container">
        <h2 className="hpage_title">{hotel?.name}</h2>
        <div className="hpag_rating">

            <GenerateStart 
            rating = {hotel?.rating}
            />            
           <span>{hotel?.rating}</span>
        </div>

        <div className="hpage_img_map_container">
            
            
            <SliderImgs hotel={hotel}/> 

           <div className="hpage_div_map">
            {
                hotel && (
                    
                    <MapHotel
                    lat = {Number(hotel?.lat)}
                    lon = {Number(hotel?.lon)}
                    />

                )
            }
            </div>
        </div>

        <div className="hpage_information">

            <div className="hpage_city">{hotel?.city.name}, {hotel?.city.country}</div>
            <div className="hpage_div_address">
                <i className='bx bx-map hpage_addressl'></i>
                <address className="hpage_addressl">{hotel?.address} </address>
            </div>
            <br />
            <p className="hpage_description">{hotel?.description}</p>

        </div>

        <div className="hpage_otherHotels">
            <section>
            {
                localStorage.getItem('token')
                ? (
                    <FormReservation 
                    hotelId = {id}
                    />

                )
                :  <p> If you want to make reservation, please <Link to='/Login'> Login</Link></p>
            }

            </section>
            <div>
              <Reviews 
                hotelId = {id}
              />
            </div>

            <OtherHotels 
            city={hotel?.city}
            id = {id}
            />
        </div>
 
    </article>
  )
}

export default HotelIdPage