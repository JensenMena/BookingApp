import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"


const useCrud = () => {

    const [response, setResponse] = useState()

    //READ
    const getApi = (url, withToken) => {

        axios.get(url, withToken ?  getConfigToken() : {}) //aquí reemplazamos el config, con la funcion que creamos en getConfigToken.
            .then(res => setResponse(res.data) )

            .catch(err => {
                console.log(err)
                if(err?.response.status === 401 || err?.response.status === 403 ) {

                    localStorage.removeItem('token')
                    localStorage.removeItem('userLogged')

                }
            
            }
            )

    }

    //CREATE
    const postApi = (url, data, withToken) => {
        
        axios.post(url, data, withToken ?  getConfigToken() : {})
            .then(res => {
                console.log(res.data)
                setResponse( response ? [...response, res.data] : [res.data]) // con esto validamos que response no esté como undefine
            })

            .catch(err => {
                console.log(err)
                if(err?.response.status === 401 || err?.response.status === 403 ) {

                    localStorage.removeItem('token')
                    localStorage.removeItem('userLogged')

                }
            
            }
            )

    }

    //DELETE
    const deleteApi = (url, id, withToken ) => {

        axios.delete(url, withToken ?  getConfigToken() : {})
            .then (res => {
                console.log(res.data)        
                setResponse(response.filter(e => id !== e.id))
            })
            .catch(err => {
                console.log(err)
                if(err?.response.status === 401 || err?.response.status === 403 ) {

                    localStorage.removeItem('token')
                    localStorage.removeItem('userLogged')

                }
            
            }
            )
    }

    //UPDATE
    const updateApi = () => {

            // nos toca hacerlo si deseamos ocuparlo.
    }

    return[response, getApi, postApi, deleteApi, updateApi]
}

export default useCrud