const getSaveDonateCard=()=>{
    const saveCard=localStorage.getItem('get-donetion');
    if(saveCard){
        return JSON.parse(saveCard);
    }
    return[]
}


const SaveDonate=(id)=>{
    const AllDonates=getSaveDonateCard();
    const exits=AllDonates.find( donate => donate === id )
    if(!exits){
       AllDonates.push(id);
       localStorage.setItem('get-donetion' , JSON.stringify(AllDonates)) 
    }

}

export { getSaveDonateCard ,SaveDonate }