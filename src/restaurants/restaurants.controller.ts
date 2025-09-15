import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {   
    }

@Get()
getRestaurants(){
    return this.restaurantsService.getRestaurants();
  }

@Get('list')
getRestaurants2(): string {
    return 'Lista de restaurantes';
  }
@Get(':id') //  localhost:3000/restaurants/15
getMenu(@Param('id') idRestaurant:string): string {
    return this.restaurantsService.getRestaurantById(idRestaurant);
  }





}
