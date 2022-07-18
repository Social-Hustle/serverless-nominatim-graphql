import AWS from 'aws-sdk'
import { GeoArea, DeleteGeoAreaInput } from '../../generated/graphql'

async function deleteGeoArea(
    _: unknown,
    { input }: { input: DeleteGeoAreaInput },
  ): Promise<GeoArea> {
    const dynamoDb = new AWS.DynamoDB.DocumentClient()
  
    const params = {
      TableName: process.env.ITEM_TABLE,
      Key: {
        itemId: input.id,
      },
      ReturnValues: 'ALL_OLD',
    }
  
    const { Attributes } = await dynamoDb.delete(params).promise()
  
    return {
      ...Attributes,
      id: Attributes.itemId,
    }
  }
  
  export default deleteGeoArea