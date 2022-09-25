
# REST API (Nodejs + Mysql)

A basic rest api made with Express that simulate the data collection of pets.

I hope you can learn and practice with this project, below i describe all steps and considerations to run the project.



#### What you will find in the project
+ Endpoints
+ HTTP Methods (GET, POST, PUT, PATCH, DELETE)
+ Routes
+ Controllers
+ Folders structure
+ Error handling
+ Environment variables
+ Connection to a MySQL database
## Installation

before installation, you need

#### Requirements:

+ Nodejs v16.17.0 or above (project uses ES Modules)
+ MySQL

To install you need to do

```bash
  git clone https://github.com/Desireless/restapi-nodejs-mysql.git
  cd restapi-nodejs-mysql
  npm install
```
    
## Deployment

To deploy in production use

```bash
  npm run start
```
For development use

```bash
  npm run dev
```

## Environment Variables

To connect to the database, you will need to add the following environment variables to your .env file

You need to create a .env file that contains:
- MYSQLDATABASE=database name
- MYSQLHOST=your host
- MYSQLPASSWORD=your password
- MYSQLPORT=database port
- MYSQLUSER=your database user
- PORT=express port (by default: 3000)

so, your .env file should look like this:

![](https://i.imgur.com/gCmeyJc.png)

## Database
inside db folder, there is a file with some querys to manipulate the database

Example (using Railway)

![](https://i.imgur.com/lrzPZkP.png)

Demo (using Thunder client)

![](https://i.imgur.com/MNZuKyb.png)


## API Reference

#### Get all pets

```http
  GET /pets
```

#### Get pet

```http
  GET /pets/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the pet to fetch |

#### Create pet

```http
  POST /pets
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name to fetch |
| `description`| `string` | **Required**. description  to fetch |

#### Update pet

```http
  PATCH /pets/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the pet to fetch |

#### Delete pet

```http
  DELETE /pets/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the pet to fetch |


## Thanks to

 - [Fazt](https://www.youtube.com/c/FaztTech) (he is an awesome person, that love teaching and the tech, he teaches you this and much more in his youtube channel)
 - [readme.so](https://readme.so/) (to write this readme)
 - [editor.md](https://pandao.github.io/editor.md/en.html) (examples to write readme)

