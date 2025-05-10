document.addEventListener('DOMContentLoaded', () => {

	const wrapper = document.getElementById('paypal-button-icon')

	const link = wrapper.querySelector('a')

	let previewVisible = false

	wrapper.addEventListener('click', (e) => {

		if (!previewVisible) {

			e.preventDefault()

			showPreview() // your custom function

			previewVisible = true

			setTimeout(() => {

				previewVisible = false

			}, 3000)

		} else {

			window.location.href = link.href

		}

	})

})
