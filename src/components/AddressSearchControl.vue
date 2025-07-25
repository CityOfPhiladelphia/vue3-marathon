<script setup>

import isMobileDevice from '../util/is-mobile-device';

import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import { useMainStore } from '@/stores/MainStore.js'
const MainStore = useMainStore();

const router = useRouter();

defineProps({
  inputId: {
    type: String,
    default: 'address-search-input',
  },
});

const clearAddress = () => {
  if (import.meta.env.VITE_DEBUG == 'true') console.log('clearAddress is running');
  MainStore.addressSearchValue = '';
}

const hasAddress = computed(() => {
  return MainStore.currentAddress != '';
});

const fullScreenMapEnabled = computed(() => {
  return MainStore.fullScreenMapEnabled;
});
    
const holderWidth = computed(() => {
  // if (fullScreenTopicsEnabled.value || fullScreenMapEnabled.value) {
  let value;
  if (isMobileDevice() || MainStore.windowDimensions.width <= 768) {
    value = '80%'
  } else {
    value = '40%';
  }
  return value;
  // } else {
  //   return '70%';
  // }
});

const yPosition = computed(() => {
  // if (fullScreenTopicsEnabled.value) {
    return '100px';
  // } else {
  //   return '10px';
  // }
});

</script>

<template>
  <div
    :class="fullScreenMapEnabled ? 'holder holder-map' : 'holder holder-cyclomedia'"
    :style="{ top: yPosition, width: holderWidth }"
  >
    <div class="field has-addons" :style="{ width: '100%' }">
      <div class="control has-icons-right" :style="{ width: '100%' }">
        <label
          :for="inputId"
          class="search-label"
        >Search an address or OPA number</label>
        <input
          :id="inputId"
          v-model="MainStore.addressSearchValue"
          class="input address-input"
          type="text"
          placeholder="Search an address, OPA, or DOR number"
          @keydown.enter="router.replace({ name: 'search', query: { address: MainStore.addressSearchValue }})"
        >
      </div>
      <div class="control">
        <button
          v-if="MainStore.addressSearchValue != ''"
          class="button is-info address-clear-button"
          title="Clear Address Button"
          @click="clearAddress"
        >
          <font-awesome-icon
            :icon="['fas', 'times']"
            size="xl"
          />
        </button>
      </div>
      <div class="control">
        <button
          class="button is-info address-search-button"
          type="submit"
          title="Address Search Button"
          @click="router.replace({ name: 'search', query: { address: MainStore.addressSearchValue }})"
        >
          <font-awesome-icon
            :icon="['fas', 'search']"
            size="xl"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.search-label {
  /* display: none !important */
  position: absolute;
  top: -9999px;
  left: -9999px;
}

.holder {
  position: absolute;
  display: flex;
  flex-direction: row;
}

.holder-map {
  left: 10px;
}

.holder-cyclomedia {
  right: 10px;
}

.address-input {
  border-radius: 0px !important;
  border-style: solid;
  border-width: 2px;
  border-color: #0f4d90;
  background-color: white;
  border-radius: 3px;
  z-index: 20;
}

.address-input:hover {
  border-color: #2176d2;
}

.address-clear-button {
  background-color: #0f4d90 !important;
  height: 2.5em !important;
  z-index: 20;
  border-right: solid 3px white !important;
}

.address-clear-button:hover {
  background-color: #2176d2 !important;
}

.address-search-button {
  background-color: #0f4d90 !important;
  height: 2.5em !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  z-index: 20;
}

.address-search-button:hover {
  background-color: #2176d2 !important;
}

</style>