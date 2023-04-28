<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getParams } from '../utils/index';

const prop = defineProps<{ msg: string; countpro: number }>();

const count = ref(0);
const countMsg = ref(prop.countpro);
const isShow = ref(true);

onMounted(() => {
		const url_from = getParams('url_from');
		console.log('url_from', url_from);
});

const add = () => {
	// countMsg.value++
	isShow.value = !isShow.value;
};
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>
	<div>
		<Transition>
			<div v-if="isShow" class="list">111111</div>
		</Transition>
		{{ countMsg }}
		<button type="button" @click="add">点击添加</button>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
.list {
	height: 40px;
	background: #000;
	border-radius: 4px;
	color: #fff;
	line-height: 40px;
}
.v-leave-active,
.v-enter-active {
	transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
