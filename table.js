import React from "react";
import { useNavigate } from 'react-router-dom';


function Table() {
    const navigate = useNavigate()

    function homePage() {
        navigate('/')
    }

    return (


        <
        table >
        <
        tr >
        <
        th > USER NAME < /th>  <
        th > Email < /th>  <
        th > PASSWORD < /th>  <
        /tr>  <
        tr >
        <
        td > jero < /td> <
        td > je @gmail.com < /td> <
        td > 1234 < /td>  <
        /tr>  <
        tr >
        <
        td > will < /td> <
        td > will @gmail.com < /td> <
        td > 12345 < /td> <
        /tr> <
        tr >
        <
        td > clarit < /td>  <
        td > clarit @gmail.com < /td>  <
        td > 1234 @ < /td> <
        /tr>  <
        button onClick = { homePage } > Going to homepage < /button> <
        /table>


    )


}
export default Table;