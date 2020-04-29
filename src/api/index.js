const url = 'https://covid19.mathdro.id/api';

const fetchData = async () =>{
    try{
        const response = await fetch(url);
        if(response.ok){
            const {confirmed, recovered, deaths, lastUpdate} = await response.json()
            const modifiedData = {
                confirmed,
                recovered,
                deaths,
                lastUpdate
            }
            return modifiedData;
         }  
        
    } catch (error) {
        console.log(error)

        }   
    }


 const fetchDailyData = async ()=>{
    try {
        const response = await fetch(`${url}/daily`)
        if(response.ok){
            const data = await response.json()
            const modifiedData = data.map((dailyData)=> ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }))
            console.log(modifiedData)
          return modifiedData;
          
        }
        
    } catch (error) {
        console.log(error)
    }

}


export {fetchData, fetchDailyData};