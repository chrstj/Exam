import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

export default function PostList() {
    const config = {
		headers:{
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzI5LCJuYW1lIjoiY2hyaXNfdG9mZmVyIiwiZW1haWwiOiJDaHJTdGo1NDYxNEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjkzMjEwOTN9.sI74Dxiyw2eZ3tyPqUbuPiCoAIg0HTPdi680rPOB4WY',
		},
	  };
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch('https://api.noroff.dev/api/v1/social/posts', config);
				console.log("response", response);
                const json = await response.json();
				setPosts(json);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) return <div>Loading posts...</div>;

	if (error) return <div>{}</div>;

	return (
		<>
			{posts.map(function (post) {
				return <div className="posts" key={post.id}>
					<h2>{post.title}</h2>
					<div><p>{post.body}</p></div>
					<div><img id="postImg" src={post.media}></img></div>
					<div>Comments: {post._count.comments}</div>
					<div>Reactions: {post._count.reactions}</div>
					
					</div>
					
				
			})}
		</>
	);
}