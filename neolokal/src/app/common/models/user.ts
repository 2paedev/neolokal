import { LocationSettings } from './location-settings';

export interface IUser {
    id: number;
    name: string;
    mail: string;
    locatedInLokal: boolean;
    locationSettings: LocationSettings;
}
