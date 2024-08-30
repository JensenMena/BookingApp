import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"
import '../styles/FilterCity.css'



const FilterCity = ({setFromTo, setNameSearched}) => {
    

    const [cities, getCities] = useFetch()

    useEffect(() => {
     const url = 'https://hotels-api.academlo.tech/cities'
     getCities(url)
    }, [])

    const dispatch = useDispatch()
    
    const handleCityFilter = (cityId) => {
        const url = `https://hotels-api.academlo.tech/hotels${cityId ? `?cityId=${cityId}` : ''}`
        dispatch(getHotelsThunk(url))
        setFromTo({
            from:0,
            to: Infinity
        })
        setNameSearched('')

    }



  return (
    <article className="filterCity_container">

        <h4 className="filterCity_title">Cities</h4>
        
        <ul className="filterCity_ul">
            <li className="filterCity_li" onClick={() => handleCityFilter()}>All Cities</li>
            {
                cities?.map(city  => (
                  
                    <li className="filterCity_li" onClick={() => handleCityFilter(city.id)} key={city.id}>{city.name}</li>

                ))
            }
        </ul>
    </article>
  )
}

export default FilterCity