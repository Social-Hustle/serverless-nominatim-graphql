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
  geonameId: Scalars['Int'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  state: Scalars['String'];
  zipCodes: Array<InputMaybe<Scalars['String']>>;
};

export type DeleteGeoAreaInput = {
  id: Scalars['ID'];
};

export type FilterInput = {
  and?: InputMaybe<Array<InputMaybe<FilterInput>>>;
  city?: InputMaybe<StringInput>;
  county?: InputMaybe<StringInput>;
  geonameId?: InputMaybe<IntInput>;
  id?: InputMaybe<IdInput>;
  latitude?: InputMaybe<FloatInput>;
  longitude?: InputMaybe<FloatInput>;
  not?: InputMaybe<FilterInput>;
  or?: InputMaybe<Array<InputMaybe<FilterInput>>>;
  state?: InputMaybe<StringInput>;
  zipCodes?: InputMaybe<Array<InputMaybe<StringInput>>>;
};

export type FloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
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
  geonameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  zipCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GeoAreaListOutput = {
  __typename?: 'GeoAreaListOutput';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<GeoArea>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type IdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
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
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGeoArea?: Maybe<GeoArea>;
  deleteGeoArea?: Maybe<GeoArea>;
  updateGeoArea?: Maybe<GeoArea>;
};


export type MutationCreateGeoAreaArgs = {
  input: CreateGeoAreaInput;
};


export type MutationDeleteGeoAreaArgs = {
  input?: InputMaybe<DeleteGeoAreaInput>;
};


export type MutationUpdateGeoAreaArgs = {
  input: UpdateGeoAreaInput;
};

export type Query = {
  __typename?: 'Query';
  geoArea?: Maybe<GeoArea>;
  listGeoAreas?: Maybe<Array<Maybe<GeoArea>>>;
};


export type QueryGeoAreaArgs = {
  id: Scalars['ID'];
};


export type QueryListGeoAreasArgs = {
  filter?: InputMaybe<FilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
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

export type StringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
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

export type UpdateGeoAreaInput = {
  city?: InputMaybe<Scalars['String']>;
  county?: InputMaybe<Scalars['String']>;
  geoJson?: InputMaybe<Scalars['JSON']>;
  geonameId?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  state?: InputMaybe<Scalars['String']>;
  zipCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
