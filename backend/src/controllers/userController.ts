import { Request, Response } from "express"
import { query } from "../database"
import { build } from "pdfjs-dist"

export const getUserInfo = async (req: Request, res: Response)  => {
    const {userId} = req.query
    try{
        const build_query = `
        SELECT
            id,
            username,
            "displayName",
            email,
            "avatarUrl",
            bio,
            location,
            "joinDate",
            posts_count AS "postsCount",
            events_count AS "eventsCount",
            followers_count AS "followersCount",
            following_count AS "followingCount"
        FROM user_profile_view
        WHERE id = $1;
        `
        const result = await query(build_query, [userId])
        res.status(200).send(result.rows)
    }catch(error:any){
        res.status(500).json({
            message: 'An Unknown Error Occured :('
        })
    }
    
}