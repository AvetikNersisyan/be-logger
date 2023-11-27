import { Logger } from "../models/logger.js"
import { getPagination } from "./utils.js";

const saveLog = async ( req, res, next ) => {

   const { endpoint, response_text, status } = req.body;
    console.log(req.body, 'body');
    const candidate = await Logger.create({
        endpoint,
        response_text,
        status,
    })

    return res.send({ success: true, data: candidate })
}

const logs = async ( req, res, next ) => {

   const { limit, offset } = getPagination(req.query.page, req.query.limit);
    const candidate = await Logger.findAll({
        limit,
        offset,
    })

    return res.send({ success: true, data: candidate })
}



export const loggerController = {
    saveLog,
    logs,
}
