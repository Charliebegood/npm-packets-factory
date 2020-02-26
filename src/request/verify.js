module.exports = {
	checkData(data) {
		for (key in data) {
			if (data[key] === null ||
				data[key] === undefined || 
				data[key] === "") {
				return false;
			}
		}
		return true;
	},

	checkMongoId(id) {
		const checkRegex = new RegExp("^[0-9a-fA-F]{24}$");

		return checkRegex.test(id);
	},

	checkEmail(email) {
		const checkRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

		return checkRegex.test(email);
	}
}