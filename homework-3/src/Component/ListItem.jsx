
import Item from "./Item";
import hotTrend from "./data";
import './listItem.css'

function ListItem(props) {
  return (
    <div className="listItem">
        <Item data={hotTrend[0]} />
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </div>
  );
      }
export default ListItem