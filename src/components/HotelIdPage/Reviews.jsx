import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import '../styles/Reviews.css'


const Reviews = ({hotelId}) => {
    useFetch

const [hotelResponse, getHotel] = useFetch()

useEffect(() => {
  const url = `https://hotels-api.academlo.tech/reviews?hotelId=${hotelId}`
  getHotel(url)
  
}, [hotelId])

console.log(hotelResponse)

  return (
    <div className="comments_container">
        <h3 className="comments_title">Comments</h3>
        <div className="comments_container_comments">
            {
                hotelResponse?.results.map( data => (
                    <ul className="comments_ul" key={data.createdAt}>
                        <li className="comments_li comment_name">{data.user.firstName} </li>
                        <li className="comments_li">⭐⭐⭐⭐</li>
                        <li className="comments_li"> Rating ➡➡ {data.rating}</li>
                        <li className="comments_li comments_comment">{data.comment}</li>
                    </ul>

                ))
            }
         </div>
        
    </div>
  )
}

export default Reviews