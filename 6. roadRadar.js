function checkSpeedLimit(speed, area) {

    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (speed <= speedLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
        const difference = speed - speedLimits[area];
        let status = '';

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    }
}
checkSpeedLimit(200, 'motorway');