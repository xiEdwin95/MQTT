var mqtt = require("mqtt");
var client = mqtt.connect("ws://broker.mqttdashboard.com:8000/mqtt");
var leakButton = document.querySelector('#leak')
var dockButton = document.querySelector('#dock')
var flightButton = document.querySelector('#flight')


leakButton.onClick=(e =>{
    client.on("connect", function() {
        console.log("MQTT Broadcasting LeakageInfo Log Data");
        let timer = setInterval(() => {
            client.publish("/leakage/log", JSON.stringify(leakage()));
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            leakCount = 0;
            console.log("MQTT Broadcasting LeakageInfo Log Completed");
        }, 6000);
    });
})

dockButton.onClick = (e => {

})

    client.on("connect", function() {
        console.log("MQTT Broadcasting DroneStation Log Data");
        let timer = setInterval(() => {
            client.publish("/dockingStation", JSON.stringify(dronestation()));
        }, 5000);

        setTimeout(() => {
            clearInterval(timer);
            counter = 0;
            console.log("MQTT Broadcasting DoneStation Completed");
        }, 30000);
    });

flightButton.onClick = (e =>{
    client.on("connect", function() {
        console.log("MQTT Broadcasting Flight Drone Log Data");
        let timer = setInterval(() => {
            client.publish("/droneLog", JSON.stringify(FlightDroneLog()));
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            droneCounter = 0;
            console.log("MQTT Broadcasting Flight Drone Log Completed");
        }, 74000);
    });

})

   



let counter = 0;

function dronestation() {
    const status = [
        "GOOD_CONDITION",
        "FAULT_CONDITION",
        "CORRECTIVE_MAINTENANCE",
        "PREVENTIVE_MAINTENANCE"
    ];
    const eventType = ["HEALTH_STATUS_CHANGED", "NEXT_PM_DATE_CHANGED"];
    const dronestationId = [0000, 1111, 2222, 3333, 4444];
    const name = ["Dock 1", "Dock 2", "Dock 3", "Dock 4", "Dock 5"];
    const description = [
        "All Good",
        "Warning",
        "Dead Station",
        "Repair Needed"
    ];
    const lat = [1.26726, 1.274877, 1.271749, 1.26778, 1.265999];
    const lng = [103.678887, 103.676365, 103.672082, 103.671106, 103.677091];
    const currentStatus = random();
    let data = {
        id: Number,
        name: String,
        description: String,
        previousHealthStatus: String,
        updatedHealthStatus: String,
        eventDateTime: Number,
        eventType: String,
        previousNextPMDate: Number,
        updatedNextPMDate: Number,
        lat: Number,
        lng: Number
    };

    data.id = dronestationId[counter];
    data.name = name[counter];
    data.description = description[currentStatus];
    data.previousHealthStatus = status[currentStatus];
    data.updatedHealthStatus = status[currentStatus + 1];
    (data.eventDateTime = new Date().toLocaleString()),
        (data.eventType = eventType[random2()]);
    data.previousNextPMDate = randomDate(new Date(2019, 0, 1), new Date());
    data.updatedNextPMDate = randomDate(new Date(2019, 0, 9), new Date());
    data.lat = lat[counter];
    data.lng = lng[counter];

    counter++;

    if (counter == 5) {
        counter = 0;
    }

    return data;
}

let droneCounter = 0;

function FlightDroneLog() {
    const droneStatus = [
        "OK",
        "POOR_GPS",
        "LOW_BATTERY",
        "POOR_NETWORK",
        "SYSTEM_ERROR"
    ];
    const gimbalPosition = ["Up", "Down", "Left", "Right"];
    const flightMissionId = 1111;
    const lat = [
        1.26726,
        1.267593,
        1.268355,
        1.268762,
        1.269309,
        1.269942,
        1.270532,
        1.271036,
        1.271497,
        1.272301,
        1.272977,
        1.273556,
        1.274275,
        1.274908,
        1.275562,
        1.276163,
        1.276753,
        1.277354,
        1.277493,
        1.277278,
        1.276999,
        1.276742,
        1.276517,
        1.276367,
        1.276099,
        1.275799,
        1.275649,
        1.275424,
        1.275242,
        1.274995,
        1.274877,
        1.27462,
        1.274384,
        1.274137,
        1.273955,
        1.27374,
        1.273472,
        1.273182,
        1.27325,
        1.273025,
        1.272735,
        1.272467,
        1.272242,
        1.271974,
        1.271749,
        1.271481,
        1.271481,
        1.270902,
        1.270634,
        1.27043,
        1.270151,
        1.269625,
        1.269132,
        1.268617,
        1.268166,
        1.26778,
        1.266954,
        1.266439,
        1.266053,
        1.265527,
        1.265066,
        1.264498,
        1.264165,
        1.26394,
        1.264187,
        1.264584,
        1.264884,
        1.265302,
        1.265677,
        1.265999,
        1.266289,
        1.26675,
        1.26704
    ];
    const lng = [
        103.678887,
        103.679327,
        103.680346,
        103.680945,
        103.681675,
        103.68263,
        103.683413,
        103.6841,
        103.684572,
        103.684186,
        103.683714,
        103.68322,
        103.682791,
        103.682244,
        103.681826,
        103.681429,
        103.681,
        103.680571,
        103.680002,
        103.679745,
        103.679423,
        103.67908,
        103.678704,
        103.678479,
        103.678114,
        103.677706,
        103.677459,
        103.677191,
        103.676869,
        103.676569,
        103.676365,
        103.676032,
        103.675742,
        103.675442,
        103.675142,
        103.674842,
        103.674499,
        103.674134,
        103.674152,
        103.673841,
        103.673455,
        103.673047,
        103.67279,
        103.672468,
        103.672082,
        103.671717,
        103.67146,
        103.670934,
        103.670548,
        103.67028,
        103.669926,
        103.669808,
        103.67013,
        103.670538,
        103.670838,
        103.671106,
        103.671685,
        103.67205,
        103.672361,
        103.672672,
        103.673058,
        103.673412,
        103.673712,
        103.674227,
        103.674688,
        103.675182,
        103.675568,
        103.676158,
        103.676662,
        103.677091,
        103.677563,
        103.678132,
        103.678572
    ];
    data = {
        id: 1234,
        flightMissionId: flightMissionId,
        droneStatus: droneStatus[random()],
        gimbalPosition: gimbalPosition[random()],
        batteryLevel: randomBattery(),
        altitude: randomAltitude(),
        eventDateTime: new Date().toLocaleString(),
        lat: lat[droneCounter],
        lng: lng[droneCounter]
    };

    droneCounter++;

    if (droneCounter == 73) {
        counter = 0;
    }
    return data;
}

