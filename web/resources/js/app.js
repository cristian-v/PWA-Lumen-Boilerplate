MyApp = {};
MyApp.init = function() {
    console.log('Init pwafastup');
};
jQuery(document).ready(function () {
    MyApp.init();
});
Vue.component('navbar', {
    prop: {
        test: {
            type: Boolean,
            required: false,
        }
    },
    template: `
        <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler collapsed main-nav" type="button" data-toggle="collapse" data-target="#navbar01"
                    aria-controls="navbar01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">{{ name }}</a>
            <button class="navbar-toggler collapsed user-nav" type="button"
                    data-toggle="collapse" data-target="#navbar02" aria-controls="navbar02" aria-expanded="false"
                    aria-label="Toggle account navigation">
                <i class="far fa-user"></i>
            </button>
            <div class="navbar-collapse collapse" id="navbar02" style="text-align: right;">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="login.html" tabindex="-1" aria-disabled="true">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Logout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Profile</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-collapse collapse" id="navbar01" style="">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active dropdown">
                        <a class="nav-link dropdown-toggle"
                           href="#"
                           id="dropdown01"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false">Launch providers <span class="sr-only">(current)</span></a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="dropdown-item" href="#">Spacex</a>
                            <a class="dropdown-item" href="#">ULA</a>
                            <a class="dropdown-item" href="#">Arianespace</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link"
                           href="#"
                           id="dropdown02"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false">People in space</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown02">
                            <a class="dropdown-item" href="#">Spacex</a>
                            <a class="dropdown-item" href="#">ULA</a>
                            <a class="dropdown-item" href="#">Arianespace</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Near Me</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Help</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown04">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-md-0">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </nav>
    `,
    data() {
        return {
            name: 'Pwafastup'
        }
    }
});
Vue.component('login_form', {
    template: `
    <form class="" action="">
        <div class="form-group">
            <label for="username">Username</label>
            <input name="username" class="form-control" id="username"/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input name="password" class="form-control" id="password"/>
        </div>
        <div class="form-group">
            <button class="btn btn-prim">Login</button>
        </div>
    </form>
    `
});
var app = new Vue({
    el: '#app',
    data: {
        test: true,
        pageHeading: 'Starting Pwafastup'
    }
});