import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"


class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  // houses = loadState('houses', [House])

  houses = [
    new House({ year: '1974', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 375000, address: "7493 Sample Drive, Breaking Code, MA 01001 ", description: 'Newly renovated mid-century modern home', imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg' }),
    new House({ year: '1972', bedrooms: 2, bathrooms: 1, sqft: 1000, price: 359400, address: "2219 Longwood Drive, Forked River, NJ 08731", description: 'Detached 2-car garage, detached sense of corners', imgUrl: 'https://thumbor.bigedition.com/dome-house-in-new-jersey/ZBreFtpi3aEn8dXkDy440v9lZ1c=/800x600/filters:format(webp):quality(80)/granite-web-prod/3e/df/3edfdd5ac1ea4195b691ec354b8b966d.jpeg' }),
    new House({ year: '1928', bedrooms: 5, bathrooms: 6, sqft: 6404, price: 2529600, address: "51 S Mayflower Rd, Lake Forest, IL 60045", description: 'Custom addition for the medieval LARPer in everyone', imgUrl: 'https://thumbor.bigedition.com/tower-house-in-illinois/W5mejG-yU3dQwzipqkcH8dh1-Rs=/800x600/filters:format(webp):quality(80)/granite-web-prod/83/fc/83fcbd7bacdb459fb6d10f533828ff28.jpeg' }),
    new House({ year: '2000', bedrooms: 2, bathrooms: 2, sqft: 2432, price: 685700, address: "6619 Apache Pl, Larkspur, CO 80118", description: 'Nestled between the rock of success and the hard place of obvious superiority', imgUrl: 'https://thumbor.bigedition.com/rock-house-in-colorado/Hm5p_2GpAYsDEqVOTX1_6fPBgJI=/800x600/filters:format(webp):quality(80)/granite-web-prod/b1/b5/b1b5cc577ae54fda9ef0d42fd51a9099.jpeg' }),
    new House({ year: '1974', bedrooms: 7, bathrooms: 14, sqft: 17755, price: 3361700, address: "5225 Renner Rd, Lake Quivira, KS 66217", description: 'Chic amphibious', imgUrl: 'https://thumbor.bigedition.com/house-with-scuba-grottos-in-lake-quivira-kansas/4RJ-GmNehd_IH40_nmB4J_gdrsc=/800x599/filters:format(webp):quality(80)/granite-web-prod/f9/0e/f90ec2e1e67946cf8e2613d956de61d8.jpeg' }),
  ]


  cars = loadState('cars', [Car])

  // cars = [

  //   new Car({
  //     make: "BMW",
  //     model: "335i",
  //     year: 1973,
  //     imgUrl: "https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627",
  //     price: 50000,
  //     isNew: true,
  //     description: "Mint",
  //     color: "silver"
  //   }),
  //   new Car(
  //     {
  //       make: "Mazda",
  //       model: "Miata",
  //       year: 1997,
  //       imgUrl: "https://bringatrailer.com/wp-content/uploads/2022/06/1997_mazda_mx-5-miata_img_1612-5-84972.jpg?fit=940%2C626",
  //       price: 8000,
  //       isNew: false,
  //       description: "Perfect for cruisin' down the coast",
  //       color: "black"
  //     }
  //   ),
  //   new Car(
  //     {
  //       make: "Muscle",
  //       model: "Car",
  //       year: 2043,
  //       imgUrl: "https://media.tenor.com/EgMfjYtMD3oAAAAC/car-jump.gif",
  //       price: 900000,
  //       isNew: false,
  //       description: "Getcha one of these bad boys",
  //       color: "red"
  //     }
  //   )

  // ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
