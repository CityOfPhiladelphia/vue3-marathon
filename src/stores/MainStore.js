import { defineStore } from 'pinia';

export const useMainStore = defineStore("MainStore", {
  state: () => {
    return {
      currentAddress: null,
      initialDatafetchComplete: false,
      publicPath: null,
      isMobileDevice: null,
      isMac: null,
      fullScreenMapEnabled: true,
      fullScreenCyclomediaEnabled: false,
      windowDimensions: {},
    };
  },
  actions: {
    setCurrentAddress(address) {
      this.currentAddress = address;
    },
  },
});