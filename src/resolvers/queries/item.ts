import AWS from 'aws-sdk'
import { Item } from '../../generated/graphql'

async function item(_: unknown, input: { id: string }): Promise<Item> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.GEOAREAS_TABLE,
    Key: {
      itemId: input.id,
    },
  }

  const { Item } = await dynamoDb.get(params).promise()

  return {
    ...Item,
    id: Item.itemId,
  }
}

export default item
