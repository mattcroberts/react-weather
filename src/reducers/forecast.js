const initialState = {
	currentForecast: "None",
	forecastByLocation: {}
};

const formatData = function(data){
	const days = {};

	data.forEach(function(item){
		const datetime = new Date(item.dt * 1000);
		if (!days[datetime.getDate()]) {
			days[datetime.getDate()] = [];
		}

		days[datetime.getDate()].push(item);
	});

	return days;
};

export default function appState(state = initialState, action) {
	switch (action.type) {
		case "SELECT_FORECAST":
			return Object.assign({}, state, {
				currentForecast: action.location
			});
		case "RECEIVE_FORECAST":
			return Object.assign({}, state, {
				forecastByLocation:{
					[action.location]: {
						data: formatData(action.forecast.list),
						name: `${action.forecast.city.name}, ${action.forecast.city.country}`
					}
				}
			});
		default:
			return state;
	}
}
