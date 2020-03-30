const connection = require('../database/connection').default;

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorizations;

        const incidents = await connection('incidents').where('ong_id', ong_id)
            .where('ong_id', ong_id)
            .select('*');

            return response.json(incidents);
    }
}