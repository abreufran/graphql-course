"# graphql-course" 
"# graphql-course" 

http://localhost:3000/graphql

query {
  tasks {
    _id
    title
    description
    number
  }
}

mutation {
  createTask(input: {
    title: "Prueba"
    description: "Prueba Description"
    number: 500
  })
    {
    _id
      title
  }
}