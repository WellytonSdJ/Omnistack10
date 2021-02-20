const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req, res) => {
    const { github_username } = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name, avatar_url, bio } = (apiResponse.data);

    return res.json({message: 'Olá Well'});
})

module.exports = routes;