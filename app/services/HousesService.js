import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";


const _sandboxApi = axios.create({
    baseURL: "https://sandbox.codeworksacademy.com",
    timeout: 8000
})

class HousesService {

    async getHouses() {
        const response = await _sandboxApi.get('api/houses')
        const mappedHouses = response.data.map(dataObj => new House(dataObj))
        AppState.houses = mappedHouses
    }

    async createHouse(formData) {
        const res = await api.post('api/houses', formData)
        console.log(res.data, 'creating house')
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }
    setActive(houseId) {
        let house = AppState.houses.find(house => house.id == houseId)
        AppState.activeHouse = house
    }
}

export const housesService = new HousesService()