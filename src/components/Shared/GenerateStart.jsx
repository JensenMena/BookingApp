
import 'boxicons'
const GenerateStart = ({rating}) => {

    const starNumber = (parseInt(rating))


const size = []
for(let i = 1; i<= starNumber; i++) {
    size.push(i)
}
console.log(size)

  return (
    <div>
        {
            size.map(posicion => (
                <i key={posicion} className="bx bxs-star"></i>
            ))
        }

    </div>
  )
}

export default GenerateStart