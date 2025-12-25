import { create } from 'zustand'

const useWeddingStore = create((set) => ({
  // Wedding style selection
  weddingStyle: null,
  setWeddingStyle: (style) => set({ weddingStyle: style }),

  // Guest count
  guestCount: 100,
  setGuestCount: (count) => set({ guestCount: count }),

  // Budget tier
  budgetTier: 'balanced', // 'essential' | 'balanced' | 'premium'
  setBudgetTier: (tier) => set({ budgetTier: tier }),

  // Selected categories
  selectedCategories: {
    venue: true,
    catering: true,
    photography: true,
    videography: true,
    flowers: true,
    music: true,
    officiant: true,
    attire: true,
    hairMakeup: true,
    invitations: true,
    transportation: true,
    cake: true,
    favors: true,
    rentals: true,
    miscellaneous: true,
  },
  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: {
        ...state.selectedCategories,
        [category]: !state.selectedCategories[category],
      },
    })),

  // Lead information
  leadInfo: {
    name: '',
    email: '',
    weddingDate: '',
  },
  setLeadInfo: (info) => set({ leadInfo: info }),

  // Current step
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),

  // Reset state
  reset: () => set({
    weddingStyle: null,
    guestCount: 100,
    budgetTier: 'balanced',
    selectedCategories: {
      venue: true,
      catering: true,
      photography: true,
      videography: true,
      flowers: true,
      music: true,
      officiant: true,
      attire: true,
      hairMakeup: true,
      invitations: true,
      transportation: true,
      cake: true,
      favors: true,
      rentals: true,
      miscellaneous: true,
    },
    leadInfo: { name: '', email: '', weddingDate: '' },
    currentStep: 0,
  }),
}))

export default useWeddingStore
