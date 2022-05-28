import create from 'zustand';
import Word from './word';

export default create((...args) => ({
  ...Word(...args),
}));
