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
        
        

    } catch (error){

    }
}


export {fetchData};