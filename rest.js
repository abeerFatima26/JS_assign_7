 xhr = new XMLHttpRequest();
let parsedResponse = [];

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        resp = this.responseText;
        console.log(resp);
        parsedResponse = JSON.parse(resp);
        console.log(parsedResponse);

        // Ans a, b & c
        
        let asianCountry = parsedResponse.filter(x=>x.region==="Asia");
        console.log(asianCountry)
        asianCountry.forEach(an => {
            let nameOfCountry = document.getElementById("container");
            let countryBoxLeft = document.getElementsByClassName("col-left")[0];
            let innerBox = `
                <div class="col-inner-box">
                <img src = ${an.flags.png}>
                <h3>Name : ${an.name}</h3>
                <p>Capital : ${an.capital}</p>
                </div>
            `
            countryBoxLeft.innerHTML += innerBox;
            nameOfCountry.append(countryBoxLeft)
        });
        
        let smallCountry = [] = parsedResponse.filter(x=>x.population<200000)
        smallCountry.forEach(sn => {
            let nameOfCountry = document.getElementById("container");
            let countryBoxRight = document.getElementsByClassName("col-right")[0];
            innerBox = `
                <div class="col-inner-box">
                <img src = ${sn.flags.png}>
                <h3>Name : ${sn.name}</h3>
                <p>Capital : ${sn.capital}</p>
                </div>
            `
            countryBoxRight.innerHTML += innerBox;
            nameOfCountry.append(countryBoxRight)
        })

        // Ans d
        let worldPop = parsedResponse.reduce((sum,curr) => sum = sum + curr.population,0);
        
        console.log(`The Total Population of the world is : ${worldPop}`)

        //Ans e
        let dollarCountry = []
        parsedResponse.forEach((x)=>{
            if( x.hasOwnProperty('currencies')) {
                for(i=0;i<x.currencies.length;i++){
                    if(x.currencies[i].code==='USD')
                    {
                        dollarCountry.push(x.name);
                        
                    }
                }
        }
        })
        
        console.log(`Countries using US Dollars($) as currency : ${dollarCountry}`)

    } 
}

xhr.open("GET","https://restcountries.com/v2/all",true);
xhr.send();