import AWS from 'aws-sdk'
import { County } from '../../generated/graphql'
import { v4 } from 'uuid'
import { sliceIntoChunks, mergeArrays } from '../../utils/arrays'

async function createCounties(
  _: unknown,
  { state, counties }: { state: string; counties: string[] },
): Promise<County[]> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const slicedCounties = sliceIntoChunks(counties, 25)

  const map = await Promise.all(
    slicedCounties.map(async (chunk) => {
      const items: County[] = chunk.map((county) => {
        const id = v4()
        return {
          itemId: id,
          state,
          name: county,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      })
      const params = {
        TableName: process.env.COUNTIES_TABLE,
        RequestItems: {
          [process.env.COUNTIES_TABLE]: items.map((county) => {
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
      return items
    }),
  )

  return mergeArrays(map)
}

export default createCounties
