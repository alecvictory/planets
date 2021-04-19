import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
    async find(query = {}) {
        return await dbContext.Stars.find(query)
    }
    async findOne(id) {
        let data = await dbContext.Stars.findOne({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async create(body) {
        return await dbContext.Stars.create(body)
    }
    async edit(body) {
        let data = await dbContext.Stars.findOneAndUpdate({ _id: body.id }, { new: true })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async delete(id) {
        let data = await dbContext.Stars.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        return 'Successfully Deleted'
    }
}

export const starsService = new StarsService();