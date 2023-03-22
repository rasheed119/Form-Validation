function submit_form(){

    var first_name = document.getElementById("first-name").value;

    var last_name = document.getElementById("last-name").value;

    var address = document.getElementsByClassName("address");
    var address_List = [];
    address_List[0] = address[0].value;
    address_List[1] = address[1].value;
    if(address_List.length==2 && address_List[1]==''){
        address_value = address_List[0];
    }else{
        address_value = address_List.join(", ");
    }

    var pin_code = document.getElementById("pincode").value;

    var gender = document.getElementsByName("Gender");
    for(var i = 0; i < gender.length ; i++){
        if(gender[i].checked){
            gender_check = gender[i].value;
        }
    }

    let food = document.getElementsByName("food");
    let foodList = [];
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value);
        }
    }
    if(foodList.length>=2){
        food_items = foodList.join(", ");
    }else{
        food_items = alert("Choose atleast 2 options in the food list");
    }

    var state = document.getElementById("State").value;

    var country = document.getElementById("Country").value;

    table(first_name,last_name,address_value,pin_code,gender_check,food_items,state,country);
}

function table(first_name,last_name,address,pin_code,gender_check,food_items,state,country){
    var table_body = document.getElementById("table_body");
    var table_row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML=first_name;
    var td2 = document.createElement("td");
    td2.innerHTML=last_name;
    var td3 = document.createElement("td");
    td3.innerHTML=address;
    var td4 = document.createElement("td");
    td4.innerHTML=pin_code;
    var td5 = document.createElement("td");
    td5.innerHTML=gender_check;
    var td6 = document.createElement("td");
    td6.innerHTML=food_items;
    var td7 = document.createElement("td");
    td7.innerHTML=state;
    var td8 = document.createElement("td");
    td8.innerHTML=country;

    table_row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    table_body.append(table_row);
}