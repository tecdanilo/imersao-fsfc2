import { Document } from 'mongoose';

export type RouteDocument = Route & Document;

export class Route {
    _id: string;
    title: string;
    startPosition: { lat: number, lng: number};
    endPosition: { lat: number, lng: number};

    constructor(_id, title, startPosition, endPosition){
        this._id = _id;
        this.title = title;
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }

}

// Geração do schema no modelo do mongoose
// export const RouteSchema = SchemaFactory.createForClass(Route);