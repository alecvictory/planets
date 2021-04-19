import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
    async find(query = {}) {
        return await dbContext.Planets.find(query)
    }
    async findOne(id) {
        let data = await dbContext.Planets.findOne({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async create(body) {
        return await dbContext.Planets.create(body)
    }
    async edit(body) {
        let data = await dbContext.Planets.findOneAndUpdate({ _id: body.id }, { new: true })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async delete(id) {
        let data = await dbContext.Planets.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        return 'Successfully Deleted'
    }
}

export const planetsService = new PlanetsService();