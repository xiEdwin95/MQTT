var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.mqttdashboard.com");

//All Publishing Data are at 10sec interval

// Drone

// /drone - normal datastream
// /drone/randomStatus -Random Health Status

// Drone Maintenace Log

// /drone/log - normal datastream
// /drone/log/randomEvent - Random Event Type
// /drone/log/randomPrevUpHealth - Random Chaning of Prev and Updated Health Status

// DockingStation

// /droneDock - normal datastream
// /droneDock/randomHealthStatus - Random Health Status

// DockingStation Maintenance Log

// /droneDockMainten/log - normal data stream
// /droneDockMainten/log/randomEventType - Random Event Type
// /droneDockMainten/log/randomPrevUpHealthStatus - Random Prev and Upodated Health Status

// Flight Drone Log

// /flight/drone/log - normal data stream
// /flight/drone/log/randomDroneStatus -Random Drone Status

// Flight Mission

// /flight/mission -normal data stream
// /flight/mission/randomDroneStatus -Random Drone Status
// /flight/mission/randomWeather -Random Weather on station
// /flight/mission/randomMissionStatus -Random Mission Status

// Flight Mission Log

// /flight/mission/log -normal datastream

// Flight Path

// /flight/path - normal data stream
// /flight/path/randomStatus -Random Flight Path Status

// Flight Path Log

// /flight/path/log -normal data stream

// Flight Schedule

// /flight/schedule - normal datastream

// Flight Video

// flight/video -normal data stream

// Image Sensor

// /imageSensor -normal datastream
// /imageSensor/randomHealthStatus -Random Health Status

// Image Sensor maintenance Log

// /imageSensor/log -normal data stream
// /imageSensor/log/randomEventType -Random Event Type
// /imageSensor/log/randomPrevUpHealthStatus -Random Prev and Updated Health Status

// LeakageInfo

// /leakage -normal data stream
// /leakage/randomLeakage -Random Leakage

// LeakageInfo Log
// /leakage/log -normal data stream

// Radnom Mock Data Function
tempDroneStation = populateDroneStation();
function populateDroneStation() {
    const maxlng = 103.719286;
    const maxlat = 1.286494;
    const minlng = 103.67179;
    const minlat = 1.25709;
    let data = {};
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    const dataSize = Math.floor(Math.random() * 20 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id

    for (let i = 0; i < dataSize; i++) {
        const lng = minlng + Math.random() * (maxlng - minlng);
        const lat = minlat + Math.random() * (maxlat - minlat);
        data[i] = {
            id: makeid(dataLength),
            name: randomName(random()),
            healthStatus: status[random()],
            latitude: lat,
            longitude: lng,
            description: makeid(dataLength),
            droneDockedId: makeid(dataLength),
            lastCMDate: randomDate(new Date(2020, 0, 1), new Date()),
            lastPMDate: randomDate(new Date(2020, 0, 50), new Date()),
            nextPMDate: randomDate(new Date(2020, 0, 999), new Date())
        };
    }

    return data;
}

tempDroneStationMainteanceLog = populateDroneStationMainteanceLog();

function populateDroneStationMainteanceLog() {
    let data = {};
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    const eventType = ["HEALTH_STATUS_CHANGED", "NEXT_PM_DATE_CHANGED"];
    const dataSize = Math.floor(Math.random() * 20 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5);
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            description: status[random()],
            DroneStationId: makeid(dataLength),
            eventDateTime: randomDate(new Date(2020, 0, 1), new Date()),
            eventType: eventType[random2()],
            previousNextHealthStatus: status[random()],
            previousNextPMDate: randomDate(new Date(2020, 0, 3), new Date()),
            updateHealthStatus: status[random()],
            updatedNextPMDate: randomDate(new Date(2020, 0, 99), new Date())
        };
    }
    return data;
}

tempLeakageInfro = populateLeakageInfo();

