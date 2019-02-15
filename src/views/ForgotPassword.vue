<template>
	<div class="forgot">
		<sub-header></sub-header>
		<div class="forgot-content">
			<div class="container">
				<h1>Reset Your Trello Password</h1>
				<div v-if="!done">
					<p>Submit your email address and we’ll send you a link to reset your password.</p>
					<form @submit.prevent="onSubmit">
						<div v-if="error" class="error">There wasn't an account for that email</div>
						<div class="form-group">
							<div class="label">Email</div>
							<input v-model="email" type="text" class="input" :class="{'warning' : error}" autofocus>
						</div>
						<div class="form-group">
							<button type="submit" class="button button-primary">Submit</button>
						</div>
					</form>
					<p class="light">Psst … If it's any help, Trello requires that passwords be at least 8 characters long and does not require you to include numbers or uppercase letters. If that jogs your memory, you can
						<router-link :to="{name: 'Login'}">try logging in again</router-link>.</p>
				</div>
				<div v-else>
					<p>Help is on the way.</p>
				</div>
			</div>
		</div>
		<main-footer></main-footer>
	</div>
</template>

<script>
	import MainFooter from '@/components/Footer'
	import SubHeader from '@/components/SubHeader'
	import {
		mapActions
	} from 'vuex';
	
	export default {
		components: {
			MainFooter,
			SubHeader
		},
		data() {
			return {
				error: false,
				email: "",
				done: false
			}
		},
		methods: {
			...mapActions([
				'FORGOT'
			]),
			onSubmit() {
				const {	email } = this
				if (email == "") {
					this.error = true
					return
				} else {
					this.error = false
					this.FORGOT({ email }).then(() => {
						this.done = true
					}).catch(err => {
						this.error = true
					})
				}
			}
		},
	}
</script>

<style scoped>
	.forgot-content {
		padding: 4rem 1rem;
	}
	
	.forgot-content .container {
		max-width: 585px;
		width: 100%;
		margin: 0 auto;
	}
	
	.forgot-content h1 {
		font-size: 1.777rem;
		line-height: 1.2rem;
	}
	
	.forgot-content p {
		color: #4d4d4d;
	}
	
	.forgot-content p.light {
		color: hsl(0, 0%, 60%);
	}
	
	.forgot-content p.light a {
		color: hsl(0, 0%, 60%);
		text-decoration: underline;
	}
	
	.forgot-content .error {
		border-radius: 4px;
		background: #F5D3CE;
		border: 1px solid #EB5A46;
		display: inline-block;
		padding: 0.5rem 1rem;
		color: #4d4d4d;
		margin: 1rem 0;
	}
	
	.forgot-content .form-group {
		margin-bottom: 1.2rem;
	}
	
	.forgot-content .form-group .label {
		margin-bottom: 5px;
	}
	
	.forgot-content .form-group .input[type=text],
	.forgot-content .form-group .input[type=password] {
		max-width: 400px;
		background: #EDEFF0;
		border-radius: 4px;
		border: 1px solid #cdd2d4;
		box-sizing: border-box;
		padding: 0.5rem;
		width: 100%;
		font-size: 1rem;
	}
	
	.forgot-content .form-group .input[type=text]:focus,
	.forgot-content .form-group .input[type=password]:focus {
		border-color: #A5ACB0;
		outline: none;
		box-shadow: 0 0 6px #CDD2D4;
	}
	
	.forgot-content .form-group .input[type=text].warning,
	.forgot-content .form-group .input[type=password].warning {
		background: #FBEDEB;
		border: 1px solid #EC9488;
	}
	
	.forgot-content .form-group .input[type=text].warning:focus,
	.forgot-content .form-group .input[type=password].warning:focus {
		box-shadow: 0 0 6px #EC9488;
	}
	
	.forgot-content .button.button-primary {
		background: linear-gradient(to bottom, #61BD4F 0%, #5AAC44 100%);
		color: #fff;
		box-shadow: 0 2px 0 #3F6F21;
		cursor: pointer;
	}
	
	.forgot-content .button.button-primary:hover {
		background: #5AAC44;
	}
	
	.forgot-content .button {
		display: inline-block;
		border-radius: 3px;
		background: #e2e4e6;
		box-shadow: none;
		color: hsl(0, 0%, 55%);
		cursor: default;
		font-weight: bolder;
		padding: 0.6rem 1.3rem;
		border: none;
		font-size: 1rem;
	}
</style>
