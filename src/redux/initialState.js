const initialState = {
	posts: [
		{
			id: '1',
			title: 'Article title',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02/02/2022'),
			author: 'John Doe',
			category: 'Movies',
		},

		{
			id: '2',
			title: 'Article title II',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02/02/2022'),
			author: 'John Doe',
			category: 'Sport',
		},

		{
			id: '3',
			title: 'Article title III',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02/02/2022'),
			author: 'John Doe',
			category: 'News',
		},

		{
			id: '4',
			title: 'Article title IV',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02/02/2022'),
			author: 'John Doe',
			category: 'Movies',
		},

		{
			id: '5',
			title: 'Article title V',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02/02/2022'),
			author: 'John Doe',
			category: 'Movies',
		},

		{
			id: '6',
			title: 'Article title VI',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02/02/2022'),
			author: 'John Doe',
			category: 'News',
		},
	],

	categories: [
		{
			id: 1,
			name: 'Movies',
		},
		{
			id: 2,
			name: 'Sport',
		},
		{
			id: 3,
			name: 'News',
		},
		{
			id: 4,
			name: 'Games',
		},
	],
};

export default initialState;
