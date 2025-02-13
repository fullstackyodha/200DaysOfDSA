function pascalTriangle(numRows){
    let pascal = [];
    let prevRow = [1];
  
    for(let row=0;row<numRows; row++){
        if(row===0){
            pascal.push(prevRow)
        }
        else{
            let curr = [1]
            let j = 1;

            while(j<row){
                curr.push(prevRow[j-1]+prevRow[j])
                j++;
            }

            curr.push(1);
            pascal.push(curr);
            prevRow = curr;
    }
  }

  return pascal;
}

console.log(pascalTriangle(5))