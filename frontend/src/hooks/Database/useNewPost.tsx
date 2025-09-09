import { useState } from "react"
import type { PostData } from "../../types";

const useNewPost = () => {
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null)
    const CreateNewPost = async (post: PostData) => {
        try{
            setError(null)
            const result = await fetch(`${import.meta.env.VITE_BASE_POST_URL}/createNewPost`, {
                method: 'POST',
                headers: {'Conent-Type' : 'application/json'},
                body: JSON.stringify({
                    'post_author': post.author,
                    'post_text' : post.text,
                    'post_images': post.images,
                    'post_media' : post.media, 
                })
            })

            if(!result.ok){
                throw new Error(`Received NOK Result ${result}`)
            }
        }catch(error:any){
            console.error('An Error Occured: ', error)
        }finally{
            setLoading(false);
        }
    }
    return {CreateNewPost, loading, error}
}

export default useNewPost