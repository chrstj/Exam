import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const url = "https://api.noroff.dev/api/v1/social";

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzI5LCJuYW1lIjoiY2hyaXNfdG9mZmVyIiwiZW1haWwiOiJDaHJTdGo1NDYxNEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjkzMjEwOTN9.sI74Dxiyw2eZ3tyPqUbuPiCoAIg0HTPdi680rPOB4WY` : "";
		return config;
	});

	return apiClient;
}