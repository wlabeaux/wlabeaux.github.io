let HR = {
    "employees":[{
        "name":"Sam",
        "department":"Tech",
        "designation":"Manager",
        "Salary":40000,
        "raise-eligible":true
    },
    {
        "name":"Mary",
        "department":"Finance",
        "designation":"Trainee",
        "Salary":18500,
        "raise-eligible":true
    },
    {
        "name":"Bill",
        "department":"HR",
        "designation":"Executive",
        "Salary":21200,
        "raise-eligible":false
    }]
}

let company = {
    "companyInfo" : [
    {
        "companyName":"Tech Stars",
        "website":"www.techstars.site",
        "employees": HR["employees"]
    }
    ]
}

//Question 1
console.log(HR["employees"]);

//Question 2
console.log(company["companyInfo"])

//Question 3
HR["employees"].push(
    {
    "name":"Anna",
    "department":"Tech",
    "designation":"Executive",
    "Salary":25600,
    "raise-eligible":false
    }
);
console.log(HR["employees"][3]);

//Question 4
let totalsalary = 0;
for (let i=0; i < HR["employees"].length; i++){

    totalsalary +=  HR["employees"][i].Salary;
}
console.log(totalsalary);

//Question 5
function deservelivingWage(){
    for (let i=0; i < HR["employees"].length; i++){
        
        if (HR["employees"][i]["raise-eligible"] == true){
            HR["employees"][i]["Salary"] = HR["employees"][i]["Salary"] * 1.1;
            HR["employees"][i]["raise-eligible"] = false;
        }
    }
    console.log(HR["employees"])
}
deservelivingWage();

//Question 6 
const wfh = ["Anna", "Sam"];
for (let i=0; i < HR["employees"].length; i++){
    if(wfh.includes(HR["employees"][i]["name"])){
        HR["employees"][i]["wfh"] = true;
    }
    else{
        HR["employees"][i]["wfh"] = false;
    }
}
console.log(HR["employees"])
