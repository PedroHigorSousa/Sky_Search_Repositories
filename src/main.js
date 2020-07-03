import api from './api';

class App {
    constructor() {
        this.respositories = [];

        this.formEl = document.querySelector('form#repo-form');
        this.inputEl = document.querySelector('input[name=respository]');
        this.listEl = document.querySelector('ul#repo-list');


        this.registerHandlers();
    }

    setLoading(loading = true) {
        if (loading == true) {
            let loadingEl = document.createElement('h4');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.append(loadingEl);
        } else {
            document.querySelector('#loading').remove();
        }
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRespository(event);
    }



    async addRespository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.respositories.push({
                name,
                description,
                avatar_url,
                html_url,
            })

            this.inputEl.value = '';

            this.render();
        } catch (err) {
            alert('Respositório não existe!');
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = ''; // Faz com que ele apague o conteúdo que ja estão lá.

        this.respositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));


            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        })
    }
}


new App();
