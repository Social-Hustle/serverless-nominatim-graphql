import AWS from 'aws-sdk'
import { v4 } from 'uuid'

async function createGeoArea(
  _: unknown,
  { input }: { input: any },
) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const id = v4()

  const params = {
    TableName: process.env.ITEM_TABLE,
    Item: {
      itemId: id,
      city: input.city,
    },
  }

  await dynamoDb.put(params).promise()

  return {
    ...input,
    id,
  }
}

export default createGeoArea
