import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../components/context/AuthContext";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const navigate = useNavigate();

	function logout() {
		setAuth(null);
		navigate.push("/");
	}

	return (
		<nav>
			<Link to="/">Home</Link>
			{auth ? (
				<>
					| <Link to="/dashboard">Dashboard</Link> | <button onClick={logout}>Log out</button>
				</>
			) : (
				<Link to="/login">Login</Link>
			)}
		</nav>
	);
}

export default Nav;