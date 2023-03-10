import { DoneHelper } from "../../helpers/DoneHelper"
import './style.css'
export const Done = ()=>{

    return(
        <div className="Done">
            <ol>
            {DoneHelper.map((list)=>(
             <li><p>{list}</p></li>   
            ))}
            </ol>
        </div>
    )
}