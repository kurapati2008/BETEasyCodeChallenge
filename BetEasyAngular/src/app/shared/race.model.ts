export class RaceCourse {
    EventID : number;
    MasterEventID:number;
    EventName:string;
    EventTypeDesc:string;
    MasterEventName:string;
    AdvertisedStartTime:Date;
    RaceNumber:number;
    EventType:EventType;
    Venue:Venue;
    IsMultiAllowed:boolean;
    Slug:string;
    DateSlug:string;
    RacingStreamAllowed:boolean;
    RacingReplayStreamAllowed:boolean;
    ImageUrl:string;
}

export class EventType {
    EventTypeID: number;
    EventTypeDesc:string;
    MasterEventTypeID:number;
    Slug:string;
}

export class Venue {
    Venue:string;
    StateCode:number;
    Slug:string;
}



