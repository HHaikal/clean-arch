module.exports = controller => (req, res) => {
	const httpRequest = {
		body: req.body
	}
	console.log(httpRequest)
	res.send('okay')
	//controller(httpRequest)
	//	.then(() => res.send('berhasil om'))
	//	.catch(() => res.send('error nih'))
}