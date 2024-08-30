import { useRef } from "react"
import '../styles/FilterName.css'


const FilterName = ({setNameSearched}) => {

    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setNameSearched(inputSearch.current.value.trim().toLowerCase())

    }


  return (
   

    <div className="filterName_container">
        <form className="filterName_form" onSubmit={handleSubmit} action="">
            <input className="filterName_input" ref={inputSearch} type="text" />
            <button className="filterName_btn">Search</button>
        </form>
    </div>
  )
}

export default FilterName