function populateLeakageInfo() {
    const maxlng = 103.719286;
    const maxlat = 1.286494;
    const minlng = 103.67179;
    const minlat = 1.25709;
    const status = [
        "LEAKAGE_DETECTED",
        "ALL_CLEAR",
        "LEAKAGE_CONFIRMED",
        "REPAIR_IN_PROGRESS",
        "REPAIR_COMPLETED"
    ];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};
    for (let i = 0; i < dataSize; i++) {
        const lng = minlng + Math.random() * (maxlng - minlng);
        const lat = minlat + Math.random() * (maxlat - minlat);
        data[i] = {
            id: makeid(dataLength),
            status: status[random()],
            latitude: lat,
            longitude: lng,
            // altitude, leakageTime, leakageVideoClip
            altitude: randomBattery(),
            leakageTime: randomDate(new Date(2020, 0, 1), new Date()),
            leakageVideoClip: "leakageVideoClip",
            flightMissionId: makeid(dataLength)
        };
    }

    return data;
}

tempLeakageInfoLog = populateleakageInfoLog();

function populateleakageInfoLog() {
    const status = [
        "LEAKAGE_DETECTED",
        "ALL_CLEAR",
        "LEAKAGE_CONFIRMED",
        "REPAIR_IN_PROGRESS",
        "REPAIR_COMPLETED"
    ];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            leakageInforId: makeid(dataLength),
            eventDateTime: randomDate(new Date(2020, 0, 1), new Date()),
            description: status[random()]
        };
    }
    return data;
}

tempDrone = populateDrone();

function populateDrone() {
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            name: randomName(random()),
            imageSensorId: makeid(dataLength),
            healthStatus: status[random()],
            description: makeid(dataLength),
            lastCMDate: randomDate(new Date(2020, 0, 1), new Date()),
            lastPMDate: randomDate(new Date(2020, 0, 50), new Date()),
            nextPMDate: randomDate(new Date(2020, 0, 999), new Date())
        };
    }

    return data;
}

tempDroneMaintenLog = popluateDroneMaintenanceLog();
function popluateDroneMaintenanceLog() {
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    const eventType = ["HEALTH_STATUS_CHANGED", "NEXT_PM_DATE_CHANGED"];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};

    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            description: status[random()],
            droneId: makeid(dataLength),
            eventDateTime: randomDate(new Date(2020, 0, 1), new Date()),
            eventType: eventType[random2()],
            previousNextHealthStatus: status[random()],
            previousNextPMDate: randomDate(new Date(2020, 0, 50), new Date()),
            updateHealthStatus: status[random()],
            updatedNextPMDate: randomDate(new Date(2020, 0, 999), new Date())
        };
    }
    return data;
}

tempFlightDroneLog = populateFlightDroneLog();

function populateFlightDroneLog() {
    const status = [
        "OK, POOR_GPS",
        "LOW_BATTERY",
        "POOR_NETWORK",
        "SYSTEM_ERROR"
    ];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    const maxlng = 103.719286;
    const maxlat = 1.286494;
    const minlng = 103.67179;
    const minlat = 1.25709;
    const gimbalPosition = ["Up", "Down", "Left", "Right"];
    data = {};
    for (let i = 0; i < dataSize; i++) {
        const lng = minlng + Math.random() * (maxlng - minlng);
        const lat = minlat + Math.random() * (maxlat - minlat);
        data[i] = {
            id: makeid(dataLength),
            altitude: randomBattery(),
            batteryLevel: randomBattery(),
            droneStatus: status[random()],
            eventDateTime: randomDate(new Date(2020, 0, 1), new Date()),
            flightMissionId: makeid(dataLength),
            longitude: lng,
            latitude: lat,
            gimbalPosition: gimbalPosition[random()]
        };
    }
    return data;
}

tempFlightMission = populateFlightMission();

function populateFlightMission() {
    const droneStatus = [
        "OK, POOR_GPS",
        "LOW_BATTERY",
        "POOR_NETWORK",
        "SYSTEM_ERROR"
    ];
    const weather = ["NORMAL", "RAIN", "WIND"];
    const missionStatus = [
        "PENDING",
        "IN_PROGRESS",
        "PAUSE",
        "STOP",
        "FAIL",
        "SUCESS"
    ];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            droneId: makeid(dataLength),
            dockedDroneAtEndStnId: makeid(dataLength),
            dockedDroneAtStartStnId: makeid(dataLength),
            droneStatus: droneStatus[random()],
            endStationChargingOn: randomBoolean(),
            endStationPowerOn: randomBoolean(),
            endStationWeather: weather[random3()],
            endedOn: randomDate(new Date(2020, 0, 4), new Date()),
            flightPathId: makeid(dataLength),
            imageSensorId: makeid(dataLength),
            missionStatus: missionStatus[random()],
            sopCheckPassed: randomBoolean(),
            startStationChargingOn: randomBoolean(),
            startStationPowerOn: randomBoolean(),
            startStationWeather: weather[random3()],
            startedOn: randomDate(new Date(2020, 0, 1), new Date())
        };
    }
    return data;
}

