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
  geonameId?: Maybe<Scalars['Int']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<Item>;
  deleteItem?: Maybe<Item>;
  updateItem?: Maybe<Item>;
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
