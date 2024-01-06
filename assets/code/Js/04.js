const blogs = []

function addBlog(b) {
    b.prefentDefault()

    const data = [inputData]

    let inputData = {
        projectName: document.getElementById("projectName").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        description: document.getElementById("description").value,
        technologies: {
            NodeJs: document.getElementById("NodeJs").checked,
            NextJs: document.getElementById("NextJs").checked,
            ReactJs: document.getElementById("ReactJs").checked,
            TypeScript: document.getElementById("TypeScript").checked
        },
        image: document.getElementById("image").files
    }
    console.log(data.map)


    // console.log(getData)
    // getData()


}