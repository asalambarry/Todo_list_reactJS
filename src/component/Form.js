import {useState} from "react";
import App from "../App";
import Item from './Item'
import React from 'react'
import {uid} from "uid";
import {v4 as uuidv4} from 'uuid'

function Form(){
    const[dataArr,setDataArr]=useState([
            {txt:"Promener avec le chien", id:uuidv4()},
            {txt:"Sport", id:uuidv4()},
            {txt:"Coder avec React", id:uuidv4()},
    ])
    //Pour ajouter des données dans mon formulaire
    const[stateInput,setStateInput]=useState()



   // console.log(uuidv4())
    const deleteElement = id => {
       // console.log(id)
        const filteredState = dataArr.filter(item=>{
            return item.id!==id
        })
        setDataArr( filteredState)
    }

    const addTodo = e => {
        e.preventDefault(e)
        const newArr=[...dataArr]
        const newTodo={}
        newTodo.txt=stateInput
        newTodo.id=uuidv4()

        newArr.push(newTodo)
        setDataArr(newArr)
        setStateInput('')

    }
    const linkInput = e => {
        setStateInput(e)
    }
return(
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
        <form onSubmit={e=>addTodo(e)} className="mb-3">
            <label htmlFor="todo"
            className="form-label mt-3">Chose à faire</label>
            <input onChange={e=>linkInput(e.target.value)}
                   value={stateInput}
                   type="text"
            className="form-control" id="todo"/>
            <button className="mt-2 btn btn-primary d-block">Envoyez</button>
        </form>
        <h2>Liste des choses à faire : </h2>
        <ul className="list-group">
            {dataArr.map(item =>{
                return(
                       <Item
                       txt={item.txt}
                       key={item.id}
                       id={item.id}
                       deleFunc={deleteElement}/>
                )
            })}


        </ul>
    </div>
)
}
export default Form

