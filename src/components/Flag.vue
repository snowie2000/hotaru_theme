<template>
  <img :src="svg" :alt="flag" v-if="!!svg" width="18" class="icon-flag" />
  <span v-else>{{flag}}</span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue"
import flagMap from "@/flags.json"

export default defineComponent({
  name: "Flag",
  props: {
    flag: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const getFlag = (country: string) => {
      const m = flagMap as Record<string, string>
      if (m[country] === undefined) return ""
      return m[country]
    }

    const svg = computed(() => getFlag(props.flag))
    return {
      svg,
    }
  },
})
</script>

<style scoped>
.icon-flag {
  vertical-align: middle;
}
</style>