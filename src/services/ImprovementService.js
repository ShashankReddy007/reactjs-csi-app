import http from "../http-common";

const getAll = () => {
  return http.get("/improvements");
};

const get = id => {
  return http.get(`/improvements/${id}`);
};

const create = data => {
  return http.post("/improvements", data);
};

const update = (id, data) => {
  return http.put(`/improvements/${id}`, data);
};

const remove = id => {
  return http.delete(`/improvements/${id}`);
};


const findByStatus = status => {
  return http.get(`/improvements?status=${status}`);
};


//find by title
const findByTitle = improvementTitle => {
  return http.get(`/improvements?improvementTitle=${improvementTitle}`);
};



const ImprovementService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByStatus,
  findByTitle,
  //findParentImprovementId
  
};

export default ImprovementService;
