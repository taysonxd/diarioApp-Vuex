<template>
	<div class="entry-title d-flex justify-content-between p-2">
		<div>
			<span class="text-success fs-3 fw-bold">15</span>
			<span class="mx-1 fs-3">Septiembre</span>
			<span class="mx-2 fs-4 fw-light">2022, Martes</span>
		</div>

		<div>
			<button class="btn btn-danger mx-2">
				Borrar
				<i class="fa fa-trash-alt"></i>
			</button>

			<button class="btn btn-primary">
				Subir foto
				<i class="fa fa-upload"></i>
			</button>
		</div>
	</div>

	<hr>
	<div class="d-flex flex-column px-3 h-75">
		<textarea placeholder="¿Que sucedio hoy?">
		</textarea>
	</div>

	<EntryButton :icon="'fa-save'"/>

	<img class="img-thumbnail" src="https://i.pinimg.com/550x/48/b8/94/48b894b00853fb4696186a9188df51e0.jpg" alt="entry picture">
</template>

<script>
	import { defineAsyncComponent } from 'vue'

	export default {
		components: {
			EntryButton: defineAsyncComponent(() => import('../components/EntryButton.vue'))
		}
	}
</script>

<style lang="scss" scoped>
	
	textarea {
		font-size: 20px;
		border: none;
		height: 100%;

		&:focus {
			outline: none;
		}
	}

	img {
		width: 200px;
		position: fixed;
		bottom: 150px;
		right: 20px;
		box-shadow: 0px 5px 10px rgba($color: black, $alpha: 0.2)
	}

</style>