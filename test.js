import { Rettiwt } from './dist/index.js'; // если default export

async function main() {
	try {
		const client = new Rettiwt({
			apiKey: 'a2R0PUZWck5lQnhkTDd3RlBWalhTcGtDV2R0dGxjUEtKaTlMVnBMNW1jOEY7YXV0aF90b2tlbj01YTczZTI2ODUxYjlmNGU3ODIxZDQ4ZWYwNWNlYjdhZTExNWQ3YTVjO2N0MD0zYzZiZjY3MWNjN2YzZjA2ZjRmNDNmYmIyYWI3ZWVhYzA0ZjMwYzJkYWM1MzdmYjMzNGI4NmU2NzFkOTRiMDZlZmQ2OWJkZmZmODgwODkzNGRlMDdiMDViNmZhZTYwODE2ZmJkOWI1ZGMzMmNlNjNmNmE5NGE4OGIzZTBmNjkzNzllMTA2MTIzYWIwMjYwNDJlMDdjZjI3NmM3MTgzZGRiO3R3aWQ9dSUzRDE5ODQ2NDQ1OTE0OTc0NjE3NjE7'
		});

		const filters = {
			fromUsers: ['durov'],
			startDate: new Date('2025-11-23T17:50:00Z'),
			endDate: new Date('2025-11-23T18:00:00Z'),
			onlyOriginal: false,
		}

		const filtersBack = {
			fromUsers: [
				'Iwantsleepnowjobletm',
			],
			startDate: new Date('2007-06-01T00:00:00Z'),
			endDate: new Date('2025-06-03T00:00:00Z'),
			onlyOriginal: false
		}

		const result = await client.tweet.search(filtersBack);
		const length = await client.tweet.getSearchAxiosQueryLength(filtersBack);

		console.log('list:', result);
		console.log('length:', length);
	} catch (e) {
		console.error('Error:', e);
	}
}

main();
