import { useState } from 'react'
import '../styles/SliderImgs.css'



const SliderImgs = ({hotel}) => {
    const [imgSelected, setImgSelected] = useState(0)

    const objStyle = {
        transform: `translateX(calc((-${imgSelected}/${hotel?.images.length})*100%))`,
        width: `${hotel?.images.length * 100}%`
    }

const handleNextImg = () => {
    const lengthImgs = hotel?.images.length -1
    setImgSelected(state => (state + 1 <= lengthImgs ) ? state +1 : state)
}


const hadlePrevImg = () => {
    if(imgSelected - 1 >= 0){
        setImgSelected(imgSelected -1)
    }
}
  return (
    <div className='slider'>
        <button onClick={hadlePrevImg} className='slider_btn'>&lt;</button>
        <div className='slider_interior'>
            <div className='slider_movable' style={objStyle}>
                {
                    hotel?.images.map(imgInfo => (
                        <div  className='slider_img_container' key={imgInfo.id}>
                            <img className='slider_img' src={imgInfo.url} alt="" />
                        </div>

                    ) )
                }
            </div>

        </div>
        <button onClick={handleNextImg} className='slider_btn slider_btn_next'>&gt;</button>
    </div>
  )
}

export default SliderImgs