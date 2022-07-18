import geoArea from './queries/geoArea'
import createGeoArea from './mutations/createGeoArea'
import updateGeoArea from './mutations/updateGeoArea'
import deleteGeoArea from './mutations/deleteGeoArea'

export default {
  Query: {
    geoArea,
  },
  Mutation: {
    createGeoArea,
    updateGeoArea,
    deleteGeoArea,
  },
}
