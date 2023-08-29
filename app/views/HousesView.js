export const HousesView = `<div class="container-fluid">
        <!-- SECTION collapse form -->
        <section class="row ">
          <div class="col-12">

            <button onclick="app.HousesController.drawCreateForm()" class="btn btn-primary" type="button"
              data-bs-toggle="collapse" data-bs-target="#houseFormCollapse" aria-expanded="false"
              aria-controls="collapseExample">
              List House 🏠
            </button>

            <!-- SECTION collapse starts here -->
            <div class="collapse" id="houseFormCollapse">
            
            <form class="row p-2" onsubmit="app.HousesController.createHouse()">

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
        <select name="houseLevels" id="levels">
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
    </form> 
            </div>

          </div>
        </section>

        <!-- SECTION cars row -->
        <section class="row justify-content-center" id="houses">
          <!-- STUB car template -->
          <!-- <div class="col-md-10 elevation-5 rounded">
            <div class="row">
              <div class="col-md-4 p-0">
                <img class="img-fluid"
                  src="https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*"
                  alt="">
              </div>
              <div class="col-md-8">
                <h1 class="text-center">1999 Honda Accord</h1>
                <div class="d-flex justify-content-around">
                  <span>Price: $00000</span>
                  <span>Engine Type: ....</span>
                </div>
                <p>Description....</p>
                <div class="d-flex align-items-center">
                  <img class="creator-img"
                    src="https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg"
                    alt="">
                  <span>Charles Francis Xavier</span>
                </div>
              </div>
            </div>
          </div> -->
        </section>
      </div>
            `