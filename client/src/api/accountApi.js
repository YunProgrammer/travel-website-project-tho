
import http from "./index";


const getAll = () => {
  return http.get("user/getAll");
};
const signUp = data => {
  return http.post("usernew/sign-up", data);
};
const signIn = data => {
    return http.post("usernew/login", data);
  };
  const login = () => {
    return http.get("user/login");
  };
const update =  data => {
  return http.put(`user/updateAccount`, data);
};
const remove = id => {
  return http.delete(`user/delete/${id}`);
};
// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };
// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };
const accountApi = {
    signUp,
    signIn,
    login,getAll,
    update,remove
};
export default accountApi;