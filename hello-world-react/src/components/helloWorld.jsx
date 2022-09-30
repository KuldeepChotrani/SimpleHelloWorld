import React,{ useState,useEffect } from 'react'
import axios from 'axios';
const HelloWorld = () => {
    const [value, setValue] = useState('')
    useEffect(() => {
        axios({
            url: `/hello`,
            method: 'get'}).then((response)=>{
              console.log(response)
              if(response.data){
                setValue(response.data)
              }
             
            })
    }, [])
    return (
        <div>
         <h1>{value}</h1>
        </div>
      )
}
export default HelloWorld