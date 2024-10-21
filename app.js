function getRandomFakeValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function measureVitals() {
    // Activate camera for realism (though not actually used for measurement)
    const video = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            // Simulate a delay as if processing vitals
            setTimeout(() => {
                // Fake values
                const heartRate = getRandomFakeValue(60, 100); // Normal range for heart rate
                const oxygenLevel = getRandomFakeValue(95, 100); // Normal oxygen level

                // Display the fake values
                document.getElementById('heartRate').textContent = `Heart Rate: ${heartRate} bpm`;
                document.getElementById('oxygenLevel').textContent = `Oxygen Level: ${oxygenLevel} %`;

                // Log the vitals
                const logEntry = `Heart Rate: ${heartRate} bpm, Oxygen Level: ${oxygenLevel} %`;
                const logList = document.getElementById('logList');
                const newLogItem = document.createElement('li');
                newLogItem.textContent = logEntry;
                logList.appendChild(newLogItem);

                // Stop the camera after "measurement"
                stream.getTracks().forEach(track => track.stop());
            }, 3000); // Fake processing time
        })
        .catch(err => {
            console.error("Camera access denied or error: ", err);
        });
}
