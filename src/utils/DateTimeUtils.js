
export default function formatTime(timestamp, solidityTime) {
    if (solidityTime) {
        timestamp = timestamp * 1000
    }
    const date = new Date(timestamp)
    return date.toLocaleDateString()
}

export function toDays(timestamp) {
    // Timestamp is in seconds so...
    return (timestamp/(24*60*60)).toFixed(5);;
}