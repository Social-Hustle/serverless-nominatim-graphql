import AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'
import {
  GeoArea,
  GeoAreaConnection,
  GeoAreaFilterInput,
  Cursor,
} from '../../generated/graphql'
import createCursor from '../../utils/createCursor'
import { decode, encode } from '../../utils/base64'

interface Input {
  filter?: GeoAreaFilterInput
  limit?: number
  cursor?: Cursor
}

async function getGeoArea(
  _: unknown,
  { filter = {}, cursor = {}, limit = 100 }: Input,
): Promise<GeoAreaConnection> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const { prevToken, nextToken } = cursor

  let params: DocumentClient.QueryInput = {
    TableName: process.env.GEOAREAS_TABLE,
    Limit: limit,
  }

  if (nextToken) {
    const decoded = decode(nextToken) as any[]
    const ExclusiveStartKey = decoded[decoded.length - 1]
    //const ExclusiveStartKey = mapAttributeValues(lastEvaluatedKey)

    params = {
      ...params,
      ExclusiveStartKey,
    }
  }

  const response = await dynamoDb.query(params).promise()
  const { Items } = response
  const newCursor = createCursor(response, cursor)
  const items = Items as GeoArea[]
  const today = new Date()

  return {
    items,
    cursor: newCursor,
    startedAt: today.toString(),
  }
}

export default getGeoArea
