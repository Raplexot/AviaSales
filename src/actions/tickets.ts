export function ticketsFetchDataSuccess(tickets){
return {
    type:"TICKETS_FETCH_DATA_SUCCESS",
    tickets
}
}

export function ticketsFetchData(url){
    return (dispatch)=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res;
        })
        .then(res=>res.json())
        .then(tickets => dispatch(ticketsFetchDataSuccess(tickets)))
    }
}