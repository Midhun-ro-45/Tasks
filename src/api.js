import axios from "axios";                                       //data fetching task

export const UsersUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
    try {
        const usersResponse = await axios.get(UsersUrl);
        return usersResponse
    }
    catch (error) {
        console.log(error);
    }

}


export const AddUser = async (userExists) => {
    try {
        const response = axios.post(UsersUrl, userExists);
        return response
    }
    catch (error) {
        console.log(error);
    }
}
