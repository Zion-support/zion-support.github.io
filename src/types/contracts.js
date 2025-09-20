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
<<<<<<< HEAD
                required: true;},
=======
                required: true;
            },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            {
                name: 'serviceDescription';
                type: 'string';
                description: 'Description of services to be provided';
<<<<<<< HEAD
                required: true;},
=======
                required: true;
            },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            {
                name: 'rate';
                type: 'number';
                description: 'Hourly rate for services';
<<<<<<< HEAD
                required: true;},
        ],
=======
                required: true;
            }],
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
        isPublic: true;
        createdAt: '2024-01-01T00:00:00Z';
        updatedAt: '2024-01-01T00:00:00Z';
        authorId: 'admin';
        authorName: 'Admin';
        usageCount: 1250;
        rating: 4.8;
        tags: ['freelance', 'agreement', 'services']},
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
<<<<<<< HEAD
                required: true;},
=======
                required: true;
            },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
            {
                name: 'confidentialityPeriod';
                type: 'number';
                description: 'Period of confidentiality in years';
                required: true;
<<<<<<< HEAD
                defaultValue: 2;},
        ],
=======
                defaultValue: 2;
            }],
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
        isPublic: true;
        createdAt: '2024-01-01T00:00:00Z';
        updatedAt: '2024-01-01T00:00:00Z';
        authorId: 'admin';
        authorName: 'Admin';
        usageCount: 890;
        rating: 4.6;
        tags: ['nda', 'confidentiality', 'legal']},
];
