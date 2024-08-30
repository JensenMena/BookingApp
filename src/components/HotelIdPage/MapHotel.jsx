import { Map, Marker } from "pigeon-maps"


const MapHotel = ({lat, lon}) => {
  return (
  
    <Map center = {[lat, lon]} width={( '100%'*100)/100} height={300} >
        <Marker width={50} 
        anchor={[lat, lon]}
        color="#fa4040"
        />
    </Map>
   
  )
}

export default MapHotel