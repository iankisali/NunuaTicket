import Stadium from '../models/stadiumModel.js'

export const createStadium = async (req, res, next) => {
    const newStadium = new Stadium(req.body)
    try{
        const savedStadium = await newStadium.save()
        res.status(200).json(savedStadium)
    } catch (error) {
        next(error)
    }
}

export const updateStadium = async (req, res, next) => {
    try{
        const updateStadium = await Stadium.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true })
        res.status(200).json(updateStadium)
    } catch (error) {
        next(error)
    }
}

export const deleteStadium = async (req, res, next) => {
    try{
        await Stadium.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel has been deleted successfully')
    } catch (error) {
        next(error)
    }
}

export const getStadium = async (req, res, next) => {
    try{
        const stadium = await Stadium.findById(req.params.id);
        res.status(200).json(stadium)
    } catch (error) {
        next(error)
    }
}

export const getStadiums = async (req, res, next) => {
    try{
        const allStadiums = await Stadium.find(req.params.id)
        res.status(200).json(allStadiums)
    } catch (error) {
        next(error)
    }
}