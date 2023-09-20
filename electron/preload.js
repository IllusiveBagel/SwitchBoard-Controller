const raspi = require('raspi');
const I2C = require('raspi-i2c').I2C;

raspi.init(() => {
	console.log("Init");
	const i2c = new I2C();
	let switchData = "";

	while (true) {
		const input = i2c.readSync(0x40, 0x00, 0x06).toString();

		if(input !== switchData) {
			switchData = input;
			console.log(switchData);
            const element = document.getElementById("switch");
            element.innerHTML = switchData;
		}
	}
});