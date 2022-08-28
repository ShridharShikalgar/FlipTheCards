import React,{useState} from 'react'
import classes from "./Rating.module.css"
import {IoIosThumbsUp} from 'react-icons/io';
import {FaStar} from "react-icons/fa";
function Rating() {
const [ratinggiven, setratinggiven] = useState(false)
  const [Hidden, setHidden] = useState(false);
  const [ratingValue, setratingValue] = useState(null)
const [hoverRating, sethoverRating] = useState(null)
const [HiddenButton, setHiddenButton] = useState(false);

const postRating=()=>{
  setHidden(false);
  setHiddenButton(false)
  setratinggiven(true);
console.log(ratingValue);
}
if(ratinggiven===false){
return (

  <div className={classes.container }>
    <div className={classes.button}
    onClick={()=>{setHidden(!Hidden);
      setratingValue(null)
    }}
    >

  <div className={classes.ratingLogo}>Give Your Rating
  </div>
  <IoIosThumbsUp className={classes.logo}/>
  </div>

{
Hidden &&
[...Array(5)].map((star,index)=>{
  return (
    <label>
      <input type="radio" value={index+1} onClick={(e)=>{setratingValue(e.target.value);
    setHiddenButton(true);  
    }}
       />
    <FaStar className={classes.icon} size={45} color={(hoverRating|| ratingValue)>=index+1?"yellow":"black"}
      onMouseEnter={(e)=>{sethoverRating(index+1)}}
      onMouseLeave={(e)=>{sethoverRating(null)}}
    
    />
    </label>
    

  )
})  
}
{
HiddenButton&& 

<button type="submit" className={classes.buttons}
onClick={postRating}
>Post</button>
}
</div>

  
)
}
  else{
    return <h1 className={classes.rating}>your Rating is {ratingValue}/5</h1>
  }
}

export default Rating