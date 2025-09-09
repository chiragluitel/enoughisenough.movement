import { useEffect, useState } from "react"
import type { EventData } from "../../types"
const useGetAllEvents = () => {
    const [events, setEvents] = useState<EventData[]> ([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=> {
        const fetchFunction = async () => {
         try{
            setError(null);
            const result = await fetch(`${import.meta.env.VITE_EVENTS_BASE_URL}/getAllEvents`)
            console.log('RESULT: ', result)
            if(!result.ok){
                throw new Error(`Fetch Failed, result not OK ${result.status}` );
            }
            const data = await result.json();
            setEvents(data);
            console.log('Data:', data)
         }catch(error: any){
            console.error('An Error occured when fetching', error);
            setError(error)
         }finally{
            setLoading(false)
         }
            
        }

        fetchFunction();
    }, [])

    return{events, loading, error};
}

export default useGetAllEvents