const helpers = require('../response').helpers;

class RequestError extends Error {
	constructor (type, message) {
		super(message);
		this.type = type;
	}
}

const ErrorTypes = {
	internal: {code: 0, sender: helpers.sendInternalError },
	invalid: {code: 1, sender: helpers.sendInvalidRequest },
	unauthorized: {code: 2, sender: helpers.sendUnauthorizedRequest },
	unauthenticated: {code: 3, sender: helpers.sendUnauthenticatedRequest }
};

function catchError(res, err) {
	if (err instanceof RequestError) {
		return err.type.sender(res, err.message);
	} else {
		return res.sendInternalError(res, err);
	}
}

module.exports = {
	RequestError,
	ErrorTypes,
	catchError
};