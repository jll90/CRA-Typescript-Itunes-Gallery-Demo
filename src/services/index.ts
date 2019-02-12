const SERVICE_URL =
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export const fetchLatestData = () => {
    return fetch(SERVICE_URL).then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            setTimeout(fetchLatestData, 400);
        }
    });
};
