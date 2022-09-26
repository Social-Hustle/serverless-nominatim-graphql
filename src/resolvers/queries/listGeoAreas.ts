import AWS from 'aws-sdk'
import {
  GeoArea,
  GeoAreaConnection,
  GeoAreaFilterInput,
  Cursor,
} from '../../generated/graphql'

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

  const params = {
    TableName: process.env.GEOAREAS_TABLE,
    Limit: limit,
  }

  const { Items } = await dynamoDb.query(params).promise()
  const items = Items as GeoArea[]
  const today = new Date()

  return {
    items,
    startedAt: today.toString(),
  }
}

export default getGeoArea
