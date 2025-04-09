"use client"

import axios from "axios";
import { useEffect, useState } from "react"

export default function Display(){
    const[data,setData] = useState([]);

    const loadData=async()=>{
    let api = "http://localhost:3000/api/Inquiry";
    try {
        const response = await axios.get(api);
        setData(response.data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    }
    useEffect(()=>{
        loadData();
    },[])

    const res = data.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.query}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <br />  
            <div className="display">
            <h1>Display Page</h1>
            <table style={{border:"2px solid black"}}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Query</th>
                    </tr>
                </thead>
                <tbody>
                    {res}
                </tbody>
            </table>
            </div>
            <br /><br />
        </>
    )
}