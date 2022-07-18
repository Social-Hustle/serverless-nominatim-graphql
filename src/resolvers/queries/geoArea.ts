import AWS from 'aws-sdk'

async function geoArea(_: unknown, input: { id: string }) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient()
  
    const params = {
      TableName: process.env.ITEM_TABLE,
      Key: {
        id: input.id,
      },
    }
  
    const { Item } = await dynamoDb.get(params).promise()
  
    return {
      ...Item,
      id: Item.itemId,
    }
  }
  
  export default geoArea