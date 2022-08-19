<template>
  <div class="map-view">
    <div class="left">
      <b-map-scatter/>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import BMapScatter from '@/components/BMapScatter';
export default {
  name: "MapView",
components:{BMapScatter},
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
