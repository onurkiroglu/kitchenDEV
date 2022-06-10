## KitchenDEV CRUD Task
<br/>
High-level Design
<br/>
Below is the high-level structure of the application.
<br/>

´
./src
├── app
│   ├── app # root app component
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.ts
│   │   ├── app.component.css
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
│   ├── service # includes http calls
│   │   └── service.ts
│   │
│   └── features # all features of application
│       ├── about
│       ├── home
│       └── secured-feat
│
│
├── assets
│   ├── ...
│
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
│
└── ...
´
