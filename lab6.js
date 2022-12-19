const  criterionMinRisk = (F,P) =>{
    let E = [];
    let D = [];
    for(let i = 0; i <=2; i++){
        let sum = 0;
        for(let j = 0; j <=3; j++){
           sum+= F[i][j] * P[i][j]
        }
        E.push(sum)
    }
    for(let i = 0; i <=2; i++){
        let sum = 0;
        for(let j = 0; j <=3; j++){
           sum+= Math.pow((F[i][j]-E[i]),2)   * P[i][j]
        }
        D.push(sum)
    }
    let min = Math.min(...D);
    console.log("Отже, за критерієм мінімальної дисперсії найкращим варіантом є x"+(D.indexOf(min)+1)+" з ваговим коeфіцієнтом "+(3/5))
}
const criterionValdes= (F) =>{
    let arrMin = [];
    for(let i = 0; i < 5; i++){
       arrMin.push(Math.min(...F[i]))
    }
    let max = Math.max(...arrMin);
    console.log("Отже, за критерієм Вальда (критерієм максимально сподіваного доходу)  найкращим варіантом є x"+(arrMin.indexOf(max)+1)+" з ваговим коeфіцієнтом "+(2/5))
}
const p = [0.4, 0.3, 0.1]
const F = [
    [8, 2, 4],
    [6, 7, 4],
    [4, 7, 5],
    [3, 5, 6]
] 
let pTest = [
    [0.1, 0.3, 0.6, 0],
    [0.2, 0.5, 0, 0.3],
    [0.6, 0.2, 0.2, 0]
];
let Ftest = [
    [6, 8, 2, 4],
    [3, 7, 3, 5],
    [7, 5, 1, 4],
    [4, 2, 5, 7],
    [6, 3, 2, 8]
];
criterionMinRisk(Ftest,pTest)
criterionValdes(Ftest)