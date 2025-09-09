import { Request, Response } from "express";
import { query } from "../database";

export const getAllPosts = async (req: Request, res: Response) => {
    const build_query = 
    `
    SELECT
    p.post_id AS id,
    JSONB_BUILD_OBJECT(
        'username', u.username,
        'displayName', u.display_name,
        'avatarUrl', u.avatar_url
    ) AS author,
    p.posted_at AS timestamp,
    p.text_content AS text,
    m.images,
    m.media,
    pwc.likes_count AS likes,
    pwc.comments_count AS comments
    FROM post_with_counts pwc
    JOIN post p ON p.post_id = pwc.post_id
    JOIN app_user u ON u.user_id = p.author_id
    LEFT JOIN post_media_arrays m ON m.post_id = p.post_id
    ORDER BY p.posted_at DESC;  -- Optionally, order by timestamp or any other field
    `
    try{
        const result = await query(build_query);
        res.status(200).send(result.rows)
    }catch(error:any){
        res.status(500).json({
            message: 'An Unspecified Error Occured, sorry :('
        })
    }
}
export const createNewPost =  async (req: Request, res: Response) => {
    const {} = req.body()
    const build_query = `
    
    `
    try{
        const result = await query(build_query, []);
        res.status(201)
    }catch(error:any){
        res.status(500).json({
            message: 'An Unspecified Error Occured, sorry :('
        }) 
    }
    
}