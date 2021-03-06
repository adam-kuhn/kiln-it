![Node.js Lint and Test](https://github.com/emilyparkes/kiln-it/workflows/Node.js%20Lint%20and%20Test/badge.svg) ![Deploy](https://github.com/emilyparkes/kiln-it/workflows/Deploy/badge.svg)

# kiln it
Keeping records of my clay creations. Including type of creation, weight, percent shrinkage the status of firing.

🚀 [Currently deployed version](https://kiln-it.herokuapp.com/)   
🎨 *an attempt at a* [Figma Design](https://www.figma.com/file/09q8SUt5gSTAfpNtiGyUOEGt/Kiln-it?node-id=0%3A1)


## Setup

<!-- Create a `.env` file in the main directory and add:

```sh
JWT_SECRET="a fun secret"
``` -->

Run the following commands in your terminal

```sh
npm install
npm run db
npm run dev
```

The site should then be available on http://localhost:3000

## User Stories

### MVP

As an admin user:
- [x] I want to view a creation status log
- [ ] I want to view a creation and all it's details
- [x] I want to view all my creations
- [ ] I want to update the status of a creation
- [ ] I want to edit a creation
- [ ] I want to add a new creation
- [ ] I want to add a note to a creation
- [ ] I want to add a new clay type
- [ ] I want to add a new creation shape
- [ ] I want to add a new glaze


As a friendly user:
- [ ] I want to be able to ...


## Views
  | name | user | purpose |
  | --- | --- | --- |
  | Sign In | * | View for user to enter their login credentials |
  | Register | * | View for user to sign up |
  | Home | * | View list of clay creations |
  | Creation Details | * | View an existing creation, and when Admin all it's recorded details |
  | Creation Log | Admin | View list of clay creations and their current status |
  | Add/Edit Creation | Admin | Create new or edit an existing entry |

  
<!-- 
## API 

All these routes should be protected

| Method | Endpoint | User | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/signin | Sign In a User | The Users JWT Token |
| Post | /api/auth/register | Register a User | The Users JWT Token |
| TBC | -->
