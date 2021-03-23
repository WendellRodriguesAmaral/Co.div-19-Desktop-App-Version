
const container =  document.querySelector("main.all");

const url = `https://covid-api.mmediagroup.fr/v1/cases?country=Brazil`

const request = async function(url){
    const response = await fetch(url)
    const responseJson = await response.json()
    const responseAsArray = Object.entries(
        responseJson)    
    injectData (responseAsArray)       
}

function formatNumbers(number, 
    population = ""){
    if(number === undefined) return ""
    const num = number.toString().replace(/(\d{1,3})(\d{3})(\d{3})/ , "$1.$2.$3")
                                    .replace(/(\d{1,3})(\d{3})/ ,"$1.$2")
    return `${num} ${population}`
}

function formatName(name){
    return name === "All" ? name = "Brasil" : name
}

function injectData(data){
    data.forEach((location)=>{
        const information = ` 
            <section class="countryInformation">
            <h2>${formatName(location[0])}<span>${formatNumbers(location[1].population, "habitantes")}</span></h2>
            <div class="boxes">
            <div class="boxInformation boxConfirmed">
                <p class="titleInformation">Confirmados</p>
                <p class="information">${formatNumbers(location[1].confirmed)}</p>
            </div>
            <div class="boxInformation boxRecovered">
                <p class="titleInformation">Recuperados</p>
                <p class="information">${formatNumbers(location[1].recovered)}</p>
            </div>
            <div class="boxInformation boxDeaths">
                <p class="titleInformation">Mortes</p>
                <p class="information">${formatNumbers(location[1].deaths)}</p>
            </div>
            </div>        
            </section>
        `
        container.innerHTML += information
    })
}
request(url)
setInterval(request , 30 * 60000)

