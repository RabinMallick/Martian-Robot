const Mars = require("../mars.js");
let expect = require('chai').expect

describe("Sending instructions to Mars to operate on my robot", function () {
	it("The app returns the information of my Robots", function () {
		const mars = new Mars();
		const instructions = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
		const result = mars.operate(instructions);

		expect(result).to.equal("1 1 E\n3 3 N LOST\n2 3 S\n");
	});
});