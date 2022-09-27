import AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'
import { CountyConnection, Cursor, County } from '../../generated/graphql'
import createCursor from '../../utils/createCursor'
import mapQueryFilters from '../../utils/mapQueryFilters'
import { decode, encode } from '../../utils/base64'

async function queryCountiesByState(
  _: unknown,
  {
    state,
    cursor = {},
    limit = 100,
  }: { state: string; cursor?: Cursor; limit?: number },
): Promise<CountyConnection> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const { prevToken, nextToken } = cursor

  const filters = mapQueryFilters({
    partitionKey: ['state', state],
  })

  let params: DocumentClient.QueryInput = {
    TableName: process.env.COUNTIES_TABLE,
    Limit: limit,
    ReturnConsumedCapacity: 'TOTAL',
    IndexName: 'state-name-index',
    ...filters,
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

  const QueryResponse = await dynamoDb.query(params).promise()
  const { Items } = QueryResponse
  const newCursor = createCursor(QueryResponse, cursor)
  const items = Items as County[]
  const today = new Date()

  return {
    items,
    cursor: newCursor,
    startedAt: today.toString(),
  }
}

export default queryCountiesByState
