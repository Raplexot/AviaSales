// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function currencyRequest(){
    const result =await fetch("https://freecurrencyapi.net/api/v2/latest?apikey=YOUR-APIKEY");
    const data=await result.json();
    const Rez = data.data;
    console.log(Rez);
    if("RUB"=="RUB")
    {
       return Rez["RUB"]
    }
}
currencyRequest();