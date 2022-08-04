import item from './queries/item'
import createItem from './mutations/createItem'
import updateItem from './mutations/updateItem'
import deleteItem from './mutations/deleteItem'

import getGeoArea from './queries/getGeoArea'

export default {
  Query: {
    item,
    getGeoArea,
  },
  Mutation: {
    createItem,
    updateItem,
    deleteItem,
  },
}
