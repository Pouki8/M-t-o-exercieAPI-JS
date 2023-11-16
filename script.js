const urlApi = "https://www.prevision-meteo.ch/services/json/Bagnolet";

const villeInputElement = document.querySelector(".ville");

function nomVille(ville) {
    fetch("https://www.prevision-meteo.ch/services/json/" + ville)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {

            const { name, sunrise, sunset } = responseJson.city_info;
            villeInputElement.value = name;
            document.querySelector(".lever").innerText = "Le soleil se lèvera à " + sunrise;
            document.querySelector(".coucher").innerText = "et se couchera à " + sunset;

            const { condition, icon_big, tmp } = responseJson.current_condition;
            document.querySelector(".description").innerText = condition;
            document.querySelector(".temp").innerText = tmp + " °C";
            document.querySelector(".icone").src = icon_big;

            const { tmin, tmax } = responseJson.fcst_day_0;
            document.querySelector(".min").innerText = "min " + tmin + "°C";
            document.querySelector(".max").innerText = "max " + tmax + "°C";

            const { date, condition: condition1, icon, tmin: tmin1, tmax: tmax1 } = responseJson.fcst_day_1;
            document.querySelector(".date1").innerText = date;
            document.querySelector(".description1").innerText = condition1;
            document.querySelector(".icone1").src = icon;
            document.querySelector(".min1").innerText = "min " + tmin1 + "°C";
            document.querySelector(".max1").innerText = "max " + tmax1 + "°C";

            const { date: date2, condition: condition2, icon: icon2, tmin: tmin2, tmax: tmax2 } = responseJson.fcst_day_2;
            document.querySelector(".date2").innerText = date2;
            document.querySelector(".description2").innerText = condition2;
            document.querySelector(".icone2").src = icon2;
            document.querySelector(".min2").innerText = "min " + tmin2 + "°C";
            document.querySelector(".max2").innerText = "max " + tmax2 + "°C";

            const { date: date3, condition: condition3, icon: icon3, tmin: tmin3, tmax: tmax3 } = responseJson.fcst_day_3;
            document.querySelector(".date3").innerText = date3;
            document.querySelector(".description3").innerText = condition3;
            document.querySelector(".icone3").src = icon3;
            document.querySelector(".min3").innerText = "min " + tmin3 + "°C";
            document.querySelector(".max3").innerText = "max " + tmax3 + "°C";

            const { date: date4, condition: condition4, icon: icon4, tmin: tmin4, tmax: tmax4 } = responseJson.fcst_day_4;
            document.querySelector(".date4").innerText = date4;
            document.querySelector(".description4").innerText = condition4;
            document.querySelector(".icone4").src = icon4;
            document.querySelector(".min4").innerText = "min " + tmin4 + "°C";
            document.querySelector(".max4").innerText = "max " + tmax4 + "°C";

            console.log(responseJson);

        });

}

nomVille('Paris');

document.querySelector(".calcul").addEventListener("click", () => {
    nomVille(villeInputElement.value);
});



