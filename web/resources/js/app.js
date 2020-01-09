MyApp = {};
MyApp.init = function() {
    console.log('Init');
};
jQuery(document).ready(function () {
    MyApp.init();
});
Vue.component('launch', {
    template: `
   <div class="panel col-md-4">
        <div class="panel-inline sample-heading-3">
            <div class="panel-title">
                <h4>{{ title }}</h4>
            </div>
            <div class="panel-body">
                <ul class="launch-list">
                    <li>
                        <span class="launch-attr-title">No Earlier Than:</span>
                        <span class="net-time">Jan 7, 2020, 4:19:00 AM</span>
                    </li>
                    <li>
                        <span class="launch-attr-title">Location:</span>
                        <span class="launch-location">Space Launch Complex 40, Cape Canaveral, FL</span>
                    </li>
                    <li>
                        <span class="launch-attr-title">Agency:</span>
                        <span class="agency-name">SpaceX</span>
                    </li>
                    <li>
                        <span class="launch-attr-title">Live Video:</span>
                        N/A
                    </li>
                    <li>
                        <span class="launch-attr-title">Live Video:</span>
                        N/A
                    </li>
                    <li>
                        <span class="launch-attr-title">Live Video:</span>
                        N/A
                    </li>
                </ul>
                <div class="actions">
                    <button class="btn btn-prim" style="margin-right: 10px;">Add</button>
                    <button class="btn btn-prim">Share</button>
                </div>
            </div>
        </div>
    </div>
   `,
    data() {
        return {
            title: 'Spacex Falcon 9'
        };
    }
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
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Login</a>
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
            name: 'SpaceInit'
        }
    }
});
var app = new Vue({
    el: '#app',
    data: {
        test: true,
        pageHeading: 'Starting Fresh'
    }
});