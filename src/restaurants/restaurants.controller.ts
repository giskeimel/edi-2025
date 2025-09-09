import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {   
    }

@Get()
getRestaurants(): string {
    return 'Lista de restaurantes';
  }

@Get(':id')
getMenu(@Param('id') idRestaurant:string): string {
    return 'Menu del restaurante';
  }





}
