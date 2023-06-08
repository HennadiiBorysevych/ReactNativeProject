import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    hasPermission: null,
    cameraRef: null,
    photoUri: null,
    location: null,
    address: null,
    picName: "",
  },
  reducers: {
    setCameraRef: (state, action) => {
      state.cameraRef = action.payload;
    },
    setHasPermission: (state, action) => {
      state.hasPermission = action.payload;
    },
    setPhotoUri: (state, action) => {
      state.photoUri = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPicName: (state, action) => {
      state.picName = action.payload;
    },
  },
});

export const {
  setCameraRef,
  setHasPermission,
  setPhotoUri,
  setLocation,
  setAddress,
  setPicName,
} = postsSlice.actions;

