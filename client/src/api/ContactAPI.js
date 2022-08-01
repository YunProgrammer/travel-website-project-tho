
import http from "./index";
const getAll = () => {
  return http.get("/contact");
};
const getContactById = id => {
  return http.get(`/contact/${id}`);
};
const create = data => {
  return http.post("/addContact", data);
};
const update =  data => {
  return http.put(`/contact/updateContact`, data);
};
const remove = id => {
  return http.delete(`/delete/${id}`);
};

const ContactApi = {
  getAll,
  create,
  update,
  remove,
  getContactById,

};
export default ContactApi;