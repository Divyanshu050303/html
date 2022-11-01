// var time=Math.max(...arr)
// var time2=Math.min(...arr)
// var tim2=[time];
// var tim3=[time2];
 
 
// for(let i=0;i<arr.length;i++){
//      if(time+arr[i]>time){
//         tim2[1]=arr[i];
            
//      }
//      if(arr[i]-time2<tim2){
   //             tim3[1]=arr[i]-time2;    
   //      }     
   // }
   // console.log(tim2)
   // console.log(tim3)
   
//    var arr=[20,1,3,9]
// arr.sort(function(a,b){return a-b})
// console.log("maxmimum value pair",arr[arr.length-1],"", arr[arr.length-2])
// console.log("minimum value pair",arr[0],"", arr[1])

// const arr = ['css', 'js', 'ts'];

// const splice = arr.splice(0, 1);
// console.log(splice)

 

// var arr = ["soja", "read", "do", "time"];
  
// 	var x = 3; 
// 	var pos = 1;
// 	var temp = arr[x];
// 	var i;
// 	for (i = x; i >= pos; i--)
// 		{
// 			arr[i] = arr[i - 1]
// 		}
// 	arr[pos] = temp;
//    console.log(arr)
// var time=""
// var arr=[1,2,3,7,11,12,13,17]
// time+=arr[0]
// for(let i=0;i<arr.length-1;i++){
//    if(arr[i]%2!=0 && arr[i+1]%2!=0){
//       time+="$"
      
//    }
//    time+=arr[i+1]
// }
// console.log(time)
var arr=[-10,20,-3,-51,55,100,-2]
let j=0;
        
for(let i=0; i<arr.length; i++)
{
    if(arr[i] < 0)
    {
        if(i != j)
        {
            let temp= arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
        j++;
    }
}
console.log(arr)

 
