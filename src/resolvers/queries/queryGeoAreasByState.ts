import AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'
import {
  GeoArea,
  GeoAreaConnection,
  GeoAreaFilterInput,
  Cursor,
} from '../../generated/graphql'
import createCursor from '../../utils/createCursor'
import mapQueryFilters from '../../utils/mapQueryFilters'
import { decode, encode } from '../../utils/base64'

interface Input {
  state: string
  county?: string
  filter?: GeoAreaFilterInput
  limit?: number
  cursor?: Cursor
}

async function queryGeoAreasByState(
  _: unknown,
  { state, county, filter = {}, cursor = {}, limit = 100 }: Input,
): Promise<GeoAreaConnection> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const { prevToken, nextToken } = cursor

  const filters = mapQueryFilters({
    filter,
    partitionKey: ['state', state],
    sortKey: county ? ['county', county] : undefined,
  })

  let params: DocumentClient.QueryInput = {
    TableName: process.env.ITEM_TABLE,
    Limit: limit,
    ReturnConsumedCapacity: 'TOTAL',
    IndexName: 'state-county-index',
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
  const { Items, ...rest } = QueryResponse
  const newCursor = createCursor(QueryResponse, cursor)
  const items = Items as GeoArea[]
  const today = new Date()

  return {
    items,
    cursor: newCursor,
    startedAt: today.toString(),
    debugged: {
      ...rest,
    },
  }
}

export default queryGeoAreasByState
