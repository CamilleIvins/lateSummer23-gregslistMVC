import { generateId } from "../utils/generateId.js"


export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.adress = data.adress
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        console.log('example houses');
    }


    get CardTemplate() {
        return /*html*/`
           <div class="col-md-10 elevation-5 rounded-top my-2" style="border: 2px solid">
            <div class="row">
              <div class="col-4 p-0">
                <img class="img-fluid rounded-start"
                  src=${this.imgUrl}
                  alt="${this.year} ${this.description}">
              </div>
              <div class="col-8">
                <h2 class="text-center">${this.year} | bd:${this.bedrooms} | ba:${this.bathrooms} | ba:${this.sqft}sqft</h2>
                <div class="d-flex justify-content-around pt-3">
                  <span>$${this.price}</span>
                  <span>${this.adress}</span>
                </div>
                <p>${this.description}</p>
                <div class="text-end py-2">
                    // <button class="btn btn-danger" onclick="app.HousesController.deleteHouse('${this.id}')">Remove House Listing <i class="mdi mdi-delete"></i> </button>
                </div>
              </div>
            </div>
          </div>`
    }
}
