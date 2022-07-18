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
  city?: InputMaybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createGeoArea?: Maybe<GeoArea>;
};


export type MutationCreateGeoAreaArgs = {
  input: CreateGeoAreaInput;
};

export type Query = {
  __typename?: 'Query';
  geoArea?: Maybe<GeoArea>;
};


export type QueryGeoAreaArgs = {
  id: Scalars['ID'];
};
