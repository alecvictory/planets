import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";

export class StarsController extends BaseController {
    constructor() {
        super("api/stars");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    /**
     * Sends found values to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            const stars = await starsService.find(req.query)
            return res.send(stars);
        } catch (error) {
            next(error);
        }
    }
    /**
 * Sends found values to a client by request
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
    async getById(req, res, next) {
        try {
            const stars = await starsService.findOne({ _id: req.params.id })
            return res.send(stars);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Creates a value from request body and returns it
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async create(req, res, next) {
        try {
            const stars = await starsService.create(req.body)
            res.send(stars);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await starsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            let data = await starsService.delete(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
}