import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHotelsThunk } from "../store/slices/products.slice"
import HotelCard from "../components/HomePage/HotelCard"
import '../components/styles/HomePage.css'
import FilterName from "../components/HomePage/FilterName"
import FilterCity from "../components/HomePage/FilterCity"
import FilterPrice from "../components/HomePage/FilterPrice"

const HomePage = () => {
   const products = useSelector(states => states.products)
   const dispatch = useDispatch()
   const [nameSearched, setNameSearched] = useState('')
   const [fromTo, setFromTo] = useState({
    from:0,
    to:Infinity
   })
   const [isOpen, setIsOpen] = useState(false)

   useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
   },[])

   const cbFilter = (hotel) => {  
    //filter by name
      const filterName = hotel.name.toLowerCase().includes(nameSearched)
      //filter by price
      const price = Number(hotel.price)
      const filterByPrice = price >=  fromTo.from && price <= fromTo.to

      return filterName && filterByPrice

   }


  return (
    <div className="homePage_container">

      <section className={`homepage_hotelcard_filteres ${isOpen && "open"}`}>
        <div className="homePage_x" onClick={() => setIsOpen(!isOpen)}> ❌ </div>
        <h3 className="homePage_title_filter">Filters</h3>
        <FilterPrice 
        setFromTo = {setFromTo}
        />
        <FilterCity 
        setFromTo = {setFromTo}
        setNameSearched = {setNameSearched}
        />
      </section>

      <div className="homePage_2col">
          <div className="homePage_cabecera">


            <FilterName 
              setNameSearched = {setNameSearched}
            />
           <img className="homepage_imgFilter" src="/filtrar.png" alt="" onClick={() => setIsOpen(!isOpen)} />

          </div>


            <div className="homePage_container_card">         
                  {
                    products?.filter(cbFilter).map(hotel => (
                      <HotelCard 
                      key={hotel.id}
                      hotel={hotel}
                      />
                      ) ) 
                    }
          
              </div>
        </div>
    </div>
  )
}

export default HomePage