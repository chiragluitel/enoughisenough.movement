import { useEffect, useState } from "react"
import type { UserProfile } from "../../types"
const useUserInfo = (userId: string) => {
    const [userinfo, setUserinfo] = useState<UserProfile> ()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchFunction = async () => {
         try{
            setError(null);
            const result = await fetch(`${import.meta.env.VITE_USERS_BASE_URL}/getUserInfo?userId=${userId}`)
            if(!result.ok){
                throw new Error(`Fetch Failed, result not OK ${result.status}` );
            }
            const data = await result.json();
            setUserinfo(data[0]);
         }catch(error: any){
            console.error('An Error occured when fetching', error);
            setError(error)
         }finally{
            setLoading(false)
         }
            
        }

        fetchFunction();
    }, [])

    return{userinfo, loading, error};
}

export default useUserInfo