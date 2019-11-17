/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch(shape){
  case 'square':
      for(let i=0;i<height;i++){
        let line='';
      for(let j=0;j<height;j++){
        
        line=line+character;
         
      }
      console.log(line)
      }
      break;
  case 'triangle':

    for(let i=0;i<height;i++){
        let line='';
      for(let j=0;j<i+1;j++){
        line=line+character;
      }
      console.log(line)
    }
    break;

  case 'diamond':
    if(height%2==0){
      console.log('please enter an odd height');
    }else{
        const m=(height-1)/2;

        console.log(m)

        for(let h=0;h<m;h++){
          let topline='';
          let i=0;
          let j=0;
          while(i<m-h){
            topline=topline+' ';
            i++;
          
          }
          while(m-h+j<=m+h){
            topline=topline+character;
            j++;
          }

          console.log(topline)
        }
        let midline='';
        for(let middle=0;middle<height;middle++){
          midline=midline+character;
        }
        console.log(midline)
    }
    //bot part
    const m2=(height-1)/2;
    
    for(let bh=0;bh<m2;bh++){
      let botline=''
      let bi=0;
      let bj=0;
      while(bi<bh+1){
      botline=botline+' ';
      bi++;
      }
      while(bj<height-2*(bh+1)){
        botline=botline+character;
        bj++;
      }
      console.log(botline)
    }

  }

};
console.log(printShape('diamond',9, 'x'))