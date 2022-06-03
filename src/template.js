function renderManger(name, role, id, email, office){
    return (
        `
        <div class="col-xl-3 card">
            <div class="card-head">
                <h3 class="nameDent">${name}</h3>
                <h4><i class="fa-solid"></i>☕ ${role}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Office Number: ${office}</li>
                </ul>
            </div>
        </div>
        `
    );
};

function renderEngineer(name, role, id, email, git) {
    return (
        `
        <div class="col-xl-3 card">
            <div class="card-head">
                <h3 class="nameDent">${name}</h3>
                <h4><i class="fa-solid"></i>👓 ${role}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${git}">${git}</a></li>
                </ul>
            </div>
        </div>
        `
    );
};

function renderIntern(name, role, id, email, school) {
    return (
        `
        <div class="col-xl-3 card">
            <div class="card-head">
                <h3 class="nameDent">${name}</h3>
                <h4><i class="fa-solid"></i>🎓 ${role}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
        `
    );
};

function renderPage(mgrData, engData, intData) {
    return(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://kit.fontawesome.com/b9c138fb21.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <title>Profile Generator</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
                <section class="container">
                    <div class="row">
                        ${mgrData}
                        
                        ${engData}
                   
                        ${intData}
                    </div>
                </section>   
        </body>
        </html>
        `
    );
};

module.exports = {
    renderPage,
    renderIntern,
    renderEngineer,
    renderManger,
}