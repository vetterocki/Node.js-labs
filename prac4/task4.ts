import * as os from 'os';
import * as si from 'systeminformation';


function printSystemInfo() {
    console.log(`Operating system: ${os.type()} ${os.release()} (${os.arch()})`);
    console.log(`Current user name: ${os.userInfo().username}`);
    console.log('CPU cores models:');
    os.cpus().forEach((cpu, i) => {
        console.log(`CPU ${i + 1} core model: ${cpu.model}`);
    });
    si.cpuTemperature().then(data => {
        console.log(`CPU temperature: ${data.main}`);
    });
    si.graphics().then(data => {
        console.log('Graphic controllers vendors and models:');
        data.controllers.forEach(controller => {
            console.log(`- ${controller.vendor}: ${controller.model}`);
        });
    });
    si.mem().then(data => {
        const totalMemory = (data.total / (1024 * 1024 * 1024)).toFixed(2);
        const usedMemory = ((data.total - data.available) / (1024 * 1024 * 1024)).toFixed(2);
        const freeMemory = (data.available / (1024 * 1024 * 1024)).toFixed(2);
        console.log(`Total memory: ${totalMemory} GB`);
        console.log(`Used memory: ${usedMemory} GB`);
        console.log(`Free memory: ${freeMemory} GB`);
    });
    si.battery().then(data => {
        console.log(`Battery charging: ${data.isCharging ? 'yes' : 'no'}`);
        console.log(`Battery percent: ${data.percent}%`);
        console.log(`Battery remaining time: ${data.timeRemaining}`);
    });
}

const frequency = parseInt(process.argv[2], 10);

if (isNaN(frequency)) {
    console.error('Invalid frequency parameter.');
    process.exit(1);
}

console.log(`System information will be printed every ${frequency} seconds:`);

setInterval(printSystemInfo, frequency * 1000);
