
var timer = 300

export class myWindow {
    constructor(title, content, id, icon_small, icon_big){
        this.id = id;
        this.title = title;
        this.content = content;
        this.icon_small = icon_small;
        this.icon_big = icon_big;
    }

    //Genere l'icon sur le desktop
    createIconDesktop() {
        const   desktopIconContainer = document.createElement('div');
                desktopIconContainer.id = this.id + "_icon";
                desktopIconContainer.classList.add('desktop__icon__container');
                const   iconImage = document.createElement('img');
                        iconImage.src = this.icon_big;
                        iconImage.alt = 'icon';
                const   textContainer = document.createElement('div');
                        textContainer.classList.add('desktop__icon__container__text');
                        textContainer.textContent = this.title;
        desktopIconContainer.append(iconImage, textContainer);
        desktopIconContainer.addEventListener('click', (event) => this.super_createWindow());
        document.getElementById('desktop__icon').appendChild(desktopIconContainer);
    }
    
    super_createWindow() {
        this.createWindow()
    }

    //Genere la fenetre lors du click sur l'icon
    createWindow() {
        var element = document.getElementById(this.id)
        console.log(element)
        if (element != null){
            this.change_index(null)
            element.style.display = 'block';
            if (element.classList.contains("go_down"))
            {
                element.classList.remove("go_down")
                element.classList.add("go_up")
                document.getElementById(this.id + "_icon").remove();
                setTimeout(function (element){
                    element.getElementsByClassName('header_nav__title')[0].style.display = 'flex';
                    element.getElementsByClassName('header_nav__red_button')[0].style.display = 'block';
                    element.getElementsByClassName('header_nav__orange_button')[0].style.display = 'block';
                    element.getElementsByClassName('header_nav__green_button')[0].style.display = 'block';
                }, timer, element); 
            }
            return;
        }
        var list = document.getElementsByClassName('window');
        list = list.length;
        const   window = document.createElement('div');
                window.classList.add('window');
                window.addEventListener('click', (event) => this.change_index())
                window.style.top = 100 + (30 * list) + 'px';
                window.style.left = 100 + (30 * list) + 'px';
                window.style.zIndex = 49;
                list = document.getElementsByClassName("window");
                for (let index = 0; index < list.length; index++)
                    list[index].style.zIndex--;
                window.id = this.id;
        const   header_nav = document.createElement('div');
                header_nav.classList.add('header_nav');
                header_nav.id = 'header_nav';
                header_nav.addEventListener('mousedown', (event) => this.on_mouse_down_square(event, this.id));
                const   header_nav__red_button = document.createElement('span');
                        header_nav__red_button.classList.add('header_nav__red_button');
                        header_nav__red_button.addEventListener('click', (event) => this.on_click_red(event));
                const   header_nav__orange_button = document.createElement('span');
                        header_nav__orange_button.classList.add('header_nav__orange_button');
                        header_nav__orange_button.addEventListener('click', (event) => this.on_click_orange(event));
                const   header_nav__green_button = document.createElement('span');
                        header_nav__green_button.classList.add('header_nav__green_button');
                        header_nav__green_button.addEventListener('click', (event) => this.on_click_green(event));
                const   header_nav__title = document.createElement('div');
                        header_nav__title.classList.add('header_nav__title');
                        header_nav__title.textContent = this.title;
        header_nav.append(header_nav__red_button, header_nav__orange_button, header_nav__green_button, header_nav__title);
        const   content_window = document.createElement('div');
                content_window.classList.add('content_window');
                const   content_window__datas = document.createElement('div');
                        content_window__datas.classList.add('content_window__datas');
                        content_window__datas.textContent = this.content;
        content_window.appendChild(content_window__datas);
        const all_class = ["content_window__down_right", "content_window__down_left", "content_window__down_middle", "content_window__middle_left", "content_window__middle_right", "content_window__up_right", "content_window__up_left", "content_window__up_middle"]
        var index = 1;
        all_class.forEach(element => {
            let content_window__class = document.createElement('div');
                content_window__class.classList.add(element);
                content_window__class.id = index++;
                content_window__class.addEventListener('mousedown', (event) => this.on_mouse_down_window(event, parseInt(content_window__class.id), this.id));
            content_window.appendChild(content_window__class);
        });
        window.append(header_nav, content_window);
        document.body.appendChild(window);
    }
    
    //Fonction pour le bouton fermer d'une fenetre
    on_click_red(event) {
        var element = document.getElementById(this.id);
            element.className = 'window let_go_remove';
        setTimeout(function (element){
            element.getElementsByClassName('header_nav__title')[0].style.display = 'none';
            element.getElementsByClassName('header_nav__red_button')[0].style.display = 'none';
            element.getElementsByClassName('header_nav__orange_button')[0].style.display = 'none';
            element.getElementsByClassName('header_nav__green_button')[0].style.display = 'none';
        }, timer, element);
        setTimeout(function (id){
            document.getElementById(id).remove();
        }, timer, this.id);

    }
    
