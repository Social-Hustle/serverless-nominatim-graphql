import AWS from 'aws-sdk'
import { CreateGeoAreaInput, GeoArea } from '../../generated/graphql'
import { v4 } from 'uuid'

async function createGeoArea(
  _: unknown,
  { input }: { input: CreateGeoAreaInput },
): Promise<GeoArea> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const id = v4()

  const params = {
    TableName: process.env.ITEM_TABLE,
    Item: {
      itemId: id,
      ...input,
    },
  }

  await dynamoDb.put(params).promise()

  return {
    ...input,
    itemId: id,
  }
}

export default createGeoArea
