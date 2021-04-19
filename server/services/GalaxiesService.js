import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
    async find(query = {}) {
        return await dbContext.Galaxies.find(query)
    }
    async findOne(id) {
        let data = await dbContext.Galaxies.findOne({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async create(body) {
        return await dbContext.Galaxies.create(body)
    }
    async edit(body) {
        let data = await dbContext.Galaxies.findOneAndUpdate({ _id: body.id }, { new: true })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
    }
    async delete(id) {
        let data = await dbContext.Galaxies.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest('Invalid Id')
        }
        return 'Successfully Deleted'
    }
}

export const galaxiesService = new GalaxiesService();