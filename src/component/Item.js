import React from 'react';
const Item = (props) => {
    return ( <
        li className = "border justify-content-between align-items-center d-flex p-2 m-2" >
        <
        div className = "className p-3" > { props.txt } < /div> <
        button className = "btn btn-danger p-2 h-50"
        onClick = {
            () => props.deleFunc(props.id) } >
        Supprimer < /button> <
        /li>
    )
}

export default Item;