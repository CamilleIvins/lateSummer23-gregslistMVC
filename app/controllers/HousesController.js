import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { setHTML } from "../utils/Writer.js";




// function _drawHouses() {
//     let houses = AppState.houses
//     let content = ``
//     houses.forEach(house => content += house.CardTemplate)
//     console.log('is the controller up?', houses);
//     setHTML('houses', content)
// }


export class HousesController {

    constructor() {
        console.log('House controller constructor up', AppState.houses, housesService);
        // _drawHouses()
        // AppState.on('houses', _drawHouses)
    }


}


// housesService