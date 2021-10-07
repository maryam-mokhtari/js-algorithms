minCost=(cost,visited)=>{
let min=Number.MAX_VALUE
let minV=null
for (i=0;i<cost.length;i++){
if (cost[i]<min&&!visited[i]){
min=cost[i]
minV=i
}
}
return minV
}
