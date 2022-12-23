import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: {
      $oid: "63a03b41bf06fe32b0558130"
    },
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    username: "Bhavik",
    email: "xyz@gmail.com",
    password: "$2b$10$kogVx458bPJE43IqMA/OfOxdnLoZhbQNbsJPSZCJvkgWr2tYL8/Ke",
    createdAt: {
      $date: {
        $numberLong: "1671445313762"
      }
    },
    updatedAt: {
      $date: {
        $numberLong: "1671445313762"
      }
    },
    __v: 0
  },
  isFetching: false,
  error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
