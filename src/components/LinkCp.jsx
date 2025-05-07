import React from "react";
function LinkCp(props){
  console.log('전달받은 속성값들 : ', props)
  console.log('전달받은 속성값들 중 hrefPr : ', props.hrefPr);
  return(
    <a href={props.hrefPr}>{props.textPr}</a>
  )
}
//f(x) = return x + 1
export default LinkCp;
