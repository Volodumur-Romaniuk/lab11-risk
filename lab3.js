const U1 = (x) => {return 1.3*x}
const U2 = (x) => {return 1.4*Math.sqrt(x)}
const U1o = (x) =>{return x/1.3}
const U2o = (x) =>{return 1/(1.4*Math.sqrt(x))}
const solution = (L) =>{
    let spodivanuiVugrash = (L[0] + L[2])/2;
    let MUx = L[1]*U1(L[0]) + (1-L[1]) * U1(L[2])
    let UMx = U1(MUx);
    let MUxNeg = U1o(MUx);  
    let obStud1 ={
        "студент перший":{
            "премія":+(spodivanuiVugrash - MUxNeg).toFixed(3),
            "M(Ux)":MUx,
            "U(Mx)":UMx
        }
    }
   
   
    
     MUx = L[1]*U2(L[0]) + (1-L[1]) * U2(L[2])
     UMx = U2(MUx);
     MUxNeg = U2o(MUx);  
    let obStud2 ={
        "студент другий":{
            "премія":+(spodivanuiVugrash - MUxNeg).toFixed(3),
            "M(Ux)":MUx,
            "U(Mx)":UMx
        }
    }
   
    let student1 = new Map(Object.entries(obStud1));
    let student2 = new Map(Object.entries(obStud2));

   
    console.log(student1)
    console.log(student2)
    if(student1.get("студент перший")["U(Mx)"] > student1.get("студент перший")["M(Ux)"] ){
        console.log("студент перший не схильний до ризику")
    }
    if(student1.get("студент перший")["U(Mx)"] < student1.get("студент перший")["M(Ux)"] ){
        console.log("студент перший  схильний до ризику")
    }
    if(student1.get("студент перший")["U(Mx)"] === student1.get("студент перший")["M(Ux)"] ){
        console.log("студенту першому  байдуже")
    }


    if(student2.get("студент другий")["U(Mx)"] > student2.get("студент другий")["M(Ux)"] ){
        console.log("студент другий не схильний до ризику")
    }
    if(student2.get("студент другий")["U(Mx)"] < student2.get("студент другий")["M(Ux)"] ){
        console.log("студент другий схильний до ризику")
    }
    if(student2.get("студент другий")["U(Mx)"] === student2.get("студент другий")["M(Ux)"] ){
        console.log("студенту другому  байдуже")
    }
}


let L = [50,0.5,150]

solution(L);