tempFlightMissionLog = populateflightMissionLog();

function populateflightMissionLog() {
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};

    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            eventDateTime: randomDate(new Date(2020, 0, 1), new Date()),
            flightMissionId: makeid(dataLength),
            description: status[random()]
        };
    }
    return data;
}

tempFlightPath = populateflightPath();

function populateflightPath() {
    const status = ["NORMAL", "LOCKED"];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            details: status[random2()],
            fromDroneStationId: makeid(dataLength),
            lockEndOn: randomDate(new Date(2020, 0, 4), new Date()),
            lockStartOn: randomDate(new Date(2020, 0, 1), new Date()),
            status: status[random2()],
            toDroneStationId: makeid(dataLength),
            versionTimestamp: randomDate(new Date(2020, 0, 1), new Date())
        };
    }
    return data;
}

tempFlightPathLog = populateflightPathLog();

function populateflightPathLog() {
    const status = ["NORMAL", "LOCKED"];
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            flightPathId: makeid(dataLength),
            eventDateTime: randomDate(new Date(2020, 0, 1), new Date()),
            description: status[random2()]
        };
    }
    return data;
}

tempFlightSchedule = populateflightSchedule();
function populateflightSchedule() {
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            droneId: makeid(dataLength),
            flightDateTime: randomDate(new Date(2020, 0, 1), new Date()),
            flightPathId: makeid(dataLength)
        };
    }
    return data;
}

tempFlightVideo = populateflightVideo();

function populateflightVideo() {
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            flightMissionId: makeid(dataLength),
            leakageCount: randomBattery(),
            leakageDetected: randomBoolean(),
            payloadViewVideo: status[random()],
            pilotVideo: status[random()],
            processedPayLoadVideo: status[random()],
            rawPayloadVideo: status[random()]
        };
    }
    return data;
}

tempImageSensor = populateimageSensor();

function populateimageSensor() {
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    const sensorType = ["GAS_IMAGING_CAMERA", "THERMAL_IMAGING_CAMERA"];
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            description: status[random()],
            healthStatus: status[random()],
            name: randomName(random()),
            nextPMDate: randomDate(new Date(2020, 0, 999), new Date()),
            sensorType: sensorType[random2()]
        };
    }
    return data;
}

tempImageSensorMaintenanceLog = populateimageSensorMaintenanceLog();

function populateimageSensorMaintenanceLog() {
    const dataSize = Math.floor(Math.random() * 10 + 1); // number of mock data
    const dataLength = Math.floor(Math.random() * 7 + 5); // the length of the id
    const eventType = ["HEALTH_STATUS_CHANGED", "NEXT_PM_DATE_CHANGED"];
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    data = {};
    for (let i = 0; i < dataSize; i++) {
        data[i] = {
            id: makeid(dataLength),
            description: status[random()],
            eventDateTime: randomDate(new Date(2020, 0, 4), new Date()),
            eventType: eventType[random()],
            imageSensorId: makeid(dataLength),
            previousNextHealthStatus: status[random()],
            previousNextPMDate: randomDate(new Date(2020, 0, 1), new Date()),
            updateHealthStatus: status[random()],
            updatedNextPMDate: randomDate(new Date(2020, 0, 999), new Date())
        };
    }

    return data;
}

//Misc Function for creating data

function makeid(length) {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return Number(result);
}

function randomName(index) {
    const name = ["Tom", "Dick", "Harry", "Jerry"];
    return name[index];
}

function random() {
    const random = Math.floor(Math.random() * 4);
    return random;
}

function random2() {
    const random = Math.floor(Math.random() * 2);
    return random;
}

function random3() {
    const random = Math.floor(Math.random() * 3);
    return random;
}

function randomBattery() {
    const random = Math.floor(Math.random() * 100);
    return random;
}

function randomDate(start, end) {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
}

function randomBoolean() {
    return (random_boolean = Math.random() >= 0.5);
}

