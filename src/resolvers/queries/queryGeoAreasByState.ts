import AWS from 'aws-sdk'
import {
  GeoArea,
  GeoAreaConnection,
  GeoAreaFilterInput,
  Cursor,
} from '../../generated/graphql'
import createCursor from '../../utils/createCursor'
import mapQueryFilters from '../../utils/mapQueryFilters'

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

  const filters = mapQueryFilters({
    filter,
    partitionKey: ['state', state],
    sortKey: county ? ['county', county] : undefined,
  })

  const params = {
    TableName: process.env.ITEM_TABLE,
    Limit: limit,
    ReturnConsumedCapacity: 'TOTAL',
    IndexName: 'state-county-index',
    ...filters,
  }

  const QueryResponse = await dynamoDb.query(params).promise()
  const { Items } = QueryResponse
  const newCursor = createCursor(QueryResponse, cursor)
  const items = Items as GeoArea[]
  const today = new Date()

  return {
    items,
    cursor: newCursor,
    startedAt: today.toString(),
  }
}

export default queryGeoAreasByState
