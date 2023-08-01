const pollutionScale = [
    {
        scale: [0, 50],
        quality: "Bon",
        src: "happy",
        background: "linear-gradient(to right, #45B649, #DCE35B)",
    },
    {
        scale: [51, 100],
        quality: "Modéré",
        src: "thinking",
        background: "linear-gradient(to right, #F3F9A7, #CAC531)",
    },
    {
        scale: [101, 150],
        quality: "Mauvais pour la santé",
        src: "unhealthy",
        background: "linear-gradient(to right, #F16529, #E44D26)",
    },
    {
        scale: [151, 200],
        quality: "Mauvais",
        src: "bad",
        background: "linear-gradient(to right, #ef473a, #cb2d3e)",
    },
    {
        scale: [201, 300],
        quality: "Très mauvais",
        src: "mask",
        background: "linear-gradient(to right, #8E54E9, #4776E6)",
    },
    {
        scale: [301, 500],
        quality: "Terrible",
        src: "terrible",
        background: "linear-gradient(to right, #7a2828, #a73737)",
    },
];

const header = document.querySelector("#header");
const informationBlock = document.querySelector("#information-block");
const emojiLogo = document.querySelector("#emoji-logo");
const userInformation = document.querySelector("#user-information");

async function getPollutionData() {
    try {
        const response = await fetch(
            "http://api.airvisual.com/v2/nearest_city?key=bf909e9f-cbac-4ed2-90d5-bbfafd021162"
        );
        const responseData = await response.json();
        const aqi = responseData.data.current.pollution.aqius;
        const sortedData = {
            city: responseData.data.city,
            aqi: aqi,
            ...pollutionScale.find(
                (obj) => aqi >= obj.scale[0] && aqi <= obj.scale[1]
            ),
        };
        populateUI(sortedData);
    } catch (error) { }
}

const cityName = document.querySelector("#city-name");
const pollutionInfo = document.querySelector("#pollution-info");
const pollutionValue = document.querySelector("#pollution-value");

function populateUI(data) {
    header.style.background = data.background;
    emojiLogo.src = `assets/img/${data.src}.svg`;
    userInformation.textContent = `Quelle est la qualité de l’air actuellement à ${data.city}`;
    cityName.textContent = data.city;
    pollutionInfo.textContent = data.quality;
    pollutionValue.textContent = data.aqi;
}

getPollutionData();
