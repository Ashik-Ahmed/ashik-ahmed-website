const { default: connectMongo } = require("../../../../database/connectMongo")

exports.getUsers = async (req, res) => {
    try {
        await connectMongo()
    } catch (error) {
        res.status(501).json({
            status: 'Failed',
            error: 'Server Error'
        })
    }
}