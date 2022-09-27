import AWS from 'aws-sdk'
import { County } from '../../generated/graphql'
import { v4 } from 'uuid'

async function createCounties(
  _: unknown,
  { state, counties }: { state: string; counties: string[] },
): Promise<County[]> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const items: County[] = counties.map((county) => {
    const id = v4()
    return {
      itemId: id,
      state,
      name: county,
    }
  })

  const params = {
    TableName: process.env.COUNTIES_TABLE,
    RequestItems: {
      [process.env.COUNTIES_TABLE]: items.map((county) => {
        const id = v4()
        return {
          PutRequest: {
            Item: {
              ...county,
            },
          },
        }
      }),
    },
  }

  await dynamoDb.batchWrite(params).promise()

  return items.map((county) => {
    return {
      ...county,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  })
}

export default createCounties
