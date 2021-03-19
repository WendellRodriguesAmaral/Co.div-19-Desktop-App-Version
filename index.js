const url = `https://covid-api.mmediagroup.fr/v1/cases?country=Brazil`
const information = ` 
    <section class="countryInformation">
    <h2>Brasil<span>209.288.278 habitantes</span></h2>
    <div class="boxes">
    <div class="boxInformation boxConfirmed">
        <p class="titleInformation">Confirmados</p>
        <p class="information">000000</p>
    </div>
    <div class="boxInformation boxRecovered">
        <p class="titleInformation">Recuperados</p>
        <p class="information">000000</p>
    </div>
    <div class="boxInformation boxDeaths">
        <p class="titleInformation">Mortes</p>
        <p class="information">000000</p>
    </div>
    </div>        
    </section>
`

const request = async function(url){
    const response = await fetch(url)
    const responseJson = await response.json()
    const responseAsArray = Object.entries(
        responseJson) 
    return responseAsArray //isso aq esta retornando uma promisse
}

request(url).then(value => {
    console.log(value)}
    )


