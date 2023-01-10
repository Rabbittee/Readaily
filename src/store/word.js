import { Notes } from 'api';
import { combine } from 'zustand/middleware';

const addWord = (words, title, describe) => [
  ...words,
  {
    id: Math.max(0, Math.max(...words.map(({ id }) => id))) + 1,
    title,
    describe,
  },
];

const removeWord = (words, _id) => words.filter((word) => word.id !== _id);

const updateWord = (words, _id, describe) =>
  words.map((word) => ({
    ...word,
    describe: word.id === _id ? describe : word.describe,
  }));

export default combine({ words: [] }, (set) => ({
  title: '',
  describe: '',
  getAllWords: () =>
    Notes.getAll()
      .then((res) => res.data.words)
      .then((words) => set({ words })),
  addWord: (title, describe) =>
    Notes.postWord(title, describe).then((res) =>
      set((state) => ({
        ...state,
        words: addWord(state.words, title, describe),
        title: '',
        describe: '',
      }))
    ),
  setNewWord: (describe) =>
    set((state) => ({
      ...state,
      describe,
    })),
  updateWord: (id, describe) =>
    Notes.updateWord(id, describe).then((res) =>
      set((state) => ({
        ...state,
        words: updateWord(state.words, id, describe),
      }))
    ),
  removeWord: (id) =>
    Notes.deleteWord(id).then((res) =>
      set((state) => ({
        ...state,
        words: removeWord(state.words, id),
      }))
    ),
}));
