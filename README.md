# (Simple) Web Request

## Technologies use:
- JavaScript (ES6)
- CSS
- HTML
- Node.js
- Express.js
- Rest API

## How to use:
1. Navigate to the home folder
2. Start a server by using command:
        
        $ nodemon app.js

    or if you doesn't have nodemon run it by using node runtime

        $ node app.js

3. Open the index.html in public/ folder


## Endpoint
You can try this endpoint for request

- `GET /students` - To Get data, I prefer you to open console to see the data

- `POST /students` - Use body section to create data, by using this body request `{"name": "yourname", "age": "17"}`

- `PUT /students/:id?name={yourname}&age={yourage}` - To update data simply put the id, name and age to update data example `(/students/2?name=kurt&age=19)` without parenthesis

- `DELETE /students/:id` - To delete data



---------------------
Develop by: [Kurt Russelle Marmol](https://github.com/jkrmarmol) on June 26, 2022
