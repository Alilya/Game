import React from "react";
import Button from "./button";

let RowTable = (props) => {
    return (
        <table>
            <tr>
                <td>{props.title}</td>
                <td><Button number={100} name={props.name}/></td>
                <td><Button number={200} name={props.name}/></td>
                <td><Button number={300} name={props.name}/></td>
                <td><Button number={400} name={props.name}/></td>
                <td><Button number={500} name={props.name}/></td>
            </tr>
        </table>
    )

}
export default RowTable;