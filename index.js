function fetchData() {
	return fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json?year=2018')
		.then(response => response.json())
		.then(json => renderDatas(json))
}
function renderDatas(json){
	const div = document.querySelector('div')
	json.forEach(data => {
		const p= document.createElement('p')
		p.innerHTML = `<div>NYC water consumption per day in 2018:</div> ${data.nyc_consumption_million_gallons_per_day}<div> million gallons</div>`
		div.appendChild(p)
	})
}
document.addEventListener('DOMContentLoaded', function() {
	fetchData()
})