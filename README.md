# KitchenDEV CRUD Task
https://user-images.githubusercontent.com/81585721/173164656-2ebbba7d-13ee-409d-90f6-27d02ebf475d.mp4


## Getting Started
### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

### Setup & Usage

- Clone this repository: `git clone https://github.com/onurkiroglu/kitchenDEV.git`
- Install dependencies: `npm install`
- Serve the Angular app: `npm start`
- Open your browser at: `http://localhost:4200`

## Tech Stack

- [Angular](https://angular.io/)
- [PrimeNg](https://www.primefaces.org/)
- [PrimeFlex](https://www.primefaces.org/)

## High-level Design

Below is the high-level structure of the application.

```sh
./src
├── app
│   ├── app # root app component
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.spec.ts
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   │
│   │
│   │
│   ├── layout # shows main page
│   │   ├── layout.component.ts
│   │   ├── layout.component.html
│   │   └── layout.component.css
│   │
│   │
│   ├── drawer add user # includes adding page
│   │   ├── drawer-add-user.component.ts
│   │   ├── drawer-add-user.component.html
│   │   └── drawer-add-user.component.css
│   │
│   │
│   ├── drawer edit user # includes editing page
│   │   ├── drawer-edit-user.component.ts
│   │   ├── drawer-edit-user.component.html
│   │   └── drawer-edit-user.component.css
│   │
│   │
│   └── service # includes http calls
│       └── service.ts
│   
│
├── assets
│   └── ...
│
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
│
└── ...
```

