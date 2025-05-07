import LinkCp from "./LinkCp";

function ListCp(props){
  console.log('li 전달받은 속성값들 : ', props)
  return(
    <li><LinkCp hrefPr={props.hrefPr} textPr={props.textPr} /></li>
  );
}
export default ListCp;