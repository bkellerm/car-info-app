import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Car {
  readonly id: string;
  readonly registration?: string;
  readonly mileage?: number;
  readonly fuel_level?: number;
  readonly fuel_liters?: number;
  readonly battery_status?: string;
  readonly last_location_longitude: number;
  readonly last_location_latitude: number;
  constructor(init: ModelInit<Car>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car>) => MutableModel<Car> | void): Car;
}