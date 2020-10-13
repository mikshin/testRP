<template>
    <div class="items">
        <div class="item"
            v-for="item in getItems"
            :key="item.id">
                {{ item.page }}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: function() {
    return {
      isActive: false
    };
  },
	computed: mapGetters(['getItems']),
	async mounted() {
		this.$store.dispatch('fetchItems')
	}
}
</script>

<style lang="scss" >

</style>