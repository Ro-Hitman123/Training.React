import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetData(url) {
    const [data, setData]=useState([])
    const GetData = () => {
        try{
            axios.get(`https://gastro-backend.e-aribt.com/api/${url}`).then(res => {
                console.log(res.data);
                setData([...res.data]);
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        GetData();
    }, [])
    return data
}
export default GetData
