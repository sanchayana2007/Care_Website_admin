import fakeRestDataProvider from 'ra-data-fakerest';
import data from './data.json';
import { stringify } from 'query-string';
import { fetchUtils, DataProvider } from 'ra-core';
API_URL= 'http://api.restful-api.dev/objects'
export const dataProvider : DataProvider =  {
	getLists: async (resourse, params) => {
		const response = await fetchUtils.fetchJson('$API_URL');	
		return {
			data : response.json, 
			total : 10,
		};
	}  
};