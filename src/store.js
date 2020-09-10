import { configureStore } from '@reduxjs/toolkit';
import transactions from './slicers/transactionSlicer';

export default configureStore({
    reducer: { transactions },
});
