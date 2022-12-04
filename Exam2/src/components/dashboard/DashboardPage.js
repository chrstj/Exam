import PropTypes from "prop-types";
import Heading from "../layout/Heading";
import PostList from "./posts/PostList";

export default function DashboardPage({ children }) {
	return (
		<>
			<Heading content="Latest Posts" />
            <PostList />
		</>
	);
}

DashboardPage.propTypes = {
	children: PropTypes.node,
};