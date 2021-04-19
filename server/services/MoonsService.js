import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
    async find(query = {}) {
        return await dbContext.Moons.find(query)
    }
    async findOne(id) {
        let data = await dbContext.Moons.findOne({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async create(body) {
        return await dbContext.Moons.create(body)
    }
    async edit(body) {
        let data = await dbContext.Moons.findOneAndUpdate({ _id: body.id }, { new: true })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async delete(id) {
        let data = await dbContext.Moons.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        return 'Successfully Deleted'
    }
}

export const moonsService = new MoonsService();