const types = require('./types');
const factory = require('./factory');

function sendInternalError(res, err) {
	console.error(err);
	res.status(500);
	res.json(factory.createResponse("Couldn't process the request.", types.error, {}));
	return 84;
};

function sendInvalidRequest(res, message) {
	res.status(400);
	res.json(factory.createResponse(message || "Invalid request.", types.error, {}));
	return 84;
}

function sendUnauthenticatedRequest(res, message) {
	res.status(401);
	res.json(factory.createResponse(message || "Unauthenticated request.", types.error, {}));
	return 84;
}

function sendUnauthorizedRequest(res, message) {
	res.status(401);
	res.json(factory.createResponse(message || "Access denied.", types.error, {}));
	return 84;
}

module.exports = {
	sendInternalError,
	sendInvalidRequest,
	sendUnauthenticatedRequest,
	sendUnauthorizedRequest
};