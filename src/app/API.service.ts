/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCarInput = {
  id?: string | null;
  registration?: string | null;
  mileage?: number | null;
  fuel_level?: number | null;
  fuel_liters?: number | null;
  battery_status?: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

export type ModelCarConditionInput = {
  registration?: ModelStringInput | null;
  mileage?: ModelFloatInput | null;
  fuel_level?: ModelFloatInput | null;
  fuel_liters?: ModelFloatInput | null;
  battery_status?: ModelStringInput | null;
  last_location_longitude?: ModelFloatInput | null;
  last_location_latitude?: ModelFloatInput | null;
  and?: Array<ModelCarConditionInput | null> | null;
  or?: Array<ModelCarConditionInput | null> | null;
  not?: ModelCarConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateCarInput = {
  id: string;
  registration?: string | null;
  mileage?: number | null;
  fuel_level?: number | null;
  fuel_liters?: number | null;
  battery_status?: string | null;
  last_location_longitude?: number | null;
  last_location_latitude?: number | null;
};

export type DeleteCarInput = {
  id?: string | null;
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null;
  registration?: ModelStringInput | null;
  mileage?: ModelFloatInput | null;
  fuel_level?: ModelFloatInput | null;
  fuel_liters?: ModelFloatInput | null;
  battery_status?: ModelStringInput | null;
  last_location_longitude?: ModelFloatInput | null;
  last_location_latitude?: ModelFloatInput | null;
  and?: Array<ModelCarFilterInput | null> | null;
  or?: Array<ModelCarFilterInput | null> | null;
  not?: ModelCarFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateCarMutation = {
  __typename: "Car";
  id: string;
  registration: string | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

export type UpdateCarMutation = {
  __typename: "Car";
  id: string;
  registration: string | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

export type DeleteCarMutation = {
  __typename: "Car";
  id: string;
  registration: string | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

export type GetCarQuery = {
  __typename: "Car";
  id: string;
  registration: string | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

export type ListCarsQuery = {
  __typename: "ModelCarConnection";
  items: Array<{
    __typename: "Car";
    id: string;
    registration: string | null;
    mileage: number | null;
    fuel_level: number | null;
    fuel_liters: number | null;
    battery_status: string | null;
    last_location_longitude: number;
    last_location_latitude: number;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCarSubscription = {
  __typename: "Car";
  id: string;
  registration: string | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

export type OnUpdateCarSubscription = {
  __typename: "Car";
  id: string;
  registration: string | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

export type OnDeleteCarSubscription = {
  __typename: "Car";
  id: string;
  registration: string | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
  last_location_longitude: number;
  last_location_latitude: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async ResetCars(): Promise<boolean | null> {
    const statement = `mutation ResetCars {
        resetCars
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <boolean | null>response.data;
  }
  async CreateCar(
    input: CreateCarInput,
    condition?: ModelCarConditionInput
  ): Promise<CreateCarMutation> {
    const statement = `mutation CreateCar($input: CreateCarInput!, $condition: ModelCarConditionInput) {
        createCar(input: $input, condition: $condition) {
          __typename
          id
          registration
          mileage
          fuel_level
          fuel_liters
          battery_status
          last_location_longitude
          last_location_latitude
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCarMutation>response.data.createCar;
  }
  async UpdateCar(
    input: UpdateCarInput,
    condition?: ModelCarConditionInput
  ): Promise<UpdateCarMutation> {
    const statement = `mutation UpdateCar($input: UpdateCarInput!, $condition: ModelCarConditionInput) {
        updateCar(input: $input, condition: $condition) {
          __typename
          id
          registration
          mileage
          fuel_level
          fuel_liters
          battery_status
          last_location_longitude
          last_location_latitude
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCarMutation>response.data.updateCar;
  }
  async DeleteCar(
    input: DeleteCarInput,
    condition?: ModelCarConditionInput
  ): Promise<DeleteCarMutation> {
    const statement = `mutation DeleteCar($input: DeleteCarInput!, $condition: ModelCarConditionInput) {
        deleteCar(input: $input, condition: $condition) {
          __typename
          id
          registration
          mileage
          fuel_level
          fuel_liters
          battery_status
          last_location_longitude
          last_location_latitude
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCarMutation>response.data.deleteCar;
  }
  async GetCar(id: string): Promise<GetCarQuery> {
    const statement = `query GetCar($id: ID!) {
        getCar(id: $id) {
          __typename
          id
          registration
          mileage
          fuel_level
          fuel_liters
          battery_status
          last_location_longitude
          last_location_latitude
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCarQuery>response.data.getCar;
  }
  async ListCars(
    filter?: ModelCarFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCarsQuery> {
    const statement = `query ListCars($filter: ModelCarFilterInput, $limit: Int, $nextToken: String) {
        listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            registration
            mileage
            fuel_level
            fuel_liters
            battery_status
            last_location_longitude
            last_location_latitude
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCarsQuery>response.data.listCars;
  }
  OnCreateCarListener: Observable<OnCreateCarSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCar {
        onCreateCar {
          __typename
          id
          registration
          mileage
          fuel_level
          fuel_liters
          battery_status
          last_location_longitude
          last_location_latitude
        }
      }`
    )
  ) as Observable<OnCreateCarSubscription>;

  OnUpdateCarListener: Observable<OnUpdateCarSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCar {
        onUpdateCar {
          __typename
          id
          registration
          mileage
          fuel_level
          fuel_liters
          battery_status
          last_location_longitude
          last_location_latitude
        }
      }`
    )
  ) as Observable<OnUpdateCarSubscription>;

  OnDeleteCarListener: Observable<OnDeleteCarSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCar {
        onDeleteCar {
          __typename
          id
          registration
          mileage
          fuel_level
          fuel_liters
          battery_status
          last_location_longitude
          last_location_latitude
        }
      }`
    )
  ) as Observable<OnDeleteCarSubscription>;
}
