import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route, RouteDocument } from './entities/route.entity';

@Injectable()
export class RoutesService {

  constructor(
    ) {}

  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll(): Route[] {
    // return this.routeModel.find().exec();
    return [
      new Route(
        '1',
        'Primeiro',
        { lat: -15.82594, lng: -47.92923 },
        { lat: -15.82942, lng: -47.92765 }
      ),
      new Route(
        '2',
        'Segundo',
        { lat: -15.82449, lng: -47.92756 },
        { lat: -15.8276, lng: -47.92621 },
      ),
      new Route(
        '3',
        'Terceiro',
        { lat: -15.82331, lng: -47.92588 },
        { lat: -15.82758, lng: -47.92532 },
      ),
      new Route(
        '4',
        'Quarto',
        { lat: -27.56825, lng: -48.61019 },
        { lat: -27.58288, lng: -48.57802 },
      ),
      new Route(
        '5',
        'Quinto',
        { lat: -27.61492, lng: -48.54430 },
        { lat: -27.78357, lng: -48.52428 },
      )
    ]
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
