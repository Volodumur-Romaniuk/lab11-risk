const matrixRisk = (A) =>{
    var max = 0;
    let j = 0;
   
    while(j<=2){
        max = A[0][j]
       for(let i = 0; i <=4; i++){
           if(A[i][j] > max){
               max = A[i][j]     
           }
       }
       for(let i = 0; i <=4; i++){
            A[i][j] = max - A[i][j]
        }
     
       
        j++
    }

}
const solution = (A) =>{
    let arrMax = [];
    let min = 0;
    matrixRisk(A)
    console.log(A)
    for(let i = 0; i <=4; i++){
        arrMax.push(Math.max(...A[i]))
    }
    console.log(arrMax)
    min = Math.min(...arrMax)
    console.log("Отже, згідно з критерієм Севіджа, оптимальним для нашого прикладу є рішення x"+(arrMax.indexOf(min)+1))
}

const A = [
    [2.5, 3.5, 4.0],
    [1.5, 2.0, 3.5],
    [3.5, 8.0, 2.5],
    [7.5, 1.5, 3.5],
    [8.5, 1.5, 4.0]
  
]

solution(A)

