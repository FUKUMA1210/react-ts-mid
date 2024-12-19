export enum api{
    findAll = "http://localhost:7777/api/v1/user/findAll",
    insertOne = "http://localhost:7777/api/v1/user/insertOne",
    updateByID = "http://localhost:7777/api/v1/user/update/:id",
    deleteByID = "http://localhost:7777/api/v1/user/delete/:id",
    findByID = "http://localhost:7777/api/v1/user/find/:id"
}