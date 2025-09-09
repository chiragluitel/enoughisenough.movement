import { useEffect, useState } from "react"
import type { PostData } from "../../types"
const useGetAllPosts = () => {
    const [posts, setPosts] = useState<PostData[]> ([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=> {
        const fetchFunction = async () => {
         try{
            setError(null);
            const result = await fetch(`${import.meta.env.VITE_POSTS_BASE_URL}/getAllPosts`)
            if(!result.ok){
                throw new Error(`Fetch Failed, result not OK ${result.status}` );
            }
            const data = await result.json();
            setPosts(data);
         }catch(error: any){
            console.error('An Error occured when fetching', error);
            setError(error)
         }finally{
            setLoading(false)
         }
            
        }

        fetchFunction();
    }, [])

    return{posts, loading, error};
}

export default useGetAllPosts