import { BASE_URL } from "../utils/variables/Variable";

export const API = async ({
    method = "GET",
    body = null,
    contentType = "application/json",
    endpoint,
}) => {
    const opciones = {
        method,
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };

    const res = await fetch(BASE_URL + endpoint, opciones);
    return res
}