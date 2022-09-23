import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'
import { GeoAreaFilterInput } from '../generated/graphql'

interface MappedFilters {
  KeyConditionExpression: DocumentClient.QueryInput['KeyConditionExpression']
  ExpressionAttributeValues: DocumentClient.QueryInput['ExpressionAttributeValues']
  ExpressionAttributeNames: DocumentClient.QueryInput['ExpressionAttributeNames']
}

interface Input {
  filter?: GeoAreaFilterInput
  partitionKey?: [string, string]
  sortKey?: [string, string]
}

export default function mapQueryFilters({
  filter,
  partitionKey,
  sortKey,
}: Input): MappedFilters {
  /**
   * For now let's assume that all our filters are strings
   */
  /**const { state, county, city, latitude, longitude, zipCodes } = filter
  const operators = ['and', 'or', 'not']
  const entries = Object.entries(filter).filter(
    ([key]) => !operators.includes(key),
  )
  const KeyConditionExpression = entries
    .map(([key]) => `#${key} = :${key}`)
    .join(' and ')
  const ExpressionAttributeNames = entries.reduce(
    (acc, [key]) => ({ ...acc, [`#${key}`]: `"${key}"` }),
    {},
  )
  const ExpressionAttributeValues = entries.reduce(
    (acc, [key, value]) => ({ ...acc, [`:${key}`]: value }),
    {},
  )**/

  const keys = [partitionKey, sortKey].filter(Boolean)

  const KeyConditionExpression = keys
    .map(([key]) => `#${key} = :${key}`)
    .join(' and ')

  const ExpressionAttributeNames = keys.reduce(
    (acc, [key]) => ({ ...acc, [`#${key}`]: `${key}` }),
    {},
  )
  const ExpressionAttributeValues = keys.reduce(
    (acc, [key, value]) => ({ ...acc, [`:${key}`]: value }),
    {},
  )

  return {
    KeyConditionExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
  }
}
