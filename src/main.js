import api from './api';

// class App {
//     constructor() {
//         this.respositories = [];

//         this.formEl = document.querySelector('form#repo-form');
//         this.inputEl = document.querySelector('input[name=respository]');
//         this.listEl = document.querySelector('ul#repo-list');


//         this.registerHandlers();
//         this.captureValueInput();
//     }

//     setLoading(loading = true) {
//         if (loading == true) {
//             let loadingEl = document.createElement('h4');
//             loadingEl.appendChild(document.createTextNode('Carregando...'));
//             loadingEl.setAttribute('id', 'loading');

//             this.formEl.append(loadingEl);
//         } else {
//             document.querySelector('#loading').remove();
//         }
//     }

//     registerHandlers() {
//         this.formEl.onsubmit = event => this.addRespository(event);
//     }


//     captureValueInput() {
//         let time = null;
//         this.inputEl.addEventListener("keyup", (event) => {

//             clearTimeout(time);

//             time = setTimeout(() => {
//                 this.addRespository(event.target.value);
//                 console.log(event.target.value);
//             }, 1500)
//         })
//     }



//     async addRespository(event) {
//         // event.preventDefault();

//         const repoInput = this.inputEl.value;

//         if (repoInput.length === 0)
//             return;

//         this.setLoading();

//         try {
//             const response = await api.get(`/repos/${event}`);

//             const { name, description, html_url, owner: { avatar_url } } = response.data;

//             this.respositories.push({
//                 name,
//                 description,
//                 avatar_url,
//                 html_url,
//             })

//             this.inputEl.value = '';

//             this.render();
//         } catch (err) {
//             alert('Respositório não existe!');
//         }

//         this.setLoading(false);
//     }

//     render() {
//         this.listEl.innerHTML = '';

//         this.respositories.forEach(repo => {
//             let imgEl = document.createElement('img');
//             imgEl.setAttribute('src', repo.avatar_url);

//             let titleEl = document.createElement('strong');
//             titleEl.appendChild(document.createTextNode(repo.name));

//             let descriptionEl = document.createElement('p');
//             descriptionEl.appendChild(document.createTextNode(repo.description));

//             let linkEl = document.createElement('a');
//             linkEl.setAttribute('target', '_blank');
//             linkEl.setAttribute('href', repo.html_url);
//             linkEl.appendChild(document.createTextNode('Acessar'));


//             let listItemEl = document.createElement('li');

//             listItemEl.appendChild(imgEl);
//             listItemEl.appendChild(titleEl);
//             listItemEl.appendChild(descriptionEl);
//             listItemEl.appendChild(linkEl);

//             this.listEl.appendChild(listItemEl);

//         })
//     }
// }


// new App();


class App {
    constructor() {
        this.respositories = [{
            avatar_url: "https://avatars3.githubusercontent.com/u/53284345?s",
            name: "Testing",
            description: "testing testing testing testingtesting testing",
            html_url: "www.google.com"
        }];

        this.inputEl = document.querySelector('input#inputMain');
        this.buttonStart = document.querySelector('#submit');
        this.boxShowRepo = document.querySelector('.box_allocate_profiles');

        // Metodos
        this.newRespositorie();
        this.render();
    }

    newRespositorie() {
        this.buttonStart.addEventListener("click", () => {
            this.render();
        })
    }

    render() {

        this.respositories.forEach((repo) => {
            let card = document.createElement('div');
            card.setAttribute('id', 'card')

            let imgProfile = document.createElement('img');
            imgProfile.setAttribute('src', repo.avatar_url);

            let titleRepo = document.createElement('h4');
            titleRepo.appendChild(document.createTextNode(repo.name));

            let description = document.createElement('p');
            description.appendChild(document.createTextNode(repo.description));

            let linkProfile = document.createElement('a');
            linkProfile.setAttribute('href', repo.html_url);
            linkProfile.appendChild(document.createTextNode('Acessar'));


            card.appendChild(imgProfile);
            card.appendChild(titleRepo);
            card.appendChild(titleRepo);
            card.appendChild(linkProfile);

            this.boxShowRepo.appendChild(card);
        })
    }

    newRespositorie() {

    }
}


new App();