import { Injectable } from '@nestjs/common';
import { RestaurantModel } from './RestaurantModel';

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

    crearRestaurant(restaurant: RestaurantModel) : string{
        
        
        let newRestaurant = {
        "id": restaurant.id,
        "name": restaurant.name, 
        "address": restaurant.address, 
        "phone": restaurant.phone, 

        }
        // Guardo los datos del restaurant nuevo en la lista
        this.restaurants.push(newRestaurant);
        
        return "Restaurant creado correctamente";
    }

}
