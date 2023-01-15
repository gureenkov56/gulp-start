import { deleteAsync } from 'del';

export const clean = () => deleteAsync('dist');