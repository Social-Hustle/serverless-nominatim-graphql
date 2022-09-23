import item from './queries/item'
import createItem from './mutations/createItem'
import updateItem from './mutations/updateItem'
import deleteItem from './mutations/deleteItem'

import getGeoArea from './queries/getGeoArea'
import createGeoArea from './mutations/createGeoArea'
import queryGeoAreasByState from './queries/queryGeoAreasByState'

export default {
  Query: {
    item,
    getGeoArea,
    queryGeoAreasByState,
  },
  Mutation: {
    createItem,
    updateItem,
    deleteItem,
    createGeoArea,
  },
}
