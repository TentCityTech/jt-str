// @ts-nocheck
/** @type {import('./$types').Actions} */
import { SENDGRID } from '$env/static/private';
import { Client } from '@sendgrid/client';

const client = new Client();
client.setApiKey(SENDGRID);

export const actions = {
	register: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const payload = {
			list_ids: ['36b168f9-a5ec-4813-a096-7ba41ad3620f'],
			contacts: [{ email: email }]
		};
		const req = {
			url: `/v3/marketing/contacts`,
			method: 'PUT',
			body: payload
		};
		client
			.request(req)
			.then(([response, body]) => {
				console.log(response.statusCode);
				console.log(response.body);
			})
			.catch((error) => {
				console.error(error.message);
			});
	}
};