let leakCount = 0;

function leakage() {
    const lat = [
        1.26726,
        1.267593,
        1.268355,
        1.268762,
        1.269309,
        1.269942,
        1.270532,
        1.271036,
        1.271497,
        1.272301,
        1.272977,
        1.273556,
        1.274275,
        1.274908,
        1.275562,
        1.276163,
        1.276753,
        1.277354,
        1.277493,
        1.277278,
        1.276999,
        1.276742,
        1.276517,
        1.276367,
        1.276099,
        1.275799,
        1.275649,
        1.275424,
        1.275242,
        1.274995,
        1.274877,
        1.27462,
        1.274384,
        1.274137,
        1.273955,
        1.27374,
        1.273472,
        1.273182,
        1.27325,
        1.273025,
        1.272735,
        1.272467,
        1.272242,
        1.271974,
        1.271749,
        1.271481,
        1.271481,
        1.270902,
        1.270634,
        1.27043,
        1.270151,
        1.269625,
        1.269132,
        1.268617,
        1.268166,
        1.26778,
        1.266954,
        1.266439,
        1.266053,
        1.265527,
        1.265066,
        1.264498,
        1.264165,
        1.26394,
        1.264187,
        1.264584,
        1.264884,
        1.265302,
        1.265677,
        1.265999,
        1.266289,
        1.26675,
        1.26704
    ];
    const lng = [
        103.678887,
        103.679327,
        103.680346,
        103.680945,
        103.681675,
        103.68263,
        103.683413,
        103.6841,
        103.684572,
        103.684186,
        103.683714,
        103.68322,
        103.682791,
        103.682244,
        103.681826,
        103.681429,
        103.681,
        103.680571,
        103.680002,
        103.679745,
        103.679423,
        103.67908,
        103.678704,
        103.678479,
        103.678114,
        103.677706,
        103.677459,
        103.677191,
        103.676869,
        103.676569,
        103.676365,
        103.676032,
        103.675742,
        103.675442,
        103.675142,
        103.674842,
        103.674499,
        103.674134,
        103.674152,
        103.673841,
        103.673455,
        103.673047,
        103.67279,
        103.672468,
        103.672082,
        103.671717,
        103.67146,
        103.670934,
        103.670548,
        103.67028,
        103.669926,
        103.669808,
        103.67013,
        103.670538,
        103.670838,
        103.671106,
        103.671685,
        103.67205,
        103.672361,
        103.672672,
        103.673058,
        103.673412,
        103.673712,
        103.674227,
        103.674688,
        103.675182,
        103.675568,
        103.676158,
        103.676662,
        103.677091,
        103.677563,
        103.678132,
        103.678572
    ];
    const status = [
        "LEAKAGE_DETECTED",
        "ALL_CLEAR",
        "LEAKAGE_CONFIRMED",
        "REPAIR_IN_PROGRESS",
        "REPAIR_COMPLETED"
    ];
    const leakage = [1234, 1222, 7890, 6786, 5897];
    const flightMissionId = 1111;
    data = {
        id: Number,
        flightMissionId: Number,
        leakageTime: Number,
        altitude: Number,
        leakageVideoClip: String,
        status: String,
        lat: Number,
        lng: Number
    };
    const latlng = randomlatlng();

    data.id = leakage[leakCount];
    data.flightMissionId = flightMissionId;
    data.leakageTime = randomDate(new Date(2019, 0, 1), new Date());
    data.altitude = randomAltitude();
    data.leakageVideoClip = "This is the VideoClip";
    data.status = status[random5()];
    data.lat = lat[latlng];
    data.lng = lng[latlng];
    leakCount++;
    if (leakCount == 5) {
        leakCount = 0;
    }

    return data;
}

function randomBattery() {
    const random = Math.floor(Math.random() * 100);
    return random;
}

function randomBLeakage() {
    const random = Math.floor(Math.random() * 5);
    return random;
}

function random() {
    const random = Math.floor(Math.random() * 4);
    return random;
}

function random5() {
    const random = Math.floor(Math.random() * 4);
    return random;
}

function randomlatlng() {
    const random = Math.floor(Math.random() * 73);
    return random;
}

function randomAltitude() {
    const random = Math.floor(Math.random() * 1000);
    return random;
}

function random2() {
    const random = Math.floor(Math.random() * 2);
    return random;
}

function randomDate(start, end) {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
}

function randomDate(start, end) {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
}
