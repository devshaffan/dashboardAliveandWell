import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:5000/api/user/';

class UserService {
  getAllEmployees() {
    return axios.get(API_URL + 'select', { headers: authHeader() });
  }
  getEmployee(ID) {
    return axios.post(API_URL + "selectUser", { ID }, { headers: authHeader() })
  }
  update(ID, Username, Email, Password, DateCreated, FirstName, LastName, DOB, PhoneNo, WorkNo, roleName, Address, Status) {
    return axios.post(API_URL + "update", {
      ID,
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
    }, { headers: authHeader() });
  }
  delete(User_ID) {
    return axios.post(API_URL + "delete",{User_ID},{headers:authHeader()})
  }
}

export default new UserService();