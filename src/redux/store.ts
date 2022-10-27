import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import userSlice from "./reducers/user";
import { WebStorage } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducers";

// Redux-Persist
interface PersistConfig {
  key: string;
  storage: WebStorage;
  //whitelist: any,
  blacklist: string[];
}

const persistConfig: PersistConfig = {
  key: "root",
  storage,
  // whitelist: [], // only state will be persisted
  blacklist: [], // state will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: { user: userSlice },
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), //Non-Serializable Data fix error
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
