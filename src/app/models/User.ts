import {Location} from "./Location";

export interface User {
     id : string;
    firstName?: string;
    lastName?: string;

    email?: string;

    username?: string;

    password?:string;

    active?: boolean;

    locationDto?: Location;
}
