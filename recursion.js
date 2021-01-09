 
function even(n){
  var e=[]
  for (var i = 0; i <n; i++){
    if ((i % 2) === 0){ 
              e.push(i);

      } 
    
  } return e;}
  console.log(even(12))

  function odd(n){
  var e=[]
  for (var i = 0; i <n; i++){
    if ((i % 2) !== 0){ 
              e.push(i);

      } 
    
  } 
  return e;
  }
  console.log(odd(12));

function ALG1(A,B,N){

   if(N==0){

    return 0;}
   return (A[N-1] * B[N-1]+ ALG1(A,B,N-1) );
   }

console.log(ALG1(even(608), odd(600),50))
//console.log(ALG1([0,3,6],[0,5,10],3))

function even(n){
  var e=[]
  for (var i = 2; i <n; i++){
    if ((i % 2) === 0){ 
              e.push(i);

      } 
    
  } return e;}
  console.log(even(12))

  function odd(n){
  var e=[]
  for (var i = 0; i <n; i++){
    if ((i % 2) !== 0){ 
              e.push(i);

      } 
    
  } 
  return e;
  }
  console.log(odd(12));

function ALG2(A,low,high){

   if(high-low==1){

        if(A[low]<A[high]){

            return high;}

        else {

            return low; } }

    if (low==high) {

        return high;}
    
    var mid= low+Math.floor((high-low)/2) ;

    var a=ALG2(A,low,mid);

    var b=ALG2(A,mid+1,high) ;

   if(A[a]>A[b]) {

        return a;}

   return b;
   }
   
   
console.log(ALG2(even(700),0,199));
console.log(ALG2(odd(700),0,199));