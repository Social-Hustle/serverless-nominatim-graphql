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

export enum AttributeTypes {
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

export type BooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<AttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type County = {
  __typename?: 'County';
  createdAt?: Maybe<Scalars['String']>;
  itemId: Scalars['ID'];
  name: Scalars['String'];
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CountyConnection = {
  __typename?: 'CountyConnection';
  cursor?: Maybe<Cursor>;
  items: Array<Maybe<County>>;
  startedAt?: Maybe<Scalars['String']>;
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

export type Cursor = {
  __typename?: 'Cursor';
  nextToken?: Maybe<Scalars['String']>;
  prevToken?: Maybe<Scalars['String']>;
};

export type CursorInput = {
  nextToken?: InputMaybe<Scalars['String']>;
  prevToken?: InputMaybe<Scalars['String']>;
};

export type DeleteItemInput = {
  id: Scalars['ID'];
};

export type FloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<AttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type GeoArea = {
  __typename?: 'GeoArea';
  city?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  geoJson?: Maybe<Scalars['JSON']>;
  itemId: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  zipCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GeoAreaConditionInput = {
  and?: InputMaybe<Array<InputMaybe<GeoAreaConditionInput>>>;
  city?: InputMaybe<StringInput>;
  county?: InputMaybe<StringInput>;
  latitude?: InputMaybe<FloatInput>;
  longitude?: InputMaybe<FloatInput>;
  not?: InputMaybe<GeoAreaConditionInput>;
  or?: InputMaybe<Array<InputMaybe<GeoAreaConditionInput>>>;
  state?: InputMaybe<StringInput>;
  zipCodes?: InputMaybe<StringInput>;
};

export type GeoAreaConnection = {
  __typename?: 'GeoAreaConnection';
  cursor?: Maybe<Cursor>;
  debugged?: Maybe<Scalars['JSON']>;
  items: Array<Maybe<GeoArea>>;
  startedAt?: Maybe<Scalars['String']>;
};

export type GeoAreaFilterInput = {
  and?: InputMaybe<Array<InputMaybe<GeoAreaFilterInput>>>;
  city?: InputMaybe<StringInput>;
  county?: InputMaybe<StringInput>;
  latitude?: InputMaybe<FloatInput>;
  longitude?: InputMaybe<FloatInput>;
  not?: InputMaybe<GeoAreaFilterInput>;
  or?: InputMaybe<Array<InputMaybe<GeoAreaFilterInput>>>;
  state?: InputMaybe<StringInput>;
  zipCodes?: InputMaybe<StringInput>;
};

export type IdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<AttributeTypes>;
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
  size?: InputMaybe<SizeInput>;
};

export type IntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<AttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type Item = {
  __typename?: 'Item';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCounties: Array<County>;
  createGeoArea?: Maybe<GeoArea>;
  createItem?: Maybe<Item>;
  deleteItem?: Maybe<Item>;
  updateItem?: Maybe<Item>;
};


export type MutationCreateCountiesArgs = {
  counties: Array<Scalars['String']>;
  state: Scalars['String'];
};


export type MutationCreateGeoAreaArgs = {
  condition?: InputMaybe<GeoAreaConditionInput>;
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
  listGeoAreas?: Maybe<GeoAreaConnection>;
  queryCountiesByState?: Maybe<CountyConnection>;
  queryGeoAreasByState?: Maybe<GeoAreaConnection>;
};


export type QueryGetGeoAreaArgs = {
  id: Scalars['ID'];
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryListGeoAreasArgs = {
  cursor?: InputMaybe<CursorInput>;
  filter?: InputMaybe<GeoAreaFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryQueryCountiesByStateArgs = {
  cursor?: InputMaybe<CursorInput>;
  limit?: InputMaybe<Scalars['Int']>;
  state: Scalars['String'];
};


export type QueryQueryGeoAreasByStateArgs = {
  county?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<CursorInput>;
  filter?: InputMaybe<GeoAreaFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  state: Scalars['String'];
};

export type SizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<AttributeTypes>;
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
  size?: InputMaybe<SizeInput>;
};

export type UpdateItemInput = {
  content: Scalars['String'];
  id: Scalars['ID'];
};
