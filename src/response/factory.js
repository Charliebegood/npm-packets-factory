module.exports = {
	createResponse(message, type, data) {
		return {
			type: type,
			message: message,
			data: data
		};
	}
};