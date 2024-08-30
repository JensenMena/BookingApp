
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'
import '../styles/FormReservation.css'

const FormReservation = ({hotelId}) => {

const {register, handleSubmit, reset} = useForm()

const [  , , createBooking] = useCrud()

const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings'

    const objData = {...data, hotelId}

    createBooking(url, objData, true )
    reset({
        checkIn: '',
        checkOut: ''
    })

}



  return (  
    <form className='form_reservation_container' onSubmit={handleSubmit(submit)}> 
        <h3 className='form_reservation_title'>If you want to book, please give me your:</h3>
        <label className='form_reservation_label' >
            <span className='form_reservation_check'>Check-in </span>
            <input className='form_reservation_input' {...register('checkIn')} type="date" />
        </label>
        <label className='form_reservation_label'  >
            <span className='form_reservation_check'>Check-out</span>
            <input className='form_reservation_input' {...register('checkOut')} type="date" />
        </label>
        <button className='form_reservation_btn'>Reserve a romm!</button>
    </form>
  )
}

export default FormReservation