function randomWeather(data) {
    let currentData = data;
    const weather = ["NORMAL", "RAIN", "WIND"];

    for (let index in currentData) {
        currentData[index].startStationWeather = weather[random3()];
        currentData[index].endStationWeather = weather[random3()];
    }
    return currentData;
}

function randomHealthStatus(data) {
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    let currentData = data;

    for (let index in currentData) {
        currentData[index].healthStatus = status[random()];
    }
    return currentData;
}

function randomNPHealthStatus(data) {
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    let currentData = data;

    for (let index in currentData) {
        currentData[index].previousNextHealthStatus = status[random()];
        currentData[index].updateHealthStatus = status[random()];
    }
    return currentData;
}

function randomPUNextPMDate(data) {
    let currentData = data;

    for (let index in currentData) {
        currentData[index].previousNextPMDate = randomDate(
            new Date(2020, 0, 3),
            new Date()
        );
        currentData[index].updatedNextPMDate = randomDate(
            new Date(2020, 0, 99),
            new Date()
        );
    }
    return currentData;
}

function randomflightPathStatus(data) {
    const status = ["NORMAL", "LOCKED"];
    let currentData = data;
    for (let index in currentData) {
        currentData[index].status = status[random2()];
    }
    return currentData;
}

function randomMissionStatus(data) {
    const status = [
        "PENDING",
        "IN_PROGRESS",
        "PAUSE",
        "STOP",
        "FAIL",
        "SUCESS"
    ];
    let currentData = data;

    for (let index in currentData) {
        currentData[index].missionStatus = status[random()];
    }
    return currentData;
}

function randomDroneStatus(data) {
    const status = [
        "OK, POOR_GPS",
        "LOW_BATTERY",
        "POOR_NETWORK",
        "SYSTEM_ERROR"
    ];
    let currentData = data;

    for (let index in currentData) {
        currentData[index].droneStatus = status[random()];
    }
    return currentData;
}

function randomEventType(data) {
    const status = ["HEALTH_STATUS_CHANGED", "NEXT_PM_DATE_CHANGED"];
    let currentData = data;

    for (let index in currentData) {
        currentData[index].eventType = status[random2()];
    }
    return currentData;
}

function randomLeakageStatus(data) {
    const status = [
        "LEAKAGE_DETECTED",
        "ALL_CLEAR",
        "LEAKAGE_CONFIRMED",
        "REPAIR_IN_PROGRESS",
        "REPAIR_COMPLETED"
    ];
    let currentData = data;
    for (let index in currentData) {
        currentData[index].status = status[random()];
    }
    return currentData;
}

