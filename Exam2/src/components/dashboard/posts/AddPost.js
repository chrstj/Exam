import { useState } from "react";
import Axios from 'axios';
import Heading from "../../layout/Heading";

import DashboardPage from "../DashboardPage";
function AddPost() {
    const config = {
		headers:{
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzI5LCJuYW1lIjoiY2hyaXNfdG9mZmVyIiwiZW1haWwiOiJDaHJTdGo1NDYxNEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjkzMjEwOTN9.sI74Dxiyw2eZ3tyPqUbuPiCoAIg0HTPdi680rPOB4WY',
		},
	  };
const url = "https://api.noroff.dev/api/v1/social/posts"
const [data, setData] = useState({
    title: "",
    body: "",
    
})

function submit(e) {
    e.preventDefault();
    Axios.post(url, config,{
        title: data.title,
        body: data.body
    })
    .then(res=>{
        console.log(res.data)
    })

}

function handle(e){
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)

}
  return (
    <>
    	<DashboardPage>
			<Heading content="Add post" />
        <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e)=>handle(e)} id="title" value={data.title} placeholder="Title" type="text"></input>
            <input onChange={(e)=>handle(e)} id="body" value={data.body}  placeholder="Body" type="text"></input>
            <button>Submit</button>

        </form>
        </DashboardPage>
    </>
	);
}

export default AddPost
