import { Cursor } from '../generated/graphql'
import { encode, decode } from './base64'
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'

interface OutputWithCursor extends DocumentClient.QueryOutput {
  Cursor?: Cursor
}

export default function createCursor(
  queryResponse: DocumentClient.QueryOutput | DocumentClient.ScanOutput,
  cursor = {} as Cursor,
): Cursor {
  const { prevToken, nextToken } = cursor
  const next: [] | null = nextToken ? decode(nextToken) : null
  const prev: [] | null = prevToken ? decode(prevToken) : null
  const keys: [] = next || prev || []

  const { LastEvaluatedKey } = queryResponse
  //const res = queryResponse
  const Cursor = {
    prevToken: keys.length > 0 ? encode(keys.slice(0, keys.length - 1)) : null,
    nextToken: LastEvaluatedKey ? encode([...keys, LastEvaluatedKey]) : null,
  }
  /**return {
    ...res,
    Cursor,
  }**/
  return Cursor
}
