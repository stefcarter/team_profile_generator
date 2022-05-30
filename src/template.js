function renderManger(name, role, id, email, office){
    return (
        `
        <div class="col-xl-3 card">
            <div class="card-head">
                <h3>${name}</h3>
                <h4><i class="fa-solid fa-user-clock"></i> ${role}</h4>
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
                <h3>${name}</h3>
                <h4><i class="fa-solid fa-user-gear"></i> ${role}</h4>
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