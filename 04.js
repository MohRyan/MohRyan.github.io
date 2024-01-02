function getData(e) {
    // e.prefentDefault()
    let inputData = {
        projectName : document.getElementById("projectName").value,
        startDate : document.getElementById("startDate").value,
        endDate : document.getElementById("endDate").value,
        description : document.getElementById("description").value,
        technologies : {
            NodeJs : document.getElementById("NodeJs").checked,
            NextJs : document.getElementById("NextJs").checked,
            ReactJs : document.getElementById("ReactJs").checked,
            TypeScript : document.getElementById("TypeScript").checked
        },
        image : document.getElementById("image").files
    }
    console.log(getData)
    // getData()


}