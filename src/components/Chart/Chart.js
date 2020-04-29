import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import {Bar, Line} from 'react-chartjs-2'
import './Chart.css'


const Chart = () =>{
    const [dailyData, setDailyData] = useState([])
    
    useEffect (()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }
      
        fetchAPI();
    },[])
     
    const lineChart = (
        
        dailyData

           
        ? (
            <Line
            data={{
                labels: dailyData.map(({date})=> date),
                datasets: [{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label: "infected",
                    borderColor: '#3333ff',
                    
                    fill: true,
                    
                },{
                data: dailyData.map(({deaths})=>deaths),
                label: "deaths",
                borderColor: 'red',
                borderColor: 'rgba(255,0,0,0.5)',
                fill: true,
                fontColor: 'black'
                }],
            }}
            />) : null
            
        
    )


    
    return (
        <div className="chart-container">
            {lineChart}
        </div>
    )
}

export default Chart