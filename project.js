let blogs = []
console.log('Data awal',blogs)

function addBlog(event) {

    event.preventDefault()

    let name = document.getElementById('input-project-name').value
    let start = document.getElementById('input-start-date').value
    let end = document.getElementById('input-end-date').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-blog-image').files

    if (name == ''){
        return alert("Project name wajib diisi")
    } else if (start == ''){
        return alert("Start date wajib diisi")
    } else if (end == ''){
        return alert("End date wajib diisi")
    } else if (description == ''){
        return alert("Description wajib diisi")
    } 

    image = URL.createObjectURL(image[0]) 

    let blog = {
        name: name,
        start: start,
        end : end,
        description: description,
        image: image
    }

    blogs.push(blog)
    console.log('Data Ketika ditambahkan',blogs);

    renderBlog()
}


function renderBlog() {

    document.getElementById('projects').innerHTML = ''
    for (let dataBlog = 0; dataBlog < blogs.length; dataBlog++) {

        document.getElementById('projects').innerHTML +=
        `
        <div id="projects" class="projects-list">
                <div class="projects-list-item">
                    <img class="projects-img" src=${blogs[dataBlog].image} width="100%" />
                    <a href="my-project-detail.html"><h3>${blogs[dataBlog].name}</h3></a>
                    <p>durasi: 3 bulan</p>
                    <p style="color: grey">${blogs[dataBlog].description}</p>
                    <div class="icon-project">
                        <i class="fa-brands fa-node-js"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-angular"></i>
                        <i class="fa-brands fa-java"></i>
                    </div>
                    <div class="btn-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delet">Delete</button>
                    </div>
                </div>
        </div>
        `
    }

}


