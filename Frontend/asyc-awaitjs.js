const search = async() =>{
    console.log(country.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${country.value}?fullText=true`)
    response.json().then((data)=>{
        // console.log(data);
        //name
        let common = data[0].name.common
        console.log(common);

        //official
        let official = data[0].name.official
        console.log(official);
        
        //capital
        let capital = data[0].capital
        console.log(capital);

        //borders
        let border = data[0].borders
        console.log(border);

        //area
        let area = data[0].area
        console.log(area);
        
        //map
        let gmap = data[0].maps.googleMaps
        console.log(gmap);

        //population
        let pop = data[0].population
        console.log(pop);

        //timezone
        let timezone = data[0].timezones
        console.log(timezone);

        //continents
        let conti = data[0].continents
        console.log(conti);
        
        //flag
        let flag = data[0].flags.png
        console.log(flag);
        
        
        data.forEach((item) => {
            result.innerHTML = `<img src=${data[0].flags.png} class="card-img-top" alt="...">
                        <div  class="card-body">
                    <!-- <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card’s content.</p> -->
                        <ul>
                            <li>name:${data[0].name.common}</li>
                            <li>capital:${data[0].capital}</li>
                            <li>official:${data[0].name.official}</li>
                            <li>googlemap:${data[0].maps.googleMaps}</li>
                            <li>population:${data[0].population}</li>
                            <li>timezone:${data[0].timezones}</li>
                            <li>continent:${data[0].continents}</li>
                            <li>borders:${data[0].borders}</li>
                            <li>area:${data[0].area}</li>
                            <li></li>
                            <li></li>
                        </ul>
                    
                </div>`
        });
        
        
        
    })
}