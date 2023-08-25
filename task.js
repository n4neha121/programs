let companyarray=[
    {
        
        employees:[
            {
            Name:"Neha",
            salary:20000,
            gender:"female",
            deptid:101
            },
            {
                Name:"riya",
                salary:30000,
                gender:"female",
                deptid:103
                },

                {
                    Name:"khushbu",
                    salary:10000,
                    gender:"female",
                    deptid:105
                    },

                    {
                        Name:"raj",
                        salary:50000,
                        gender:"male",
                        deptid:101
                        }
             ]
   
            }
]
let departarray=[
    {
       
        employeesdept:[
            {
                deptname:"HR",
                deptid:105
            },
            {
                deptname:"Management",
                deptid:101
            },
            {
            deptname:"Developer",
                deptid:103
            },
        ]
    }
]
//let totalemployees=companyarray.reduce((total,company) => total+company.employees.length,0);
//console.log("total employees in company:",totalemployees)
/*let totalemployees=0;
companyarray.forEach(company=>{
    totalemployees+=company.employees.length;
});
console.log("total employees=",totalemployees)

let total_salary=0;
companyarray.forEach(company =>{
    company.employees.forEach(employee=>{
        total_salary+=employee.salary;
    });

});

console.log("total salary=",total_salary)*/
/*let total_employee=0;
companyarray.map(company =>{
    total_employee+=company.employees.length;
});
console.log("total employee=",total_employee)

function gettotalemp(deptID){
    let employeescounting=companyarray[0].employees.filter(employee=>employee.deptid === deptID).length;
    return employeescounting;
}
let output=departarray[0].employeesdept.map(department =>{
    let total_emp=gettotalemp(department.deptid);
    return `${department.deptname}: ${total_emp} employees`
});
console.log(output)*/

function totalsalary(deptID){
    let employeesindept=companyarray[0].employees.filter(employee => employee.deptid===deptID);
    let totalsalary=employeesindept.reduce((total,employee)=>total+employee.salary,0);
    return totalsalary;
    }
   
    let output=departarray[0].employeesdept.map(department =>{
        let total_sal=totalsalary(department.deptid);
       let employeesindepartment=companyarray[0].employees.filter(employee => employee.deptid === department.deptid );
      let employeenames= employeesindepartment.map(employee=> employee.Name);
   return{
   deptname:department.deptname,
   deptid:department.deptid,
   totalsalary:total_sal,
   employeenames:employeenames
   
   }
});
console.log(output);


