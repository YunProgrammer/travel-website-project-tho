import http from "./index";

const getAll = () => {
    return http.get("/packages");
  };
  const getById = id => {
    return http.get(`/packId/${id}`);
  };
  const create = data => {
    return http.post("/addPack", data);
  };
  const update =  data => {
    return http.put(`/updatePack`, data);
  };
  const remove = id => {
    return http.delete(`/deletePack/${id}`);
  };
  
  const PackageApi = {
    getAll,
    create,
    update,
    remove,
    getById,
  
  };
  export default PackageApi;