import item from './queries/item'
import createItem from './mutations/createItem'
import updateItem from './mutations/updateItem'
import deleteItem from './mutations/deleteItem'
import createCounties from './mutations/createCounties'
import updateGeoArea from './mutations/updateGeoArea'

import getGeoArea from './queries/getGeoArea'
import createGeoArea from './mutations/createGeoArea'
import queryGeoAreasByState from './queries/queryGeoAreasByState'
import queryCountiesByState from './queries/queryCountiesByState'
import listGeoAreas from './queries/listGeoAreas'

export default {
  Query: {
    item,
    getGeoArea,
    listGeoAreas,
    queryGeoAreasByState,
    queryCountiesByState,
  },
  Mutation: {
    createItem,
    updateItem,
    deleteItem,
    createGeoArea,
    createCounties,
    updateGeoArea,
  },
}
