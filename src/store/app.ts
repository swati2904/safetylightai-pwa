import { create } from 'zustand'

export type Lens = 'link' | 'prompt' | 'audit' | 'privacy'

type AppState = {
  lens: Lens
  setLens: (l: Lens) => void
}

export const useApp = create<AppState>((set) => ({
  lens: 'link',
  setLens: (l) => set({ lens: l }),
}))
