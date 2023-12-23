import React from 'react'
import './Comments.css'
import { useState } from 'react'
import DisplayComments from './DisplayComments'
function Comments() {
  const [commentText, setcommentText] = useState("")

  const commentsList=[{
    _id:"1",
    commentBody:"hello",
    userComment:"abc",
  },
  {
    _id:"2",
    commentBody:"Hii",
    userComment:"NTR",
},
];
  const handleOnSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <form
      className='comments_sub_form_comments'
      onSubmit={handleOnSubmit}
      >
        <input type="text"
        onChange={e=>setcommentText(e.target.value)}
        placeholder='add_comment...'
        className='comment_ibox'
        />
        <input type="submit" value="add" className='comment_add_btn_comments' />
      </form>
      <div className="display_comment_container">
        {
          commentsList.map(m=>{
            return(
              <DisplayComments
              cId={m._id}
              commentBody={m.commentBody}
              userComment={m.userComment}
              />
            )
          })
        }
       
      </div>
    </>
  )
}

export default Comments
