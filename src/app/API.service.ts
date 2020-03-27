/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCarInfoInput = {
  id?: string | null;
  registration?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  mileage?: number | null;
  fuel_level?: number | null;
  fuel_liters?: number | null;
  battery_status?: string | null;
};

export type ModelCarInfoConditionInput = {
  registration?: ModelStringInput | null;
  latitude?: ModelFloatInput | null;
  longitude?: ModelFloatInput | null;
  mileage?: ModelFloatInput | null;
  fuel_level?: ModelFloatInput | null;
  fuel_liters?: ModelFloatInput | null;
  battery_status?: ModelStringInput | null;
  and?: Array<ModelCarInfoConditionInput | null> | null;
  or?: Array<ModelCarInfoConditionInput | null> | null;
  not?: ModelCarInfoConditionInput | null;
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

export type UpdateCarInfoInput = {
  id: string;
  registration?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  mileage?: number | null;
  fuel_level?: number | null;
  fuel_liters?: number | null;
  battery_status?: string | null;
};

export type DeleteCarInfoInput = {
  id?: string | null;
};

export type ModelCarInfoFilterInput = {
  id?: ModelIDInput | null;
  registration?: ModelStringInput | null;
  latitude?: ModelFloatInput | null;
  longitude?: ModelFloatInput | null;
  mileage?: ModelFloatInput | null;
  fuel_level?: ModelFloatInput | null;
  fuel_liters?: ModelFloatInput | null;
  battery_status?: ModelStringInput | null;
  and?: Array<ModelCarInfoFilterInput | null> | null;
  or?: Array<ModelCarInfoFilterInput | null> | null;
  not?: ModelCarInfoFilterInput | null;
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

export type CreateCarInfoMutation = {
  __typename: "CarInfo";
  id: string;
  registration: string | null;
  latitude: number | null;
  longitude: number | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
};

export type UpdateCarInfoMutation = {
  __typename: "CarInfo";
  id: string;
  registration: string | null;
  latitude: number | null;
  longitude: number | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
};

export type DeleteCarInfoMutation = {
  __typename: "CarInfo";
  id: string;
  registration: string | null;
  latitude: number | null;
  longitude: number | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
};

export type GetCarInfoQuery = {
  __typename: "CarInfo";
  id: string;
  registration: string | null;
  latitude: number | null;
  longitude: number | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
};

export type ListCarInfosQuery = {
  __typename: "ModelCarInfoConnection";
  items: Array<{
    __typename: "CarInfo";
    id: string;
    registration: string | null;
    latitude: number | null;
    longitude: number | null;
    mileage: number | null;
    fuel_level: number | null;
    fuel_liters: number | null;
    battery_status: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCarInfoSubscription = {
  __typename: "CarInfo";
  id: string;
  registration: string | null;
  latitude: number | null;
  longitude: number | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
};

export type OnUpdateCarInfoSubscription = {
  __typename: "CarInfo";
  id: string;
  registration: string | null;
  latitude: number | null;
  longitude: number | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
};

export type OnDeleteCarInfoSubscription = {
  __typename: "CarInfo";
  id: string;
  registration: string | null;
  latitude: number | null;
  longitude: number | null;
  mileage: number | null;
  fuel_level: number | null;
  fuel_liters: number | null;
  battery_status: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCarInfo(
    input: CreateCarInfoInput,
    condition?: ModelCarInfoConditionInput
  ): Promise<CreateCarInfoMutation> {
    const statement = `mutation CreateCarInfo($input: CreateCarInfoInput!, $condition: ModelCarInfoConditionInput) {
        createCarInfo(input: $input, condition: $condition) {
          __typename
          id
          registration
          latitude
          longitude
          mileage
          fuel_level
          fuel_liters
          battery_status
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
    return <CreateCarInfoMutation>response.data.createCarInfo;
  }
  async UpdateCarInfo(
    input: UpdateCarInfoInput,
    condition?: ModelCarInfoConditionInput
  ): Promise<UpdateCarInfoMutation> {
    const statement = `mutation UpdateCarInfo($input: UpdateCarInfoInput!, $condition: ModelCarInfoConditionInput) {
        updateCarInfo(input: $input, condition: $condition) {
          __typename
          id
          registration
          latitude
          longitude
          mileage
          fuel_level
          fuel_liters
          battery_status
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
    return <UpdateCarInfoMutation>response.data.updateCarInfo;
  }
  async DeleteCarInfo(
    input: DeleteCarInfoInput,
    condition?: ModelCarInfoConditionInput
  ): Promise<DeleteCarInfoMutation> {
    const statement = `mutation DeleteCarInfo($input: DeleteCarInfoInput!, $condition: ModelCarInfoConditionInput) {
        deleteCarInfo(input: $input, condition: $condition) {
          __typename
          id
          registration
          latitude
          longitude
          mileage
          fuel_level
          fuel_liters
          battery_status
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
    return <DeleteCarInfoMutation>response.data.deleteCarInfo;
  }
  async GetCarInfo(id: string): Promise<GetCarInfoQuery> {
    const statement = `query GetCarInfo($id: ID!) {
        getCarInfo(id: $id) {
          __typename
          id
          registration
          latitude
          longitude
          mileage
          fuel_level
          fuel_liters
          battery_status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCarInfoQuery>response.data.getCarInfo;
  }
  async ListCarInfos(
    filter?: ModelCarInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCarInfosQuery> {
    const statement = `query ListCarInfos($filter: ModelCarInfoFilterInput, $limit: Int, $nextToken: String) {
        listCarInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            registration
            latitude
            longitude
            mileage
            fuel_level
            fuel_liters
            battery_status
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
    return <ListCarInfosQuery>response.data.listCarInfos;
  }
  OnCreateCarInfoListener: Observable<
    OnCreateCarInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCarInfo {
        onCreateCarInfo {
          __typename
          id
          registration
          latitude
          longitude
          mileage
          fuel_level
          fuel_liters
          battery_status
        }
      }`
    )
  ) as Observable<OnCreateCarInfoSubscription>;

  OnUpdateCarInfoListener: Observable<
    OnUpdateCarInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCarInfo {
        onUpdateCarInfo {
          __typename
          id
          registration
          latitude
          longitude
          mileage
          fuel_level
          fuel_liters
          battery_status
        }
      }`
    )
  ) as Observable<OnUpdateCarInfoSubscription>;

  OnDeleteCarInfoListener: Observable<
    OnDeleteCarInfoSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCarInfo {
        onDeleteCarInfo {
          __typename
          id
          registration
          latitude
          longitude
          mileage
          fuel_level
          fuel_liters
          battery_status
        }
      }`
    )
  ) as Observable<OnDeleteCarInfoSubscription>;
}
