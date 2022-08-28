import React,{useState,useEffect} from 'react'
import { info } from '../../data/item';
import classes from "./Comment.module.css"
function Comment() {
const [HideCOmment, setHideCOmment] = useState(false)
    const [PostDiable, setPostDiable] = useState(true);
const [AddButtonVisible, setAddButtonVisible] = useState(true);
const [Comment, setComment] = useState("");
const [User, setUser] = useState("");
const [Post, setPost] = useState([
    {
        id:1,
        User:"ankit",
        Comment:"what's going on",
    },
    {
        id:2,
        User:"ankush",
        Comment:"hi"
    },
    {
        id:3,
        User:"aneesh",
        Comment:"nothing much"
    }
])
useEffect(() => {
    if(User!==""&&Comment!==""){
        setPostDiable(false)
    }
    else{
        setPostDiable(true)
    }
}, [Comment,User])
const post=(e)=>{
    e.preventDefault();
    const id=Post.length+1;
    const a={
        id,
        User,
        Comment,
    }
setPost([...Post,a])
    setComment("");
    setUser("");
setAddButtonVisible(true);

}

  return (
    <div className={classes.commentContainer}>
        <button onClick={()=>setHideCOmment(!HideCOmment)}>All Comments</button>
        <br/>
{
    HideCOmment && <ul style={{listStyle:"none"}}>
    {Post.map((p,i)=>{
        return(<div key={i} className={classes.Comments}>
            <h1>{p.Comment}.</h1>
            <h6>-{p.User}</h6>
            </div>

        )

    })}
</ul>
}
<div>
{ AddButtonVisible &&
<button onClick={()=>setAddButtonVisible(false)}>Add Comment+</button>
}
</div>
{!AddButtonVisible &&
     <form>
    
     <textarea className={classes.commentInput} value={Comment} id={"Comment"} placeholder = "what's in your mind" maxLength={30} onChange={(e)=>setComment(e.target.value)} />
     <br/>
     <input type="text" className={classes.commentInput} value={User} onChange={(e)=>setUser(e.target.value)} placeholder = "UserName" />
     <button disabled={PostDiable} onClick={post} className={PostDiable?classes.disabled:""}>Post</button>
     </form>
}

    </div>
  )
}

export default Comment