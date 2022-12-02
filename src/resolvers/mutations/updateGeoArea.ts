import AWS from 'aws-sdk'
import { UpdateGeoAreaInput, GeoArea } from '../../generated/graphql'

async function updateGeoArea(
  _: unknown,
  { input }: { input: UpdateGeoAreaInput },
): Promise<GeoArea> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const { itemId, ...rest } = input

  const inputWithUpdate = {
    ...rest,
    updatedAt: new Date().toISOString(),
  }

  const entries = Object.entries(inputWithUpdate)

  const UpdateExpression = `SET `.concat(
    entries.map(([key]) => `${key} = :${key}`).join(', '),
  )

  const ExpressionAttributeValues = entries.reduce(
    (acc, [key, value]) => ({ ...acc, [`:${key}`]: value }),
    {},
  )

  const params = {
    TableName: process.env.GEOAREAS_TABLE,
    Key: {
      itemId,
    },
    UpdateExpression,
    ExpressionAttributeValues,
    ReturnValues: 'ALL_NEW',
  }

  const { Attributes } = await dynamoDb.update(params).promise()

  return {
    ...Attributes,
    itemId,
  }
}

export default updateGeoArea
