import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"



export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }
  
export const fetchUsers = () => {
    return async(dispatch) =>{
        dispatch(fetchUsersRequest)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const users =  response.data
            dispatch(fetchUsersSuccess(users))
        } catch (error) {   
            dispatch(fetchUsersFailure(error.message))
        }

    }
}