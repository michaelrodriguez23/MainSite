import create from "zustand";

const useStore = create((set) => ({
  projects: [],
  filter: "",
  projects: 0,
  selectProject: null,
  setProject: (project) =>
    set((state) => ({
      ...state,
      projects,
    })),
  removeAllProjects: () => set({ projects: 0 }),
}));

export default useStore;
