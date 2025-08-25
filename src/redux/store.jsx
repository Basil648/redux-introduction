import { configureStore } from "@reduxjs/toolkit";
import counterS1 from './CounterSlice'

export const store = configureStore({
    reducer:
        { Counter1: counterS1 }
}) 