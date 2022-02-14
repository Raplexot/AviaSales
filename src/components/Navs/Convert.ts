import React, { FC } from 'react';

interface Props{
    Currency:string
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Convert = ({Currency=''}:Props) => {
const url = "https://freecurrencyapi.net/api/v2/latest?apikey=YOUR-APIKEY";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function currencyRequest(){
    const result =await fetch("https://freecurrencyapi.net/api/v2/latest?apikey=YOUR-APIKEY");
    const data=await result.json();
    const Rez = data.data;
    console.log(Rez);
    if(Currency=="RUB")
    {
       return Rez["RUB"]
    }else if (Currency=="USD")
    {
        return Rez["USD"]
    }else (Currency == "EUR")
    {
        return Rez["EUR"]
    }
}
currencyRequest();
};

export default Convert;