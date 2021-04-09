import {Prop, Schema, raw, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RouteDocument = Route & Document;

@Schema()
export class Route {
    @Prop()
    _id: string;

    @Prop()
    title: string;

    @Prop(
        raw(
            {
                lat: {type: Number},
                lng: {type: Number}
            }
        )
    )
    startPosition: { lat: number, lng: number};

    @Prop(
        raw(
            {
                lat: {type: Number},
                lng: {type: Number}
            }
        )
    )
    endPosition: { lat: number, lng: number};

}

// Geração do schema no modelo do mongoose
export const RouteSchema = SchemaFactory.createForClass(Route);