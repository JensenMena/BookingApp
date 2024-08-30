import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import '../styles/FormRating.css'


const FormRating = ({bookSelected, setBookSelected, formIsOpen, setFormIsOpen}) => {

    const{handleSubmit, reset, register} =  useForm()

    const [ , , createReview] = useCrud()

        const submit = data => {
        const url = 'https://hotels-api.academlo.tech/reviews'

        const bodyData = {
            ...data,
            hotelId: bookSelected.hotelId
        }

        createReview(url, bodyData, true )
        reset({
            rating: '5',
            comment: ''
        })
        setBookSelected()
        setFormIsOpen(false)
    }
    const initialDate = (new Date(bookSelected?.checkIn)).getTime()
    const finalDate = (new Date(bookSelected?.checkOut)).getTime()
  
    const reservationDays = (finalDate-initialDate)/((1000 * 60 * 60 * 24))

console.log (bookSelected)

const handleExit = () => {
    setFormIsOpen(false)
}

  return ( 

    <div className={`rating_container ${formIsOpen || 'rating_close'}`}>

        <article className="rating_article">

            <span className="rating_x" onClick={handleExit}>❌</span>
            <h3 className="rating_title">reserve</h3>

            <section className="rating_container_img_namehotel">

                <img className="rating_img" src={bookSelected?.hotel.images[0].url} alt="" />
                  <h4 className="rating_namehotel">{bookSelected?.hotel.name}</h4>

                <ul className="rating_ul_date">
                   <li className="rating_li_item"> {bookSelected?.hotel.city.name}, {bookSelected?.hotel.city.country}</li>
                   <li  className="rating_li_item">Reservation Days {reservationDays} </li>
                   <li className="rating_li_item">subtotal Price $ {reservationDays * Number(bookSelected?.hotel.price)}</li>
                </ul>

            </section>

            <form className="rating_form_star" onSubmit={handleSubmit(submit)}> 
                    <label className="rating_label_star">
                        <span className="tating_title_rating">Rating</span>
                        <select className="rating_select_star" {...register('rating')}>
                            <option className="rating_option" value="5">⭐⭐⭐⭐⭐</option>
                            <option className="rating_option" value="4">⭐⭐⭐⭐</option>
                            <option className="rating_option" value="3">⭐⭐⭐</option>
                            <option className="rating_option" value="2">⭐⭐</option>
                            <option className="rating_option" value="1">⭐</option>
                        </select>
                    </label>
                    <label className="rating_comments">
                        <span className="rating_span_comments">Comments</span>
                        <textarea className="rating_textarea" {...register('comment')} name="" id=""></textarea>
                    </label>
                    <button className="rating_btn">Submit</button>
            </form>
        </article>
    </div>
  );
};

export default FormRating;
