
myStore =[
    {name:"shirt",price:20,quantity:12},
    {name:"trouser",price:200,quantity:6},
    {name:"bike",price:200,quantity:4},
    {name:"fan",price:200,quantity:4},
];

order = [
    {name:"shirt", quantity:2},
    {name:"trouser",quantity:4},
    {name:"bike",quantity:20},
    {name:"basket",quantity:2},
];

function mk(store,order){
    temp_store=store;
    new_store=[];
    tp =0;
    nq =0;
for(var i in store){
    for(var e=0; e<store.length; e++){
    if(store[e].name==order[i].name){
        if(store[e].quantity>=order[i].quantity){
            tp = order[i].quantity*store[e].price;
            nq = store[e].quantity-order[i].quantity;
            temp_store[e].quantity=nq;
            new_store.push(temp_store);
            console.log("item: " + order[i].name +" purchase successfully");
        }else {
            console.log("item: " + order[i].name +" out of stock");
        }
    }else {
            value =("item: " + order[i].name+" does not exist");
    }
    
}

}
console.log( new_store.pop());
return value;
}

console.log(mk(myStore, order));