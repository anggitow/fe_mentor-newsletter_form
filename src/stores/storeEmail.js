import { create } from 'zustand';

export const useEmailStore = create((set) => ({
  email: localStorage.getItem('email') || '',
  setEmail: (email) => {
    set({ email });
    localStorage.setItem('email', email);
  },
  removeEmail: () => {
    set({ email: '' });
    localStorage.removeItem('email');
  }
}));
