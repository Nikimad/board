import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "platform",
  platform: {
    name: "Platform Launch",
    tasks: [
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
    ],
  },
  marketing: {
    name: "Marketing Plan",
    tasks: [
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
    ],
  },
  roadmap: {
    name: "Roadmap",
    tasks: [
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        completedCounter: 1,
        allCounter: 2,
      },
      {
        title: "Build UI for onboarding flow",
        completedCounter: 0,
        allCounter: 2,
      },
      {
        title: "Market discovery",
        completedCounter: 3,
        allCounter: 6,
      },
      {
        title: "review results of usability tests and iterate",
        completedCounter: 3,
        allCounter: 3,
      },
      {
        title: "Add account management endpoints",
        completedCounter: 1,
        allCounter: 5,
      },
    ],
  },
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setActive(state, { payload }) {
      state.active = payload;
    },
  },
});

export const { setActive } = boardsSlice.actions;

export default boardsSlice.reducer;
