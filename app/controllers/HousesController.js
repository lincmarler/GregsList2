import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    console.log('drawing cars')
    let template = ''
    AppState.houses.forEach(house => template += house.CardTemplate)
    setHTML('houses', template)
}

export class HousesController {
    constructor() {
        console.log('hello from house controller')
        this.getHouses()
        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)

    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async createHouse() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await housesService.createHouse(formData)
            console.log('create')
            form.reset()
            bootstrap.Collapse.getOrCreateInstance('#houseFormCollapse').hide()

        } catch (error) {
            Pop.error(error.message)
        }
    }

    drawCreateForm() {
        setHTML('houseFormCollapse', House.CreateHouseForm())
    }

    setActive(houseId) {
        housesService.setActive(houseId)
    }


}