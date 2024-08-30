import '../styles/BookCard.css'

const BookCard = ({book, deleteReservation, setBookSelected, setFormIsOpen}) => {

  const initialDate = (new Date(book.checkIn)).getTime()
  const finalDate = (new Date(book.checkOut)).getTime()

  const reservationDays = (finalDate-initialDate)/((1000 * 60 * 60 * 24))

  

  const handleDeleted = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${book.id}`
    deleteReservation( url, book.id, true)


  }
  
  const handleRate = () => {
    setBookSelected(book)
    setFormIsOpen(true)

  }
    return (
    
      <section className="book_container">
          <header className="book_container_header">
            <img className="book_img" src={book.hotel.images[0].url} alt="" />
          </header>
          <div className='book_center'>
          <div className='book_container_title'>
              <h3 className="book_title">{book.hotel.name}</h3>

              <div className="book_city_country">{book.hotel.city.name}, {book.hotel.city.country}</div>

              <p className="book_comment" onClick={handleRate}>Rate and comment this visit... ¡CLICK HERE!</p>
         </div>

          <ul className="book_ul">
              <li className="book_item"><span className="book_label">Reservations Days </span><span className="book_container_value">{reservationDays}</span></li>
              <li className="book_item"><span className="book_label">Subtotal Price </span><span className="book_container_value">USD$ {reservationDays * Number(book.hotel.price)}</span></li>
          </ul>
          </div>
          <button className="book_container_btn" onClick={handleDeleted} ><i className='bx bx-trash'></i></button>
    </section>
  
    ) 
  }
  
  export default BookCard