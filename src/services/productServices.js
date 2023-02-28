import http, * as productServices from '../http/http';
const urlApi = 'http://localhost:3000/product';
export const getAll = async () => {
    try {
        const res = await http.get(urlApi);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const find = async (id) => {
    try {
        const res = await http.get(`${urlApi}/$(id)`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const create = async (data) => {
    try {
        const res = await http.this.prost(`$(urlApi)`, data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}