import '../styles/FilterPrice.css'

import { useForm } from "react-hook-form"


const FilterPrice = ({setFromTo}) => {

const {handleSubmit, reset, register} = useForm()
const submit = data => {
    const from = Number(data.from)
    const to = Number(data.to)
    setFromTo({
        from: data.from === '' ? 0 : from,
        to: data.to === '' ? Infinity : to
    })

    reset({
        from: '',
        to: ''
    })
}



  return (
    <article className="filterPrice_container">

      <div className='filterPrice_form_c'>

          <h4 className="filterPrice_title">Price</h4>

          <form className="filterPrice_formulario" onSubmit={handleSubmit(submit)}>

            <label className="filterPrice_label">
              <span className="filterPrice_from_title">From</span>
              <input className="filterPrice_input" {...register('from')} type="number" />
            </label>

            <label className="filterPrice_label">
              <span className="filterPrice_from_title">To</span>
              <input className="filterPrice_input" {...register('to')} type="number" />
            </label>

            <button className="filterPrice_btn">Search</button>
          </form>
      </div>
    </article>
  )
}

export default FilterPrice