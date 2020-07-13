const exp = require('express');

const app = exp();

app.get('/', (req, res) => {
		res.send('Byeeeeee');
});

app.listen(8080, () => {
	console.log('Listening on port 8080');
})