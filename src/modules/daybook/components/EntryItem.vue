<template>
	<div @click="$router.push({ name: 'EntryView', params: { id: 10 } })" class="entry-container mb-3 p-2">
		<div class="entry-title d-flex">
			<span class="text-success fs-5 fw-bold">32</span>
			<span class="mx-1 fs-5">Septiembre</span>
			<span class="mx-2 fw-light">2022, Martes</span>
		</div>

		<div class="entry-description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corrupti nobis, ullam soluta, numquam deserunt eaque nulla quia non libero inventore consectetur earum, rerum voluptatem quaerat officia molestiae sit velit?
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.entry-container {
		cursor: pointer;
		border-bottom: 1px solid #2c3e50;
		transition: all 0.2s ease-in;

		&:hover {
			background-color: lighten( $color: #28a961, $amount: 45);
		}

		.entry-description {
			font-size: 12px
		}
	}
</style>