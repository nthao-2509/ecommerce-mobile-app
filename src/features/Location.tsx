import { createSlice } from '@reduxjs/toolkit'
import { TypeLocation } from '../types/Types'

export interface LocationPayload {
  value: TypeLocation | null
}
export interface LocationAction {
  payload: TypeLocation
  type: string
}

const initialState: LocationPayload = {
  value: null,
}

export const LocationDevice = createSlice({
  name: 'LocationDevice',
  initialState,
  reducers: {
    addToLocation: (state: LocationPayload, action: LocationAction) => {
      state.value = action.payload
    },
    removeFromLocation: (state: LocationPayload, action: LocationAction) => {
      state.value = null
    },
  },
})

export const { addToLocation, removeFromLocation } = LocationDevice.actions
export const selectLocationDevice = (state: any) => state.location.value
export default LocationDevice.reducer
