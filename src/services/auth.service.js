import axios from "axios";
import authHeader from './auth.header';
const API_URL = "http://localhost:5000/api/auth/";

class AuthService {
    login(Email, Password) {
        return axios
            .post(API_URL + "signIn", {
                Email,
                Password
            })
            .then(response => {
                
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(Username, Email, Password, DateCreated, FirstName, LastName, DOB, PhoneNo, WorkNo, roleName, Address, Status) {
        return axios.post(API_URL + "signUp", {
            Username,
            Email,
            Password,
            DateCreated,
            roleName,
            FirstName,
            LastName,
            DOB,
            PhoneNo,
            WorkNo,
            Address,
            Status
        },{ headers: authHeader() });
    }
    
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();