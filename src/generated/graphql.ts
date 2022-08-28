export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type CreateGeoAreaInput = {
  city: Scalars['String'];
  county: Scalars['String'];
  geoJson: Scalars['JSON'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  state: Scalars['String'];
  zipCodes: Array<InputMaybe<Scalars['String']>>;
};

export type CreateItemInput = {
  content: Scalars['String'];
};

export type DeleteItemInput = {
  id: Scalars['ID'];
};

export type GeoArea = {
  __typename?: 'GeoArea';
  city?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  geoJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  zipCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Item = {
  __typename?: 'Item';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelGeoAreaConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelGeoAreaConditionInput>>>;
  city?: InputMaybe<ModelStringInput>;
  county?: InputMaybe<ModelStringInput>;
  geoJson?: InputMaybe<ModelStringInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelGeoAreaConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelGeoAreaConditionInput>>>;
  state?: InputMaybe<ModelStringInput>;
  zipCodes?: InputMaybe<ModelStringInput>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGeoArea?: Maybe<GeoArea>;
  createItem?: Maybe<Item>;
  deleteItem?: Maybe<Item>;
  updateItem?: Maybe<Item>;
};


export type MutationCreateGeoAreaArgs = {
  condition?: InputMaybe<ModelGeoAreaConditionInput>;
  input: CreateGeoAreaInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationDeleteItemArgs = {
  input: DeleteItemInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};

export type Query = {
  __typename?: 'Query';
  getGeoArea?: Maybe<GeoArea>;
  item?: Maybe<Item>;
};


export type QueryGetGeoAreaArgs = {
  id: Scalars['ID'];
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};

export type UpdateItemInput = {
  content: Scalars['String'];
  id: Scalars['ID'];
};