    //Fonction pour le bouton retrecir d'une fenetre
    on_click_orange(event) {
        var element = document.getElementById(this.id)
            element.getElementsByClassName('header_nav__title')[0].style.display = 'none';
            element.getElementsByClassName('header_nav__red_button')[0].style.display = 'none';
            element.getElementsByClassName('header_nav__orange_button')[0].style.display = 'none';
            element.getElementsByClassName('header_nav__green_button')[0].style.display = 'none';
            element.className = 'window go_down';
            setTimeout(this.create_image(), timer);
    }

    //Fonction pour le click sur l'icon dans la navbar
    over_click_orange(event) {
        this.change_index(event)
        var element = document.getElementById(this.id);
            element.className = 'window go_up';
            element.style.display = 'block';
        document.getElementById(this.id + "_icon").remove();
        setTimeout(function (element){
            element.getElementsByClassName('header_nav__title')[0].style.display = 'flex';
            element.getElementsByClassName('header_nav__red_button')[0].style.display = 'block';
            element.getElementsByClassName('header_nav__orange_button')[0].style.display = 'block';
            element.getElementsByClassName('header_nav__green_button')[0].style.display = 'block';
        }, timer, element); 
    }
        
       //Fonction pour ajouter l'icon dans la navbar
    create_image() {
        let icon = document.createElement('span');
            icon.classList.add('header_nav__icon');
            icon.innerHTML = "<img class='navbar__img' src='" + this.icon_small + "'><p id=" + this.id + "_nav_bar_text>" + this.title + "</p>"
            icon.id = this.id + "_icon";
            icon.addEventListener('click', (event) => this.over_click_orange(event));
        document.getElementById('navbar').appendChild(icon);
    }

    //Fonction pour le bouton agrandissement de la fenetre
    on_click_green(event) {
        var element = document.getElementById(this.id);
        element.className = (element.className == 'window let_go_big') ? 'window let_go_small' : 'window let_go_big';
    }
    
    //Fonction pour gerer les differentes manip' sur une fenetre
    on_mouse_down_window(event, pos, squareIn) {
        this.change_index(event)
        if (mouse_down == false)
            square = squareIn;
        mouse_down=true;
        mouse_pos=pos;
    }

    //Fonction pour gerer le deplacement d'une fenetre
    on_mouse_down_square(event, squareIn) {
        this.change_index(event)
        if (mouse_down == false) {
            square = squareIn;
            posX = event.clientX - document.getElementById(square).offsetLeft;
            posY = event.clientY - document.getElementById(square).offsetTop;
        }
        mouse_down=true;
        mouse_pos=0;
    }

    //Fonction pour mettre en premier plan la fenetre active
    change_index(event) {
        let index_global = 48;
        let windows = Array.from(document.getElementsByClassName("window"));
        windows.sort((a, b) => b.style.zIndex - a.style.zIndex);
        windows.forEach((element, index) => {
            element.style.zIndex = (element.id === this.id) ? 49 : index_global--;
        });
    }
}


export class myFolder extends myWindow {
    constructor(title, content, id, icon_small, icon_big, projects){
        super(title, content, id, icon_small, icon_big);
        this.projects = projects;
        
        // document.getElementById(this.id + '_icon').addEventListener('click', (event) => this.createInside());
    }
    

    super_createWindow() {
        this.createWindow()
        var all_projects = document.createElement('div');
            all_projects.classList.add('folder__icon');
        var projects =  this.projects
        console.log(projects)
        
        for (var element in projects)
        {
            var project_inArray = projects[element]
            const   iconFile = document.createElement('div');
                    iconFile.id = this.id + "_icon";
                    iconFile.classList.add('folder__icon__container');
                    const   iconImage = document.createElement('img');
                            iconImage.classList.add('folder__icon__container__img');
                            iconImage.src = '/static/app/' + project_inArray.icon;
                            iconImage.alt = 'icon';
                    const   textContainer = document.createElement('div');
                            textContainer.classList.add('folder__icon__container__text');
                            textContainer.textContent = project_inArray.name;
            iconFile.append(iconImage, textContainer);
            iconFile.addEventListener('click', (event) => {
                var element = new myWindow(project_inArray.name, project_inArray.content, project_inArray.slug, '/static/app/' + project_inArray.icon, '/static/app/' + project_inArray.icon);
                setTimeout(function (element){
                    element.createWindow();
                    element.change_index(event);
                }, 100, element);
            });
            all_projects.appendChild(iconFile);
        }
        document.getElementById(this.id).getElementsByClassName('content_window__datas')[0].innerHTML = '';
        document.getElementById(this.id).getElementsByClassName('content_window__datas')[0].append(all_projects);
    }
}