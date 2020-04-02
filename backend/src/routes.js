const express = require('express');

const OngController = require( './controllers/OngController' );
const IncidentController = require( './controllers/IncidentController' );
const ProfileController = require( './controllers/ProfileController' );
const SessionController = require( './controllers/SessionController' );

const routes = express.Router();

routes.post('/sessions', SessionController.create );

routes.get( '/ongs', OngController.index );
routes.post( '/ongs', OngController.create );

routes.get( '/profile', ProfileController.index );

routes.get( '/incidents', IncidentController.index );
routes.post( '/incidents', IncidentController.create );
routes.delete( '/incidents/:id', IncidentController.delete );

module.exports = routes;

/**
routes.post( '/users', (request, response) => {
    // const params = request.query; // utilizado para obter os query params, requer get & URL /users
                                     // no Insomnia GET /users?name=Diego ou GET /users?name=Diego&idade=25
    // const params = request.params; // utilizado para obter os route params, mas requer GET & URL /users/:id
    const body = request.body; // utilizado para submeter informações, por exemplo, criação de usuários, requer POST & URL /users
    
    console.log(body);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Cleiton Souza'
    });

}); // end HTTP command
*/
