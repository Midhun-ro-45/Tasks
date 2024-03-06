import axios from "axios";

const UsersUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
    try {
        const usersResponse = await axios.get(UsersUrl);
        return usersResponse
    }
    catch (error) {
        console.log(error);
    }

}