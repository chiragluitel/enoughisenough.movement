import { Request, Response } from "express";
import { query } from "../database";
import dotenv from "dotenv";
dotenv.config();

export const getAllEvents = async (req: Request, res: Response) => {
    const build_query = 
    `
    SELECT
    e.event_id AS id,
    e.title,
    e.description,
    to_char(e.starts_at AT TIME ZONE 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"')::text AS "date",
    to_char(e.starts_at, 'HH24:MI') AS "time",
    e.location,
    JSONB_BUILD_OBJECT(
        'username', u.username,
        'displayName', u.display_name,
        'avatarUrl', u.avatar_url
    ) AS organizer,
    e.image_url AS "imageUrl",
    e.attendees,
    e.max_attendees AS "maxAttendees",
    e.category::text AS category,
    e.status::text AS status
    FROM event_with_rollups e
    JOIN app_user u ON u.user_id = e.organizer_id
    ORDER BY e.starts_at DESC;
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