client.on("connect", function() {
    console.log("MQTT Broadcasting Drone Data");
    setInterval(() => {
        client.publish("/drone", JSON.stringify(tempDrone));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Drone Random Health Status Data");
    setInterval(() => {
        client.publish(
            "/drone/randomStatus",
            JSON.stringify(randomHealthStatus(tempDrone))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Drone Maintenance Log Data");

    setInterval(() => {
        client.publish("/drone/log", JSON.stringify(tempDroneMaintenLog));
    }, 10000);
});

client.on("connect", function() {
    console.log(
        "MQTT Broadcasting Drone Maintenance Log Random EventType Data"
    );

    setInterval(() => {
        client.publish(
            "/drone/log/randomEvent",
            JSON.stringify(randomEventType(tempDroneMaintenLog))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log(
        "MQTT Broadcasting Drone Maintenance Random Prev Update Health Status Log Data"
    );

    setInterval(() => {
        client.publish(
            "/drone/log/randomPrevUpHealth",
            JSON.stringify(randomNPHealthStatus(tempDroneMaintenLog))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting DockingStation Data");

    setInterval(() => {
        client.publish("/droneDock", JSON.stringify(tempDroneStation));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting DockingStation Random Health Status Data");

    setInterval(() => {
        client.publish(
            "/droneDock/randomHealthStatus",
            JSON.stringify(randomHealthStatus(tempDroneStation))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting DockingStation Maintenance Log Data");

    setInterval(() => {
        client.publish(
            "/droneDockMainten/log",
            JSON.stringify(tempDroneStationMainteanceLog)
        );
    }, 10000);
});
client.on("connect", function() {
    console.log(
        "MQTT Broadcasting DockingStation Maintenance Log Random Event Type Data"
    );

    setInterval(() => {
        client.publish(
            "/droneDockMainten/log/randomEventType",
            JSON.stringify(randomEventType(tempDroneMaintenLog))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log(
        "MQTT Broadcasting DockingStation Maintenance Log Randon Prev Up Health Status Data"
    );

    setInterval(() => {
        client.publish(
            "/droneDockMainten/log/randomPrevUpHealthStatus",
            JSON.stringify(randomNPHealthStatus(tempDroneMaintenLog))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Drone Log Data");

    setInterval(() => {
        client.publish("/flight/drone/log", JSON.stringify(tempFlightDroneLog));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Drone Log Random Drone Status Data");

    setInterval(() => {
        client.publish(
            "/flight/drone/log/randomDroneStatus",
            JSON.stringify(randomDroneStatus(tempFlightDroneLog))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Mission Data");

    setInterval(() => {
        client.publish("/flight/mission", JSON.stringify(tempFlightMission));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Mission Random Drone Status Data");

    setInterval(() => {
        client.publish(
            "/flight/mission/randomDroneStatus",
            JSON.stringify(randomDroneStatus(tempFlightMission))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Mission Random Weather Data");

    setInterval(() => {
        client.publish(
            "/flight/mission/randomWeather",
            JSON.stringify(randomWeather(tempFlightMission))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Mission Random Mission Status Data");

    setInterval(() => {
        client.publish(
            "/flight/mission/randomMissionStatus",
            JSON.stringify(randomMissionStatus(tempFlightMission))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting FLight Mission Log Data");

    setInterval(() => {
        client.publish(
            "/flight/mission/log",
            JSON.stringify(tempFlightMissionLog)
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Path Data");

    setInterval(() => {
        client.publish("/flight/path", JSON.stringify(tempFlightPath));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Path Random Flight Path Status Data");

    setInterval(() => {
        client.publish(
            "/flight/path/randomStatus",
            JSON.stringify(randomflightPathStatus(tempFlightPath))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Path Log Data");

    setInterval(() => {
        client.publish("/flight/path/log", JSON.stringify(tempFlightPathLog));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Schedule Data");

    setInterval(() => {
        client.publish("/flight/schedule", JSON.stringify(tempFlightSchedule));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Flight Video Data");

    setInterval(() => {
        client.publish("/flight/video", JSON.stringify(tempFlightVideo));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Image Sensor Data");

    setInterval(() => {
        client.publish("/imageSensor", JSON.stringify(tempImageSensor));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Image Sensor Random Health Status Data");

    setInterval(() => {
        client.publish(
            "/imageSensor/randomHealthStatus",
            JSON.stringify(randomHealthStatus(tempImageSensor))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Image Sensor Log Data");

    setInterval(() => {
        client.publish(
            "/imageSensor/log",
            JSON.stringify(tempImageSensorMaintenanceLog)
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting Image Sensor Log  Random Event Type Data");

    setInterval(() => {
        client.publish(
            "/imageSensor/log/randomEventType",
            JSON.stringify(randomEventType(tempImageSensorMaintenanceLog))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log(
        "MQTT Broadcasting Image Sensor Log Random Prev Up Health Status Data"
    );

    setInterval(() => {
        client.publish(
            "/imageSensor/log/randomPrevUpHealthStatus",
            JSON.stringify(randomPUNextPMDate(tempImageSensorMaintenanceLog))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting LeakageInfo Data");

    setInterval(() => {
        client.publish("/leakage", JSON.stringify(tempLeakageInfro));
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting LeakageInfo random Leakage Data");

    setInterval(() => {
        client.publish(
            "/leakage/randomLeakage",
            JSON.stringify(randomLeakageStatus(tempLeakageInfro))
        );
    }, 10000);
});

client.on("connect", function() {
    console.log("MQTT Broadcasting LeakageInfo Log Data");

    setInterval(() => {
        client.publish("/leakage/log", JSON.stringify(tempLeakageInfoLog));
    }, 10000);
});

client.on("error", function() {
    console.log("ERROR");
    client.end();
});
client.on("offline", function() {
    console.log("offline");
});
client.on("reconnect", function() {
    console.log("reconnect");
});
