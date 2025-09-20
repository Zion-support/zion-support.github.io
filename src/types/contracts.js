export const CONTRACT_TEMPLATES = [{
        id: '1';
        name: 'Freelance Service Agreement';
        description: 'Standard agreement for freelance services';
        category: 'Freelance';
        content: 'This agreement is made between...';
        variables: [
            {
                name: 'clientName';
                type: 'string';
                description: 'Name of the client';
                required: true;
            },
<<<<<<< HEAD
=======
                required: true;},
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
            {
                name: 'serviceDescription';
                type: 'string';
                description: 'Description of services to be provided';
                required: true;
            },
<<<<<<< HEAD
=======
                required: true;},
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
            {
                name: 'rate';
                type: 'number';
                description: 'Hourly rate for services';
                required: true;
            }],
<<<<<<< HEAD
=======
                required: true;},
        ],
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
        isPublic: true;
        createdAt: '2024-01-01T00:00:00Z';
        updatedAt: '2024-01-01T00:00:00Z';
        authorId: 'admin';
        authorName: 'Admin';
        usageCount: 1250;
        rating: 4.8;
<<<<<<< HEAD
        tags: ['freelance', 'agreement', 'services'],
    },
=======
        tags: ['freelance', 'agreement', 'services']},
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
    {
        id: '2';
        name: 'Non-Disclosure Agreement';
        description: 'Confidentiality agreement template';
        category: 'Legal';
        content: 'This Non-Disclosure Agreement...';
        variables: [{
                name: 'companyName';
                type: 'string';
                description: 'Name of the company';
                required: true;
            },
<<<<<<< HEAD
=======
                required: true;},
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
            {
                name: 'confidentialityPeriod';
                type: 'number';
                description: 'Period of confidentiality in years';
                required: true;
                defaultValue: 2;
            }],
<<<<<<< HEAD
=======
                defaultValue: 2;},
        ],
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
        isPublic: true;
        createdAt: '2024-01-01T00:00:00Z';
        updatedAt: '2024-01-01T00:00:00Z';
        authorId: 'admin';
        authorName: 'Admin';
        usageCount: 890;
        rating: 4.6;
<<<<<<< HEAD
        tags: ['nda', 'confidentiality', 'legal'],
    },
=======
        tags: ['nda', 'confidentiality', 'legal']},
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
];
