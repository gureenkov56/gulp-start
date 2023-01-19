import { deleteAsync } from 'del';

export const clean = (folder) => deleteAsync(folder);