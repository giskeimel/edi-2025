import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantsService {

    restaurants = [];
    constructor() {
        let restaurant = {
            "id":"1",
            "name":"Pizzeria Napoli",
            "address":"Calle Falsa 123",
            "phone":"123456789",
        };
        this.restaurants.push(restaurant);
        restaurant = {
            "id":"2",
            "name":"Pizzeria tecda",
            "address":"Calle nueva 123",
            "phone":"12345612312789",
        };
        this.restaurants.push(restaurant);
    }

    getRestaurants() {
    
        return this.restaurants;
    }

    getRestaurantById(id:string) {
        for ( const variable of this.restaurants) {
            if (variable.id === id) {
                return variable;
            }
        }
        return "REstaurante no encontrado";
    }
}
