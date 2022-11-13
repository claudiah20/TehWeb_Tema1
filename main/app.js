const distance = (a, b) => {
	if(!(typeof a === "string" && typeof b === "string" || a instanceof String && b instanceof String)){
		throw new Error("InvalidType");
	}
	if (a === "" && b === "") {
		return 0;
	}
	if (a.length <= b.length) {
		const a1 = a.split("");
		const b1 = b.split("");
	
		for (let i = 0; i < a1.length; i++) {
		  for (let j = 0; j < b1.length; j++) {
			if (a1[i] === b1[j]) {
			  b1.splice(j, 1);
			}
		  }
		}
		return b1.length;
	  }
	if (a.length > b.length) {
		const a1 = a.split("");
		const b1 = b.split("");
	
		for (let i = 0; i < b1.length; i++) {
		  for (let j = 0; j < a1.length; j++) {
			if (b1[i] === a1[j]) {
			  a1.splice(j, 1);
			}
		  }
		}
		return a1.length;
	  }
	
}

module.exports.distance = distance