// for ease of in this poc, we'll use localStorage to set the API key
// in production, we should leverage a database for these values

export const getLocalStorageValue = (variable_name) => {
	var lsValue = localStorage.getItem(variable_name);
	return lsValue || "";
};

export const setLocalStorageValue = (variable_name, variable_value) => {
	localStorage.setItem(variable_name, variable_value);
};

export const removeLocalStorageValue = (variable_name) => {
	localStorage.removeItem(variable_name);
};
