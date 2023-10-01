const { createListenerMiddleware } = require("@reduxjs/toolkit");

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  predicate: (action) => {
    // this is to filter listening to any action. We may return false for that action. Currently we want to listen to all the actions and hence true.
    return true;
  },
  effect: async (action) => {
    console.log(action);
  },
});
