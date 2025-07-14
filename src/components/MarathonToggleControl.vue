<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/MainStore.js'
const MainStore = useMainStore();
import { useMapStore } from '@/stores/MapStore.js';
const MapStore = useMapStore();

const halfSrc = computed(() => { return MainStore.publicPath + 'images/half.png' });
const fullSrc = computed(() => { return MainStore.publicPath + 'images/full.png' });

const halfSelected = computed(() => {
  return MapStore.marathonSelected === 'half';
});

const fullSelected = computed(() => {
  return MapStore.marathonSelected === 'full';
});

</script>

<template>
  <div class="button-holder">
    <div class="marathon-toggle">
      <button
        type="button"
        class="marathon-toggle-button"
        :title="'Show half marathon'"
        @click="MapStore.marathonSelected = 'half'"
        :style="halfSelected ? 'background-color: rgb(243, 198, 19);' : ''"
      >
        <img
          class="img-src"
          alt="imagery-or-basemap"
          :src="halfSrc"
        >
      </button>
    </div>
  
    <div class="marathon-toggle">
      <button
        type="button"
        class="marathon-toggle-button"
        :title="'Show full marathon'"
        @click="MapStore.marathonSelected = 'full'"
        :style="fullSelected ? 'background-color: rgb(243, 198, 19);' : ''"
      >
        <img
          class="img-src"
          alt="imagery-or-basemap"
          :src="fullSrc"
        >
      </button>
    </div>
  </div>
  
</template>

<style scoped>

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  /* display: inline-block !important; */
}

.marathon-toggle-button {
  height: 32px;
  border-radius: 3px;
}

.button-holder {
  position: absolute;
  height: 36px;
  width: 80px;
  top: 10px;
  right: 6px;
  z-index: 2;
}

.marathon-toggle {
  height: 36px;
  width: 36px;
  z-index: 2;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(167, 166, 166);
  display: inline-block;
  margin-right: .25rem;
  background-color: white;
}

.img-src {
  margin-left: -6px;
  margin-top: -1px;
  width: 32px;
  height: 32px;
  max-width: 300%; 
}

@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

  @supports (-webkit-touch-callout: none) {
    /* CSS specific to iOS devices */ 
    .img-src {
      margin-left: -10px !important;
      width: 36x;
    }
  }
}

</style>