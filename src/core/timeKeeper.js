let totalTimeMs = 0;

export function updateTime(deltaMs) {
    totalTimeMs += deltaMs;
}

//todo: can this be shuffled around to improve the performance?
export function getTimeProgress(frequencyHz) {
    var periodMs = 1000 / frequencyHz;
    return (totalTimeMs % periodMs) / periodMs;
}

export function getTotalTimeMs() {
    return totalTimeMs;
}