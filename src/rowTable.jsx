import React from "react";
import Button from "./button";
import style from "./styles/row.module.css"

let RowTable = (props) => {
    return (
        <table className={style.table}> 
           
                <td className={style.row}>{props.title}</td>
                <div className={style.container}>
                    <td><Button number={100} name={props.name} /></td>
                    <td><Button number={200} name={props.name} /></td>
                    <td><Button number={300} name={props.name} /></td>
                    <td><Button number={400} name={props.name} /></td>
                    <td><Button number={500} name={props.name} /></td>
                </div>

            
        </table>
    )

}
export default RowTable;