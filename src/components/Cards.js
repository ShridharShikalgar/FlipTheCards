import { useState } from 'react'
import Card from './Card'
import {info} from '../data/item'
function Cards(){
    const [items, setItems] = useState(info)
    const [prev, setPrev] = useState(-1)

    function handleClick(id){

        for(let i=0;i<items.length;i++){
            if(i===id){
                continue;
            }
            items[i].stat="";
        }
        if(items[id].stat==="active"){
        
        }
        else{
            items[id].stat = "active";
        }
        setItems(items)
        setPrev(!prev) 
    }
    

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards