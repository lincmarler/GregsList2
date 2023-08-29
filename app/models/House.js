import { AppState } from "../AppState.js";

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creator.id
        this.creatorName = data.creator.name
        this.creatorPicture = data.creator.picture
    }


    get CardTemplate() {
        return `<div class="col-md-10 elevation-5 rounded my-2">
            <div class="row">
              <div class="col-md-4 p-0">
                <img class="img-fluid"
                  src=${this.imgUrl}
                  alt="No Picture Provided">
              </div>
              <div class="col-md-8">
                <h1 class="text-center">${this.year}   ${this.bedrooms} bed   ${this.bathrooms} bath</h1>
                <div class="d-flex justify-content-around">
                  <span>Price: $${this.price}</span>
                  <span>Stories: ${this.levels}</span>
                </div>
                <p>${this.description}</p>
                <div class="d-flex align-items-center">
                  <img class="creator-img"
                    src=${this.creatorPicture}
                    alt="${this.creatorName}">
                  <span>${this.creatorName}</span>
                </div>
                <div class="my-3 d-flex justify-content-between">
               
                </div>
              </div>
            </div>
          </div>`
    }

    static CreateHouseForm() {
        return `<form class="row p-2" onsubmit="app.HousesController.createHouse()">

      <div class="form-floating mb-3 col-4">
        <input required type="number" min="100" class="form-control" id="houseYear" name="year"
          placeholder="House Year">
        <label for="houseYear">House Year</label>
      </div>

      <div class="form-floating mb-3 col-4">
        <input required type="number" class="form-control" min="1" id="houseBedrooms" name="bedrooms"
          placeholder="Car Model">
        <label for="houseBedrooms">Bedrooms</label>
      </div>

      <div class="form-floating mb-3 col-4">
        <input required type="number" class="form-control" min="1" id="houseBathrooms" name="bathrooms"
          placeholder="Bathrooms">
        <label for="houseBathrooms">Bathrooms</label>
      </div>

      <div class="form-floating mb-3 col-6">
        <input required type="number" class="form-control" max="10000000000" id="housePrice" name="price"
          placeholder="House Price">
        <label for="housePrice">House Price</label>
      </div>

      <div class="form-floating mb-6 col-2">
        <p>Stories:</p>
        <select name="levels" id="housesLevels">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div class="form-floating mb-3 col-12">
        <input required type="text" class="form-control" id="houseimgUrl" name="imgUrl" placeholder="House imgUrl">
        <label for="houseimgUrl">House Image Url</label>
      </div>

      <div class="form-floating">
        <textarea required maxLength="144" class="form-control" placeholder="Please describe your house"
          name="description" id="houseDescription" style="height: 100px"></textarea>
        <label for="houseDescription">House Description</label>
      </div>


      <div class="text-end">
        <button type="submit" class="btn btn-info">Create Listing</button>

      </div>
    </form>`
    }
}
