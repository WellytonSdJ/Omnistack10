const axios = require('axios');
const Dev = require('../models/Dev');
const { index } = require('../models/utils/PointSchema');
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    async index( req, res ) {
        const devs  = await Dev.find()

        return res.json(devs);
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username }); //tratamento para não repetir dados já cadastrados

        if (!dev) { //tratamento para não repetir dados já cadastrados
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            let { name = login, avatar_url, bio } = (apiResponse.data);

            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }
        return res.json(dev);

    }


}