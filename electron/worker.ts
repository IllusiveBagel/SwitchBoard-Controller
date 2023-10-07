import { init } from 'raspi';
import { I2C } from 'raspi-i2c';

init(() => {
    console.log("Init");
    const i2c = new I2C();
    let switchData = "";

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const input = i2c.readSync(0x40, 0x00, 0x06).toString();

        if(input !== switchData) {
            switchData = input;
            console.log(switchData);
            postMessage(switchData);
            //const element = document.getElementById("switch");
            //element.innerHTML = switchData;
        }
    }
});