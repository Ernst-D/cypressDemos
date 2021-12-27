
            /**
             * 
             * {
                "transaction": {
                    "id": "O53zQkYe4",
                    "uuid": "9eb5a687-c9da-457d-b5f4-c695ba9d77b4",
                    "amount": 100,
                    "description": "test transaction note",
                    "receiverId": "-TuKUa8x7K",
                    "senderId": "xMa4K3znt",
                    "privacyLevel": "contacts",
                    "status": "pending",
                    "requestStatus": "pending",
                    "createdAt": "2021-12-24T11:32:32.533Z",
                    "modifiedAt": "2021-12-24T11:32:32.533Z"
                }
                }
             * 
             */

            /**
             * 
             * /notifications -> response -> body -> Array<Response> -> eq(0): 
             * 
             * createdAt: "2021-12-24T11:32:32.537Z"
            id: "asE6TH74A-"
            isRead: false
            modifiedAt: "2021-12-24T11:32:32.537Z"
            status: "requested"
            transactionId: "O53zQkYe4"
            userFullName: "Brando Witting"
            userId: "-TuKUa8x7K"
            uuid: "a5984bc5-dfc2-4e5f-88b9-84874672ad15"
             * 
             */

            /**
             * notifiactions endpoint response
             */
            // [
            //     {
            //         "userFullName": "Brando Witting",
            //         "id": "phS1c8hJ8v",
            //         "uuid": "6f082695-1269-4c28-a4a9-59d49a4632ca",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "dsZ4epViP",
            //         "status": "requested",
            //         "isRead": false,
            //         "createdAt": "2021-12-27T09:17:06.673Z",
            //         "modifiedAt": "2021-12-27T09:17:06.673Z"
            //     },
            //     {
            //         "userFullName": "Brando Witting",
            //         "id": "fMc0SNhzEW",
            //         "uuid": "604b2cab-5472-42a5-ba2a-c8d527bd7172",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "R7OEDuJbc",
            //         "status": "requested",
            //         "isRead": false,
            //         "createdAt": "2021-12-27T09:14:19.365Z",
            //         "modifiedAt": "2021-12-27T09:14:19.365Z"
            //     },
            //     {
            //         "userFullName": "Brando Witting",
            //         "id": "TVUkhoNAP7",
            //         "uuid": "f09d23b2-f081-4502-9a8e-f7d1528b7703",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "QICvGonb5",
            //         "status": "requested",
            //         "isRead": false,
            //         "createdAt": "2021-12-27T08:47:15.556Z",
            //         "modifiedAt": "2021-12-27T08:47:15.556Z"
            //     },
            //     {
            //         "userFullName": "Colleen Kertzmann",
            //         "id": "By7iWAWPO0bB",
            //         "uuid": "b694354f-1c7c-44e6-ad9a-6d289a77f38e",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "bJdlre6TotiY",
            //         "status": "received",
            //         "isRead": false,
            //         "createdAt": "2021-10-18T18:56:23.239Z",
            //         "modifiedAt": "2021-12-24T05:39:30.491Z"
            //     },
            //     {
            //         "userFullName": "Audreanne Reinger",
            //         "id": "NeM_PmOpTcSS",
            //         "uuid": "36885459-481f-4ca1-aca4-a6c7f10a1ebc",
            //         "userId": "-TuKUa8x7K",
            //         "likeId": "5P2ce9nqha1x",
            //         "transactionId": "mE7OMR94itk5",
            //         "isRead": false,
            //         "createdAt": "2021-03-21T16:43:24.655Z",
            //         "modifiedAt": "2021-12-24T05:32:00.505Z"
            //     },
            //     {
            //         "userFullName": "Audreanne Reinger",
            //         "id": "RUnpl58_fNEu",
            //         "uuid": "8abb347c-c979-49ce-8cfa-358f0b2a3895",
            //         "userId": "-TuKUa8x7K",
            //         "commentId": "TXGYRYEmtm2D",
            //         "transactionId": "6e95Fk40cLeE",
            //         "isRead": false,
            //         "createdAt": "2021-12-14T18:05:49.903Z",
            //         "modifiedAt": "2021-12-24T02:59:25.328Z"
            //     },
            //     {
            //         "userFullName": "Colleen Kertzmann",
            //         "id": "1yNZr81D4PMy",
            //         "uuid": "9e8a21f6-e24d-47ff-a533-2f2b0a43d463",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "70pbiyQ3vsL",
            //         "status": "requested",
            //         "isRead": false,
            //         "createdAt": "2021-11-27T04:00:26.451Z",
            //         "modifiedAt": "2021-12-23T22:44:09.679Z"
            //     },
            //     {
            //         "userFullName": "Colleen Kertzmann",
            //         "id": "0QmZesCcQtQC",
            //         "uuid": "269fde51-5675-43c1-bcd7-37577f6ac956",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "bJdlre6TotiY",
            //         "status": "requested",
            //         "isRead": false,
            //         "createdAt": "2020-12-29T01:25:38.945Z",
            //         "modifiedAt": "2021-12-23T21:22:32.838Z"
            //     },
            //     {
            //         "userFullName": "Brando Witting",
            //         "id": "CrhZbznBlTvG",
            //         "uuid": "d16bd37a-8af0-4f35-9307-a35768167f9b",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "mlO6-Sf2rfs",
            //         "status": "received",
            //         "isRead": false,
            //         "createdAt": "2021-08-27T20:30:33.785Z",
            //         "modifiedAt": "2021-12-23T20:15:14.764Z"
            //     },
            //     {
            //         "userFullName": "Colleen Kertzmann",
            //         "id": "wa57n_Z-VetO",
            //         "uuid": "213cf016-1008-468e-99d0-e31e3fa8debf",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "70pbiyQ3vsL",
            //         "status": "received",
            //         "isRead": false,
            //         "createdAt": "2021-09-14T13:41:36.608Z",
            //         "modifiedAt": "2021-12-23T18:37:48.080Z"
            //     },
            //     {
            //         "userFullName": "Brando Witting",
            //         "id": "InJvJnimOi7l",
            //         "uuid": "727ab42a-02a3-4ca8-adcd-876f009ac924",
            //         "userId": "-TuKUa8x7K",
            //         "transactionId": "mlO6-Sf2rfs",
            //         "status": "requested",
            //         "isRead": false,
            //         "createdAt": "2021-03-07T08:56:40.570Z",
            //         "modifiedAt": "2021-12-23T17:30:24.276Z"
            //     }
            // ]