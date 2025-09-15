import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantsService {


    getRestaurants() {
        let restaurant = {
            "id":"1",
            "name":"Pizzeria Napoli",
            "address":"Calle Falsa 123",
            "phone":"123456789",
        };
        return restaurant;
    }
}
