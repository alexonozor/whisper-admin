webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_route_module__ = __webpack_require__("../../../../../src/app/route/route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_google_place_autocomplete__ = __webpack_require__("../../../../ng2-google-place-autocomplete/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_menu_component__ = __webpack_require__("../../../../../src/app/dashboard/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contraceptive_contraceptive_component__ = __webpack_require__("../../../../../src/app/contraceptive/contraceptive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contraceptive_contraceptive_details_component__ = __webpack_require__("../../../../../src/app/contraceptive/contraceptive-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contraceptive_assessment_assessment_component__ = __webpack_require__("../../../../../src/app/contraceptive/assessment/assessment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contraceptive_assessment_response_assessment_response_component__ = __webpack_require__("../../../../../src/app/contraceptive/assessment-response/assessment-response.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_users_users_component__ = __webpack_require__("../../../../../src/app/user/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_user_new_user_new_component__ = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pharmacy_pharmacy_component__ = __webpack_require__("../../../../../src/app/pharmacy/pharmacy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contraceptive_contraceptive_component__["a" /* ContraceptiveComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contraceptive_contraceptive_details_component__["a" /* ContraceptiveDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__contraceptive_assessment_assessment_component__["a" /* AssessmentComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__user_user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__user_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_22__user_user_new_user_new_component__["a" /* UserNewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__user_user_edit_user_edit_component__["a" /* UserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pharmacy_pharmacy_component__["a" /* PharmacyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__contraceptive_assessment_response_assessment_response_component__["a" /* AssessmentResponseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__route_route_module__["a" /* RouteModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_google_place_autocomplete__["a" /* GooglePlaceModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__authentication_service__["a" /* AuthenticationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contraceptive_service__ = __webpack_require__("../../../../../src/app/contraceptive.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthConfig"]({
        tokenName: 'token',
        headerPrefix: 'JWT',
        tokenGetter: (function () { return localStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_5__contraceptive_service__["a" /* ContraceptiveService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]]
                }
            ],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthenticationProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthenticationService = (function () {
    function AuthenticationService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.host = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    AuthenticationService.prototype.login = function (accountInfo) {
        return this.http.post(this.host + "/login", accountInfo)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthenticationService.prototype.tokenSubscription = function () {
        this.authHttp.tokenStream.subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
    };
    AuthenticationService.prototype.loggedIn = function () {
        return !Object(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["tokenNotExpired"])(this.getToken('token'));
    };
    AuthenticationService.prototype.saveToken = function (tokenName, token) {
        localStorage.setItem(tokenName, token);
    };
    AuthenticationService.prototype.getToken = function (token) {
        return (localStorage.getItem(token));
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/contraceptive.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContraceptiveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContraceptiveService = (function () {
    function ContraceptiveService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.host = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    ContraceptiveService.prototype.save = function (contraceptiveInfo) {
        return this.authHttp.post(this.host + "/contraceptives", contraceptiveInfo)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.update = function (contraceptiveInfo, id) {
        return this.authHttp.put(this.host + "/contraceptive/" + id, contraceptiveInfo)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.get = function () {
        return this.authHttp.get(this.host + "/contraceptives")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.deleteContraceptive = function (id) {
        return this.authHttp.delete(this.host + "/contraceptive/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.getDetails = function (id) {
        return this.authHttp.get(this.host + "/contraceptive/" + id + "/assessments")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.getAssessments = function () {
        return this.authHttp.get(this.host + "/assessments")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.deleteAssessment = function (id) {
        return this.authHttp.delete(this.host + "/assessment/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.saveAssessment = function (assessmentInfo) {
        return this.authHttp.post(this.host + "/assessments", assessmentInfo)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.createAnswer = function (assessmentInfo, id) {
        return this.authHttp.post(this.host + "/assessment/" + id + "/answers", assessmentInfo)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.getAssementAnswer = function (id) {
        return this.authHttp.get(this.host + "/assessment/" + id + "/answers")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.deleteAnswer = function (id) {
        return this.authHttp.delete(this.host + "/answer/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService.prototype.getAssementResponses = function () {
        return this.authHttp.get(this.host + "/assessment-responses")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    ContraceptiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === 'function' && _b) || Object])
    ], ContraceptiveService);
    return ContraceptiveService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/contraceptive.service.js.map

/***/ }),

/***/ "../../../../../src/app/contraceptive/assessment-response/assessment-response.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contraceptive/assessment-response/assessment-response.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  assessment-response works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/contraceptive/assessment-response/assessment-response.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentResponseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssessmentResponseComponent = (function () {
    function AssessmentResponseComponent() {
    }
    AssessmentResponseComponent.prototype.ngOnInit = function () {
    };
    AssessmentResponseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assessment-response',
            template: __webpack_require__("../../../../../src/app/contraceptive/assessment-response/assessment-response.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contraceptive/assessment-response/assessment-response.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AssessmentResponseComponent);
    return AssessmentResponseComponent;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/assessment-response.component.js.map

/***/ }),

/***/ "../../../../../src/app/contraceptive/assessment/assessment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contraceptive-details\" *ngIf=\"loading\">\r\n    <div class=\"progress\">\r\n      <div class=\"indeterminate\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n <ul class=\"collection with-header\">\r\n        <li class=\"collection-header\"><h6>Answers</h6></li>\r\n        <a *ngFor=\"let answer of assessmentAnswers; let i = index\" class=\"collection-item\">{{answer?.name}}<a (click)=\"deleteAnswer(id, i)\" class=\"secondary-content\"><i class=\"material-icons\">delete</i></a></a>\r\n</ul>\r\n\r\n<a class=\"btn-floating btn-large waves-effect waves-light teal\" (click)=\"toggleBUtton($event.target)\"><i class=\"material-icons\">add</i></a>\r\n\r\n <form [formGroup]=\"createAnswerForm\" class=\"col s12\" (ngSubmit)=\"createAnswer()\" [hidden]=\"!showForm\">\r\n    <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n            <input id=\"question\" type=\"text\" formControlName=\"name\" class=\"validate\">\r\n            <label for=\"name\">name</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n         <div class=\"input-field col s12\">\r\n            <select materialize=\"material_select\"  formControlName=\"hasRelativeQuestion\">\r\n              <option value=\"\" disabled selected>Is this answer related to another Question?</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n               <option [value]=\"false\">No</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n         <div class=\"input-field col s12\">\r\n            <select materialize=\"material_select\"  formControlName=\"eligible\">\r\n              <option value=\"\" disabled selected>Eligibility?</option>\r\n              <option  [value]=\"true\">Eligible</option>\r\n               <option [value]=\"false\">Not Eligible</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n     <div class=\"row\" *ngIf=\"createAnswerForm.value.hasRelativeQuestion == 'true'\">\r\n         <div class=\"input-field col s12\">\r\n            <select materialize=\"material_select\" [materializeSelectOptions]=\"assessments\" formControlName=\"nextQuestionNumber\">\r\n                <option value=\"\" disabled selected>Please select the related question</option>\r\n                <option *ngFor=\"let option of assessments\" [value]=\"option._id\">{{option.question}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n    <div class=\"row\">\r\n         <div class=\"input-field col s12\">\r\n            <select materialize=\"material_select\"  formControlName=\"hasWarning\">\r\n              <option value=\"\" disabled selected>Add Warning?</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n              <option [value]=\"false\">No</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    \r\n\r\n    <div class=\"row\" *ngIf=\"createAnswerForm.value.hasWarning == 'true'\">\r\n        <div class=\"input-field col s12\">\r\n            <input id=\"warningMessage\" type=\"text\" formControlName=\"warningMessage\" class=\"validate\">\r\n            <label for=\"warningMessage\">Please enter warning message</label>\r\n        </div>\r\n    </div>\r\n   <div class=\"row\">\r\n         <div class=\"input-field col s12\">\r\n            <select materialize=\"material_select\"  formControlName=\"isEditedAnswer\">\r\n              <option value=\"\" disabled selected>Is this an editable answer?</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n              <option [value]=\"false\">No</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"createAnswerForm.value.isEditedAnswer == 'true'\">\r\n        <div class=\"input-field col s12\">\r\n            <input id=\"editedAnswerLabel\" type=\"text\" formControlName=\"editedAnswerLabel\" class=\"validate\">\r\n            <label for=\"editedAnswerLabel\">Enter answer label</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <button type='submit'  [disabled]='!createAnswerForm.valid && !submited' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Submit</button>\r\n    </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contraceptive/assessment/assessment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__ = __webpack_require__("../../../../../src/app/contraceptive.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssessmentComponent = (function () {
    function AssessmentComponent(_contraceptiveService, fb, route, router) {
        this._contraceptiveService = _contraceptiveService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submit = false;
        this.assessments = [];
        this.assessmentAnswers = [];
        this.contraceptive = {};
        this.showForm = false;
        this.createForm();
    }
    AssessmentComponent.prototype.createForm = function () {
        this.createAnswerForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            eligible: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            nextQuestionNumber: [''],
            hasRelativeQuestion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            hasWarning: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            warningMessage: [''],
            isEditedAnswer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            editedAnswer: [''],
            editedAnswerLabel: ['']
        });
    };
    AssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['assessmentId'];
            _this.createAnswerForm.reset();
            _this.getAssessments();
            _this.getAssessmentAnswers(_this.id);
        });
    };
    AssessmentComponent.prototype.toggleBUtton = function (event) {
        var content = this.showForm = !this.showForm;
        event.textContent = content ? "remove" : "add";
    };
    AssessmentComponent.prototype.getAssessments = function () {
        var _this = this;
        this.loading = true;
        this._contraceptiveService.getAssessments()
            .subscribe(function (res) {
            if (res.success) {
                _this.loading = false;
                _this.assessments = res.assesments;
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    AssessmentComponent.prototype.getAssessmentAnswers = function (id) {
        var _this = this;
        this.loading = true;
        this._contraceptiveService.getAssementAnswer(id)
            .subscribe(function (res) {
            if (res.success) {
                _this.loading = false;
                _this.assessmentAnswers = res.assesments._answers;
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    AssessmentComponent.prototype.deleteAnswer = function (id, i) {
        var deleted = confirm("Are you sure?");
        if (deleted) {
            this.assessmentAnswers.splice(i, 0);
            this._contraceptiveService.deleteAnswer(id)
                .subscribe(function (res) {
                if (res.success) {
                }
            }, function (err) {
                // caught error
            });
        }
    };
    AssessmentComponent.prototype.createAnswer = function () {
        var _this = this;
        this.submit = true;
        this._contraceptiveService.createAnswer(this.createAnswerForm.value, this.id)
            .subscribe(function (res) {
            if (res.success) {
                _this.submit = false;
                _this.getAssessmentAnswers(_this.id);
                _this.createAnswerForm.reset();
            }
            else {
            }
        });
    };
    AssessmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contraceptive-assessment',
            template: __webpack_require__("../../../../../src/app/contraceptive/assessment/assessment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contraceptive/contraceptive.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__["a" /* ContraceptiveService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__["a" /* ContraceptiveService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], AssessmentComponent);
    return AssessmentComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/assessment.component.js.map

/***/ }),

/***/ "../../../../../src/app/contraceptive/contraceptive-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contraceptive-details\" *ngIf=\"loading\">\r\n    <div class=\"progress\">\r\n      <div class=\"indeterminate\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!loading\">\r\n    <h5>{{contraceptive?.name}}</h5>\r\n    <p>{{contraceptive?.description}}</p>\r\n\r\n    <ul class=\"collection with-header\">\r\n        <a *ngFor=\"let assessment of assessments; let i = index\" (click)=\"openAssessment(assessment._id)\"  class=\"collection-item\">{{assessment.question}}<a (click)=\"deleteAssessment(assessment._id, i)\" class=\"secondary-content\"><i class=\"material-icons\">delete</i></a></a>\r\n    </ul>\r\n\r\n    <a class=\"btn-floating btn-large waves-effect waves-light teal\" (click)=\"toggleBUtton($event.target)\"><i class=\"material-icons\">add</i></a>\r\n\r\n    <div class=\"card z-depth-2\" *ngIf=\"showForm\">\r\n        <form [formGroup]=\"createAssessmentForm\"  class=\"col s12\" (ngSubmit)=\"createAssessment()\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"question\" type=\"text\" formControlName=\"question\" class=\"validate\">\r\n                    <label for=\"name\">Question</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <button type='submit'  [disabled]='!createAssessmentForm.valid && !submited' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Submit</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contraceptive/contraceptive-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContraceptiveDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__ = __webpack_require__("../../../../../src/app/contraceptive.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContraceptiveDetailsComponent = (function () {
    function ContraceptiveDetailsComponent(_contraceptiveService, fb, route, router) {
        this._contraceptiveService = _contraceptiveService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submit = false;
        this.contraceptive = {};
        this.assessments = [];
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showForm = false;
        this.createForm();
    }
    ContraceptiveDetailsComponent.prototype.createForm = function () {
        this.createAssessmentForm = this.fb.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            contraceptive: ['']
        });
    };
    ContraceptiveDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createAssessmentForm.reset();
        this.sub = this.route.params.subscribe(function (params) {
            _this.showForm = false;
            _this.id = params['id'];
            _this.getContraceptive(_this.id);
            _this.createAssessmentForm.patchValue({ contraceptive: _this.id });
        });
    };
    ContraceptiveDetailsComponent.prototype.openAssessment = function (id) {
        this.router.navigate(['/dashboard/contraceptives', { outlets: { 'assessment': [id] } }]);
    };
    ContraceptiveDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ContraceptiveDetailsComponent.prototype.getContraceptive = function (id) {
        var _this = this;
        this.loading = true;
        this._contraceptiveService.getDetails(id)
            .subscribe(function (res) {
            if (res.success) {
                _this.loading = false;
                _this.contraceptive = res.contraceptive;
                _this.assessments = res.assesments;
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    ContraceptiveDetailsComponent.prototype.toggleBUtton = function (event) {
        var content = this.showForm = !this.showForm;
        event.textContent = content ? "remove" : "add";
    };
    ContraceptiveDetailsComponent.prototype.createAssessment = function () {
        var _this = this;
        this.submit = true;
        this._contraceptiveService.saveAssessment(this.createAssessmentForm.value)
            .subscribe(function (res) {
            if (res.success) {
                _this.getContraceptive(_this.id);
                _this.submit = false;
                _this.createAssessmentForm.reset();
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    ContraceptiveDetailsComponent.prototype.deleteAssessment = function (id, index) {
        var _this = this;
        var remove = confirm('Are you sure?');
        if (remove) {
            this.assessments.splice(index, 0);
            this._contraceptiveService.deleteAssessment(id)
                .subscribe(function (res) {
                if (res.success) {
                    _this.getContraceptive(_this.id);
                }
                else {
                }
            });
        }
    };
    ContraceptiveDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contraceptive-details',
            template: __webpack_require__("../../../../../src/app/contraceptive/contraceptive-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contraceptive/contraceptive.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__["a" /* ContraceptiveService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__["a" /* ContraceptiveService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ContraceptiveDetailsComponent);
    return ContraceptiveDetailsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/contraceptive-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/contraceptive/contraceptive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".total-height {\r\n  height: 100vh;\r\n}\r\n\r\ndiv#test1, div#test2 {\r\n  max-height: 90vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\na.start-convo {\r\n  font-size: 0.8em;\r\n  margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contraceptive/contraceptive.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"\">\r\n  <div class=\"row\">\r\n    <div class=\"col m4 z-depth-3 total-height\">\r\n      <ul class=\"tabs z-depth-1\" materialize=\"tabs\">\r\n        <li class=\"tab col s6\"><a class=\"active\" href=\"#test1\">Contraceptives</a></li>\r\n        <li class=\"tab col s6\" (click)=\"getAssessmentResponses()\"><a  href=\"#test2\">Responses</a></li>\r\n      </ul>\r\n\r\n      <div id=\"test1\" class=\"col s12\">\r\n        <div class=\"progress\" *ngIf=\"loading\">\r\n          <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <table class=\"bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Description</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let contraceptive of contraceptives; let i = index\">\r\n            <td><a [routerLink]=\"['/dashboard/contraceptives', {outlets:{'details':[contraceptive?._id]}}]\">{{contraceptive?.name}}</a></td>\r\n            <td>{{contraceptive?.description}}</td>\r\n            <td><a (click)=\"deleteContracpetive(contraceptive._id, i)\" class=\"\">delete</a></td>\r\n            <td><a class=\"modal-trigger\" (click)=\"openEditModal(contraceptive)\">edit</a></td>\r\n          </tr>\r\n        </tbody>\r\n        </table>\r\n        <a class=\"btn-floating btn-large waves-effect waves-light teal modal-trigger\" (click)=\"openModal()\"><i class=\"material-icons\">add</i></a>\r\n      </div>\r\n      <div id=\"test2\" class=\"col s12\">\r\n        <div class=\"progress\" *ngIf=\"loading\">\r\n          <div class=\"indeterminate\"></div>\r\n        </div>\r\n\r\n        <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\r\n          <li *ngFor=\"let response of responses\">\r\n            <a (click)=\"startConvo()\" class=\"waves-effect waves-light  light-blue darken-3 btn start-convo\">Start Conversation</a>\r\n\r\n            <div class=\"collapsible-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <i class=\"material-icons\">filter_drama</i>\r\n                  {{response?.user?.firstName + \" \" + response?.user?.lastName }} took {{response?.contraceptive?.name }} assessment on {{response.createdAt | date}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"collapsible-body\">\r\n              <div class=\"card-panel z-depth-1\" *ngIf=\"response.note\">{{response?.note}} </div>\r\n              <table class=\"bordered\">\r\n                <thead>\r\n                  <tr>\r\n                      <th>Question</th>\r\n                      <th>Accepted Answer</th>\r\n                  </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                  <tr *ngFor=\"let assesment of response.assesments\">\r\n                    <td>{{assesment.question?.question}}</td>\r\n                    <td>{{assesment?.acceptedAnswer}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col m4 z-depth-2 total-height\">\r\n      <router-outlet name=\"details\"></router-outlet>\r\n    </div>\r\n    <div class=\"col m4 z-depth-2 total-height\">\r\n     <router-outlet name=\"assessment\"></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Create Modal Structure -->\r\n<div id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\r\n  <div class=\"modal-content\">\r\n    <h4>Add Contraceptive</h4>\r\n    <div class=\"progress\" *ngIf=\"submited\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <form [formGroup]=\"createContraceptiveForm\" class=\"col s12\" (ngSubmit)=\"createContraceptive()\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"name\" type=\"text\" formControlName=\"name\" class=\"validate\">\r\n                    <label for=\"name\">Name</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <textarea name=\"description\" id=\"description\" formControlName=\"description\"  ></textarea>\r\n                    <label for=\"description\">Description</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <button type='submit'  [disabled]='!createContraceptiveForm.valid && !submited' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Submit</button>\r\n            </div>\r\n        </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close</a>\r\n  </div>\r\n</div>\r\n\r\n<!-- Edite Modal Structure -->\r\n<div id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\r\n  <div class=\"modal-content\">\r\n    <h4>Edit Contraceptive</h4>\r\n    <div class=\"progress\" *ngIf=\"submited\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <form [formGroup]=\"updateContraceptiveForm\" class=\"col s12\" (ngSubmit)=\"updateContraceptive(editParams._id)\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"name\" type=\"text\" [(ngModel)]=\"editParams.name\" formControlName=\"name\" class=\"validate\">\r\n                    <label for=\"name\">Name</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <textarea name=\"description\" [(ngModel)]=\"editParams.description\" id=\"description\" formControlName=\"description\"  ></textarea>\r\n                    <label for=\"description\">Description</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"input-field col s6\">\r\n                <input id=\"name\" type=\"number\" [(ngModel)]=\"editParams.minimumShippingQuantity\" formControlName=\"minimumShippingQuantity\" class=\"validate\">\r\n                <label for=\"name\">Minimum Shipping Quantity</label>\r\n              </div>\r\n              <div class=\"input-field col s6\">\r\n                <input id=\"name\" type=\"number\" [(ngModel)]=\"editParams.maximumShippingQuantity\" formControlName=\"maximumShippingQuantity\" class=\"validate\">\r\n                <label for=\"name\">Maximum Shipping Quantity</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"input-field col s3\">\r\n                <input id=\"name\" type=\"number\" [(ngModel)]=\"editParams.price\" formControlName=\"price\" class=\"validate\">\r\n                <label for=\"name\">Price</label>\r\n              </div>\r\n              <div class=\"col s3\"></div>\r\n              <div class=\"input-field col s6\">\r\n                <select materialize=\"material_select\"  formControlName=\"appointment\">\r\n                  <option value=\"\" disabled selected>Appointment</option>\r\n                  <option  [value]=\"true\">Eligible</option>\r\n                  <option [value]=\"false\">Not Eligible</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <button type='submit'  [disabled]='!updateContraceptiveForm.valid && !submited' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Submit</button>\r\n            </div>\r\n        </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close</a>\r\n  </div>\r\n</div>\r\n "

/***/ }),

/***/ "../../../../../src/app/contraceptive/contraceptive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContraceptiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__ = __webpack_require__("../../../../../src/app/contraceptive.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContraceptiveComponent = (function () {
    function ContraceptiveComponent(_contraceptiveService, fb) {
        this._contraceptiveService = _contraceptiveService;
        this.fb = fb;
        this.loading = false;
        this.submit = false;
        this.start_convo = false;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editParams = {};
        this.createForm();
        this.updateForm();
    }
    ContraceptiveComponent.prototype.createForm = function () {
        this.createContraceptiveForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            // add shipping methods
            minimumShippingQuantity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            maximumShippingQuantity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            appointment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    ContraceptiveComponent.prototype.startConvo = function () {
        console.log('convo just started');
        this.start_convo = true;
    };
    ContraceptiveComponent.prototype.updateForm = function () {
        this.updateContraceptiveForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            // add shipping methods
            minimumShippingQuantity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            maximumShippingQuantity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            appointment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    ContraceptiveComponent.prototype.ngOnInit = function () {
        this.getContraceptives();
    };
    ContraceptiveComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    ContraceptiveComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    ContraceptiveComponent.prototype.openEditModal = function (data) {
        this.editParams = data;
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    ContraceptiveComponent.prototype.closeEditModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    ContraceptiveComponent.prototype.getContraceptives = function () {
        var _this = this;
        this.loading = true;
        this._contraceptiveService.get()
            .subscribe(function (res) {
            if (res.success) {
                _this.loading = false;
                _this.contraceptives = res.contraceptives;
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    ContraceptiveComponent.prototype.createContraceptive = function () {
        var _this = this;
        this.submit = true;
        this._contraceptiveService.save(this.createContraceptiveForm.value)
            .subscribe(function (res) {
            if (res.success) {
                _this.submit = false;
                _this.getContraceptives();
                _this.createContraceptiveForm.reset();
                _this.closeModal();
            }
            else {
            }
        });
    };
    ContraceptiveComponent.prototype.updateContraceptive = function (id) {
        var _this = this;
        this.submit = true;
        this._contraceptiveService.update(this.updateContraceptiveForm.value, id)
            .subscribe(function (res) {
            if (res.success) {
                _this.submit = false;
                _this.getContraceptives();
                _this.updateContraceptiveForm.reset();
                _this.closeEditModal();
            }
            else {
            }
        });
    };
    ContraceptiveComponent.prototype.getAssessmentResponses = function () {
        var _this = this;
        this.loading = true;
        this._contraceptiveService.getAssementResponses()
            .subscribe(function (res) {
            if (res.success) {
                _this.loading = false;
                _this.responses = res.responses;
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    ContraceptiveComponent.prototype.deleteContracpetive = function (id, index) {
        var _this = this;
        var deleteContraceptive = confirm("Are you sure?");
        if (deleteContraceptive) {
            this.contraceptives.splice(index, 1);
            this._contraceptiveService.deleteContraceptive(id)
                .subscribe(function (res) {
                if (res.success) {
                    _this.getContraceptives();
                }
                else {
                }
            }, function (err) {
                // caught errors
            });
        }
    };
    ContraceptiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contraceptive',
            template: __webpack_require__("../../../../../src/app/contraceptive/contraceptive.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contraceptive/contraceptive.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__["a" /* ContraceptiveService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contraceptive_service__["a" /* ContraceptiveService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === 'function' && _b) || Object])
    ], ContraceptiveComponent);
    return ContraceptiveComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/contraceptive.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = " <nav>\r\n    <div class=\"nav-wrapper\">\r\n      <a href=\"#\" class=\"brand-logo\">Whisper</a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <!-- <li><a href=\"sass.html\">Sass</a></li>\r\n        <li><a href=\"badges.html\">Components</a></li>\r\n        <li><a href=\"collapsible.html\">JavaScript</a></li> -->\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/menu.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col s4\">\r\n          <!-- Promo Content 1 goes here -->\r\n          <div class=\"card pink darken-1 pointer\"  routerLink=\"/dashboard/contraceptives\">\r\n              <div class=\"card-content white-text\">\r\n                <span class=\"card-title\">Contraceptive</span>\r\n                <p>Create, update, delete, and control every part of the contraceptive in the application \r\n                  including the responses from users\r\n                </p>\r\n              </div>\r\n              <div class=\"card-action\">\r\n                <a href=\"#\">Add a contraceptive</a>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col s4\">\r\n          <!-- Promo Content 2 goes here -->\r\n          <div class=\"card blue-grey darken-1 pointer\" routerLink=\"/dashboard/users\">\r\n              <div class=\"card-content white-text\">\r\n                <span class=\"card-title\">Manage Users</span>\r\n                <p>Manage users includes delete, soft delete, add as administrator, update user info, get the total number of users. etc.</p>\r\n              </div>\r\n              <div class=\"card-action\">\r\n                <a href=\"#\">Add a user</a>\r\n              </div>\r\n            </div>\r\n        </div>\r\n         <div class=\"col s4\">\r\n          <!-- Promo Content 3 goes here -->\r\n          <div class=\"card blue darken-1 pointer\">\r\n              <div class=\"card-content white-text\">\r\n                <span class=\"card-title\">Pharmacies</span>\r\n                <p>Manage Pharmacy; verification, delete, add and remove a user, send Pharmacy a mail, add contraceptive items to pharmacies</p>\r\n              </div>\r\n              <div class=\"card-action\">\r\n                <a href=\"#\">Manage Pharmacies</a>\r\n              </div>\r\n            </div>\r\n        </div> \r\n\r\n        <div class=\"col s4\">\r\n          <!-- Promo Content 3 goes here -->\r\n         <!-- <div class=\"card blue-grey darken-1 pointer\">\r\n              <div class=\"card-content white-text\">\r\n                <span class=\"card-title\">Chat</span>\r\n                <p>Control every activites on chat client</p>\r\n              </div>\r\n              <div class=\"card-action\">\r\n                <a href=\"#\">Create a room</a>\r\n              </div>\r\n            </div>\r\n        </div>  -->\r\n\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n}\r\n\r\n.flex-container {\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n\r\n\r\n.flex-item {\r\n    padding: 5px;\r\n    margin-top: 10%;\r\n    line-height: 20px;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 2em;\r\n    text-align: center;\r\n    width: 28%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <div class=\"z-depth-1 grey lighten-4 row flex-item\">\r\n        <h4 class=\"blue-text text-darken-2\">Whisper admin login</h4>\r\n        <div class=\"progress\" *ngIf=\"submited\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <form [formGroup]=\"loginForm\" class=\"col s12\" (ngSubmit)=\"loginUser()\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"email\" type=\"email\" formControlName=\"email\" class=\"validate\">\r\n                    <label for=\"email\">Email</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"password\" type=\"password\" formControlName=\"password\" class=\"validate\">\r\n                    <label for=\"password\">Password</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <button type='submit'  [disabled]='!loginForm.valid && !submited' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(fb, router, _authService) {
        this.fb = fb;
        this.router = router;
        this._authService = _authService;
        this.submited = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.submited = true;
        this._authService.login(this.loginForm.value)
            .subscribe(function (res) {
            if (res.success) {
                _this.submited = false;
                _this._authService.saveToken('token', res.token);
                _this.router.navigate(['dashboard']);
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pharmacy/pharmacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pharmacy/pharmacy.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card-panel\"> \r\n  <h4>Register a new user</h4>\r\n\r\n  <div class=\"row\">\r\n    <form class=\"col s12\" [formGroup]=\"signupForm\" (ngSubmit)=\"createUser()\" novalidate>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter User Name\" id=\"first_name\" formControlName=\"userName\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name\">User Name</label>\r\n        </div>\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter First Name\" id=\"first_name\" formControlName=\"firstName\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name\">First Name</label>\r\n        </div>\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter Last Name\" id=\"last_name\" formControlName=\"lastName\" type=\"text\" class=\"validate\">\r\n          <label for=\"last_name\">Last Name</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s6\">\r\n          <input placeholder=\"Enter Email\" id=\"first_name\" formControlName=\"email\" type=\"email\" class=\"validate\">\r\n          <label for=\"first_name\">Email</label>\r\n        </div>\r\n        <div class=\"input-field col s6\">\r\n          <input placeholder=\"Enter Password\" id=\"last_name\" formControlName=\"password\" type=\"password\" class=\"validate\">\r\n          <label for=\"last_name\">Password</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n       <div class=\"input-field col s6\">\r\n            <select materialize=\"material_select\"  formControlName=\"admin\">\r\n              <option value=\"\" disabled selected>Admin</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n               <option [value]=\"false\">No</option>\r\n            </select>\r\n            <label for=\"first_name\">Admin</label>\r\n        </div>\r\n       <div class=\"input-field col s6\">\r\n            <select materialize=\"material_select\"  formControlName=\"verified\">\r\n              <option value=\"\" disabled selected>verified</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n               <option [value]=\"false\">No</option>\r\n            </select>\r\n            <label for=\"first_name\">verify</label>\r\n        </div>\r\n      </div>\r\n       <fieldset formGroupName=\"contact\">\r\n        <legend>Contact</legend>\r\n          <div class=\"row\" >\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter Alternative email\" id=\"first_name\" formControlName=\"email\" type=\"email\" class=\"validate\">\r\n              <label for=\"first_name\">Alternative email</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter Alternative Telephone\" id=\"first_name\" formControlName=\"tel\" type=\"text\" class=\"validate\">\r\n              <label for=\"first_name\">Telephone Number</label>\r\n            </div>\r\n          </div>\r\n      </fieldset>\r\n\r\n       <fieldset formGroupName=\"location\">\r\n        <legend>Location</legend>\r\n          <div class=\"row\">\r\n            \r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter Address\" id=\"first_name\" type=\"text\"\r\n                 [options]='options' \r\n                (setAddress) = \"getAddress($event)\"\r\n                (street_number) = 'street_number=$event'\r\n                (street)= 'street=$event'\r\n                (city)= 'city=$event'\r\n                (state)='state=$event'\r\n                (district)='district=$event'\r\n                (country)='country=$event'\r\n                (postal_code)='postal_code=$event'\r\n                (lat)='lat=$event' \r\n                (lng)='lng=$event' \r\n                (adr_address)='adr_address=$event' \r\n                (name)='name=$event' \r\n                (place_id)='place_id=$event' \r\n                (types)='types=$event' \r\n                (url)='url=$event'  \r\n                (utc_offset)='utc_offset=$event' \r\n                (vicinity)='vicinity=$event' \r\n                (photos)='photos=$event' \r\n                (airport)='airport=$event' \r\n                (CountryCodes)='CountryCodes=$event'\r\n                  id=\"autocomplete\"\r\n                ng2-google-place-autocomplete\r\n              class=\"validate\" formControlName=\"address\">\r\n              <label for=\"first_name\">Address</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n                <input id=\"last_name\" type=\"text\" formControlName=\"city\" class=\"validate\">\r\n                <label for=\"last_name\">City</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input  id=\"first_name\" type=\"text\" formControlName=\"lng\" class=\"validate\">\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input id=\"first_name\" type=\"text\" formControlName=\"lat\" class=\"validate\">\r\n            </div>\r\n          </div>\r\n      </fieldset>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s1\">\r\n          <a (click)=\"resetForm()\" class=\"waves-effect waves-light red btn-large btn\"><i class=\"material-icons right\">cancel</i>Reset</a>\r\n        </div>\r\n \r\n   \r\n        <div class=\"input-field col s2\">\r\n          <button [disabled]='!signupForm.valid && !submited' (click)=\"changeFormStatus($event)\" class=\"waves-effect waves-light btn-large btn\"><i class=\"material-icons right\">send</i>Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/pharmacy/pharmacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PharmacyComponent = (function () {
    function PharmacyComponent() {
    }
    PharmacyComponent.prototype.ngOnInit = function () {
    };
    PharmacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pharmacy',
            template: __webpack_require__("../../../../../src/app/pharmacy/pharmacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pharmacy/pharmacy.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], PharmacyComponent);
    return PharmacyComponent;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/pharmacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/route/route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_menu_component__ = __webpack_require__("../../../../../src/app/dashboard/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contraceptive_contraceptive_component__ = __webpack_require__("../../../../../src/app/contraceptive/contraceptive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contraceptive_contraceptive_details_component__ = __webpack_require__("../../../../../src/app/contraceptive/contraceptive-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contraceptive_assessment_assessment_component__ = __webpack_require__("../../../../../src/app/contraceptive/assessment/assessment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_users_users_component__ = __webpack_require__("../../../../../src/app/user/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_new_user_new_component__ = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_menu_component__["a" /* MenuComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__user_users_users_component__["a" /* UsersComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_13__user_user_new_user_new_component__["a" /* UserNewComponent */] },
                    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_11__user_user_details_user_details_component__["a" /* UserDetailsComponent */] },
                    { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_14__user_user_edit_user_edit_component__["a" /* UserEditComponent */] }
                ]
            },
            { path: 'contraceptives', component: __WEBPACK_IMPORTED_MODULE_7__contraceptive_contraceptive_component__["a" /* ContraceptiveComponent */],
                children: [
                    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__contraceptive_contraceptive_details_component__["a" /* ContraceptiveDetailsComponent */], outlet: 'details' },
                    { path: ':assessmentId', component: __WEBPACK_IMPORTED_MODULE_9__contraceptive_assessment_assessment_component__["a" /* AssessmentComponent */], outlet: 'assessment' },
                ]
            }
        ]
    },
];
var RouteModule = (function () {
    function RouteModule() {
    }
    RouteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], RouteModule);
    return RouteModule;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/route.module.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n    height: 100%;\r\n}\r\n\r\n.flex-container {\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n\r\n\r\n.flex-item {\r\n    padding: 5px;\r\n    margin-top: 10%;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    width: 28%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <div class=\"z-depth-1 grey lighten-4 row flex-item\">\r\n        <h4 class=\"blue-text text-darken-2\">Whisper admin login</h4>\r\n        <div class=\"progress\" *ngIf=\"submited\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <form   [formGroup]=\"signupForm\" (ngSubmit)=\"createUser()\" class=\"col s12\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"firstname\" formControlName=\"firstName\" autofocus type=\"text\" class=\"validate\">\r\n                    <label for=\"firstName\">First Name</label>\r\n                </div>\r\n            </div>\r\n              <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"lastName\" type=\"text\" formControlName=\"lastName\" class=\"validate\">\r\n                    <label for=\"lastName\">Last Name</label>\r\n                </div>\r\n            </div>\r\n              <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"userName\" type=\"text\" formControlName=\"userName\" class=\"validate\">\r\n                    <label for=\"userName\">User Name</label>\r\n                </div>\r\n            </div>\r\n              <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"email\" type=\"email\" formControlName=\"email\" autocomplete=\"false\"  class=\"validate\">\r\n                    <label for=\"email\">Email</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"password\" formControlName=\"password\" type=\"password\" class=\"validate\">\r\n                    <label for=\"password\">Password</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <button type='submit' [disabled]='!signupForm.valid && !submited'  class='col s12 btn btn-large waves-effect indigo'>Register</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(fb, router, _userService, _authService) {
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
        this.submited = false;
        this.createForm();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            contact: this.fb.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                tel: ''
            }),
            location: this.fb.group({
                city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                lng: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                lag: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
            })
        });
    };
    SignupComponent.prototype.createUser = function () {
        var _this = this;
        this.submited = true;
        this._userService.save(this.signupForm.value)
            .subscribe(function (res) {
            if (res.success) {
                _this.submited = false;
                _this._authService.saveToken('token', res.token);
                _this.router.navigate(['dashboard']);
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthenticationProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserService = (function () {
    function UserService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.host = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.save = function (accountInfo) {
        return this.http.post(this.host + "/register", accountInfo)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    UserService.prototype.update = function (accountInfo, id) {
        return this.http.put(this.host + "/user/" + id, accountInfo)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.host + "/users")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.host + "/user/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'server error'); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"preloader-wrapper big active\" *ngIf=\"loading\">\r\n    <div class=\"spinner-layer spinner-blue-only\">\r\n      <div class=\"circle-clipper left\">\r\n        <div class=\"circle\"></div>\r\n      </div><div class=\"gap-patch\">\r\n        <div class=\"circle\"></div>\r\n      </div><div class=\"circle-clipper right\">\r\n        <div class=\"circle\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"card-panel\">\r\n    {{user.userName}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsComponent = (function () {
    function UserDetailsComponent(router, _userService) {
        this.router = router;
        this._userService = _userService;
        this.loading = false;
        this.user = {};
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getUser(_this.id);
        });
    };
    UserDetailsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.loading = true;
        this._userService.getUser(id)
            .subscribe(function (res) {
            _this.loading = false;
            if (res.success) {
                _this.user = res.user;
            }
        }, function (err) {
            // caugh err 
        });
    };
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__("../../../../../src/app/user/user-details/user-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-details/user-details.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], UserDetailsComponent);
    return UserDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\r\n    border: 0px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel\"> \r\n  <h4>Edit user</h4>\r\n\r\n  <div class=\"row\">\r\n    <form class=\"col s12\" [formGroup]=\"signupForm\" (ngSubmit)=\"createUser()\" novalidate>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter User Name\" [value]=\"user?.userName\" id=\"first_name\" formControlName=\"userName\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name\">User Name</label>\r\n        </div>\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter First Name\" [value]=\"user?.firstName\" id=\"first_name\" formControlName=\"firstName\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name\">First Name</label>\r\n        </div>\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter Last Name\" id=\"last_name\" [value]=\"user?.lastName\" formControlName=\"lastName\" type=\"text\" class=\"validate\">\r\n          <label for=\"last_name\">Last Name</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\" [materializeSelectOptions]=\"['Male', 'Female']\"  formControlName=\"gender\">\r\n               <option *ngFor=\"let option of ['Male', 'Female']\" [value]=\"option\">{{option}}</option>\r\n            </select>\r\n            <label for=\"first_name\">Gender</label>\r\n        </div>\r\n\r\n        <div class=\"input-field col s4\">\r\n           <input id=\"birthdate\" \r\n                  [value]=\"user?.dateOfBirth\"\r\n                   formControlName=\"dateOfBirth\"\r\n                   materialize=\"pickadate\"\r\n                   [materializeActions]=\"birthDateActions\"\r\n                   [materializeParams]=\"[{format: 'mm/dd/yyyy'}]\"\r\n                   type=\"text\" (blur)=\"openDatePicker()\" />\r\n          <label for=\"last_name\">Date of Birth</label>\r\n        </div>\r\n\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter Password\" id=\"last_name\" [value]=\"user?.password\"  formControlName=\"password\" type=\"password\" class=\"validate\">\r\n          <label for=\"last_name\">Password</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        \r\n        <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\" [materializeSelectOptions]=\"['Member', 'Pharmacist', 'Doctor']\"  formControlName=\"accountType\">\r\n               <option *ngFor=\"let option of ['Member', 'Pharmacist', 'Doctor']\" [value]=\"option\">{{option}}</option>\r\n            </select>\r\n            <label for=\"first_name\">Account Type</label>\r\n        </div>\r\n          \r\n        \r\n       <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\"  formControlName=\"admin\">\r\n              <option value=\"\" disabled selected>Admin</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n               <option [value]=\"false\">No</option>\r\n            </select>\r\n            <label for=\"first_name\">Admin</label>\r\n        </div>\r\n       <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\"  formControlName=\"verified\">\r\n              <option value=\"\" disabled selected>verified</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n               <option [value]=\"false\">No</option>\r\n            </select>\r\n            <label for=\"first_name\">verify</label>\r\n        </div>\r\n      </div>\r\n       \r\n\r\n       <fieldset formGroupName=\"contact\">\r\n        <legend>Contact</legend>\r\n          <div class=\"row\" >\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter Email\" id=\"first_name\" [value]=\"user?.contact?.email\" formControlName=\"email\" type=\"email\" class=\"validate\">\r\n              <label for=\"first_name\">Email</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter  Telephone\" id=\"first_name\" [value]=\"user?.contact?.tel\" formControlName=\"tel\" type=\"text\" class=\"validate\">\r\n              <label for=\"first_name\">Telephone Number</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter Address\" [value]=\"user?.contact?.address\" id=\"first_name\" type=\"text\"\r\n                 [options]='options' \r\n                (setAddress) = \"getAddress($event)\"\r\n                (street_number) = 'street_number=$event'\r\n                (street)= 'street=$event'\r\n                (city)= 'city=$event'\r\n                (state)='state=$event'\r\n                (district)='district=$event'\r\n                (country)='country=$event'\r\n                (postal_code)='postal_code=$event'\r\n                (lat)='lat=$event' \r\n                (lng)='lng=$event' \r\n                (adr_address)='adr_address=$event' \r\n                (name)='name=$event' \r\n                (place_id)='place_id=$event' \r\n                (types)='types=$event' \r\n                (url)='url=$event'  \r\n                (utc_offset)='utc_offset=$event' \r\n                (vicinity)='vicinity=$event' \r\n                (photos)='photos=$event' \r\n                (airport)='airport=$event' \r\n                (CountryCodes)='CountryCodes=$event'\r\n                  id=\"autocomplete\"\r\n                ng2-google-place-autocomplete\r\n              class=\"validate\" formControlName=\"address\">\r\n              <label for=\"first_name\">Address</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n                <input id=\"last_name\" type=\"text\" [value]=\"user?.contact?.city\" formControlName=\"city\" class=\"validate\">\r\n                <label for=\"last_name\">City</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input  id=\"first_name\" type=\"text\" [value]=\"user?.contact?.lng\" formControlName=\"lng\" class=\"validate\">\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input id=\"first_name\" type=\"text\" [value]=\"user?.contact?.lat\" formControlName=\"lat\" class=\"validate\">\r\n            </div>\r\n          </div>\r\n      </fieldset>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s1\">\r\n          <a (click)=\"resetForm()\" class=\"waves-effect waves-light red btn-large btn\"><i class=\"material-icons right\">cancel</i>Reset</a>\r\n        </div>\r\n \r\n   \r\n        <div class=\"input-field col s2\">\r\n          <button [disabled]='!signupForm.valid && !submited' (click)=\"changeFormStatus($event)\" class=\"waves-effect waves-light btn-large btn\"><i class=\"material-icons right\">send</i>Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = (function () {
    function UserEditComponent(fb, route, router, _userService, _authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
        this.submited = false;
        this.user = {};
        this.loading = false;
        this.birthDateActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createForm();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getUser(_this.id);
        });
    };
    UserEditComponent.prototype.getUser = function (id) {
        var _this = this;
        this.loading = true;
        this._userService.getUser(id)
            .subscribe(function (res) {
            _this.loading = false;
            if (res.success) {
                _this.user = res.user;
            }
        }, function (err) {
            // caugh err 
        });
    };
    UserEditComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            accountType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            verified: 'true',
            admin: ['false', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            contact: this.fb.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                tel: '',
                city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                lng: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                lat: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
            })
        });
    };
    UserEditComponent.prototype.openDatePicker = function () {
        //actions are open or close
        this.birthDateActions.emit({ action: "pickadate", params: ["open"] });
    };
    UserEditComponent.prototype.getAddress = function (event) {
        this.signupForm.patchValue({ contact: { lng: event.geometry.location.lng(), lat: event.geometry.location.lat() } });
    };
    UserEditComponent.prototype.createUser = function () {
        var _this = this;
        this.submited = true;
        this._userService.save(this.signupForm.value)
            .subscribe(function (res) {
            if (res.success) {
                _this.submited = false;
                _this.route.navigate(['/dashboard/users', _this.id]);
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    UserEditComponent.prototype.changeFormStatus = function (event) {
        var content = this.submited;
        event.textContent = content ? "Submiting..." : "Submit";
    };
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === 'function' && _e) || Object])
    ], UserEditComponent);
    return UserEditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\r\n    border: 0px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel\"> \r\n  <h4>Register a new user</h4>\r\n\r\n  <div class=\"row\">\r\n    <form class=\"col s12\" [formGroup]=\"signupForm\" (ngSubmit)=\"createUser()\" novalidate>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter User Name\" id=\"first_name\" formControlName=\"userName\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name\">User Name</label>\r\n        </div>\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter First Name\" id=\"first_name\" formControlName=\"firstName\" type=\"text\" class=\"validate\">\r\n          <label for=\"first_name\">First Name</label>\r\n        </div>\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter Last Name\" id=\"last_name\" formControlName=\"lastName\" type=\"text\" class=\"validate\">\r\n          <label for=\"last_name\">Last Name</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\" [materializeSelectOptions]=\"['Male', 'Female']\"  formControlName=\"gender\">\r\n               <option *ngFor=\"let option of ['Male', 'Female']\" [value]=\"option\">{{option}}</option>\r\n            </select>\r\n            <label for=\"first_name\">Gender</label>\r\n        </div>\r\n\r\n        <div class=\"input-field col s4\">\r\n           <input id=\"birthdate\" \r\n                   formControlName=\"dateOfBirth\"\r\n                   materialize=\"pickadate\"\r\n                   [materializeActions]=\"birthDateActions\"\r\n                   [materializeParams]=\"[{format: 'mm/dd/yyyy'}]\"\r\n                   type=\"text\" (blur)=\"openDatePicker()\" />\r\n          <label for=\"last_name\">Date of Birth</label>\r\n        </div>\r\n\r\n        <div class=\"input-field col s4\">\r\n          <input placeholder=\"Enter Password\" id=\"last_name\" formControlName=\"password\" type=\"password\" class=\"validate\">\r\n          <label for=\"last_name\">Password</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        \r\n        <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\" [materializeSelectOptions]=\"['Member', 'Pharmacist', 'Doctor']\"  formControlName=\"accountType\">\r\n               <option *ngFor=\"let option of ['Member', 'Pharmacist', 'Doctor']\" [value]=\"option\">{{option}}</option>\r\n            </select>\r\n            <label for=\"first_name\">Account Type</label>\r\n        </div>\r\n          \r\n        \r\n       <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\"  formControlName=\"admin\">\r\n              <option value=\"\" disabled selected>Admin</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n               <option [value]=\"false\">No</option>\r\n            </select>\r\n            <label for=\"first_name\">Admin</label>\r\n        </div>\r\n       <div class=\"input-field col s4\">\r\n            <select materialize=\"material_select\"  formControlName=\"verified\">\r\n              <option value=\"\" disabled selected>verified</option>\r\n              <option  [value]=\"true\">Yes</option>\r\n               <option [value]=\"false\">No</option>\r\n            </select>\r\n            <label for=\"first_name\">verify</label>\r\n        </div>\r\n      </div>\r\n       \r\n\r\n       <fieldset formGroupName=\"contact\">\r\n        <legend>Location</legend>\r\n          <div class=\"row\" >\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter Email\" id=\"first_name\" formControlName=\"email\" type=\"email\" class=\"validate\">\r\n              <label for=\"first_name\">Email</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter  Telephone\" id=\"first_name\" formControlName=\"tel\" type=\"text\" class=\"validate\">\r\n              <label for=\"first_name\">Telephone Number</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input placeholder=\"Enter Address\" id=\"first_name\" type=\"text\"\r\n                 [options]='options' \r\n                (setAddress) = \"getAddress($event)\"\r\n                (street_number) = 'street_number=$event'\r\n                (street)= 'street=$event'\r\n                (city)= 'city=$event'\r\n                (state)='state=$event'\r\n                (district)='district=$event'\r\n                (country)='country=$event'\r\n                (postal_code)='postal_code=$event'\r\n                (lat)='lat=$event' \r\n                (lng)='lng=$event' \r\n                (adr_address)='adr_address=$event' \r\n                (name)='name=$event' \r\n                (place_id)='place_id=$event' \r\n                (types)='types=$event' \r\n                (url)='url=$event'  \r\n                (utc_offset)='utc_offset=$event' \r\n                (vicinity)='vicinity=$event' \r\n                (photos)='photos=$event' \r\n                (airport)='airport=$event' \r\n                (CountryCodes)='CountryCodes=$event'\r\n                  id=\"autocomplete\"\r\n                ng2-google-place-autocomplete\r\n              class=\"validate\" formControlName=\"address\">\r\n              <label for=\"first_name\">Address</label>\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n                <input id=\"last_name\" type=\"text\" formControlName=\"city\" class=\"validate\">\r\n                <label for=\"last_name\">City</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input  id=\"first_name\" type=\"text\" formControlName=\"lng\" class=\"validate\">\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n              <input id=\"first_name\" type=\"text\" formControlName=\"lat\" class=\"validate\">\r\n            </div>\r\n          </div>\r\n      </fieldset>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s1\">\r\n          <a (click)=\"resetForm()\" class=\"waves-effect waves-light red btn-large btn\"><i class=\"material-icons right\">cancel</i>Reset</a>\r\n        </div>\r\n \r\n   \r\n        <div class=\"input-field col s2\">\r\n          <button [disabled]='!signupForm.valid && !submited' (click)=\"changeFormStatus($event)\" class=\"waves-effect waves-light btn-large btn\"><i class=\"material-icons right\">send</i>Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserNewComponent = (function () {
    function UserNewComponent(fb, router, _userService, _authService) {
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
        this.submited = false;
        this.birthDateActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createForm();
    }
    UserNewComponent.prototype.ngOnInit = function () {
    };
    UserNewComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            accountType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            verified: 'true',
            admin: ['false', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            contact: this.fb.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                tel: '',
                city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                lng: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                lat: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
            })
        });
    };
    UserNewComponent.prototype.resetForm = function () {
        var confirmReset = confirm('Are you sure you want to rest form?');
        if (confirmReset) {
            this.signupForm.reset();
        }
    };
    UserNewComponent.prototype.openDatePicker = function () {
        //actions are open or close
        this.birthDateActions.emit({ action: "pickadate", params: ["open"] });
    };
    UserNewComponent.prototype.getAddress = function (event) {
        this.signupForm.patchValue({ contact: { lng: event.geometry.location.lng(), lat: event.geometry.location.lat(), address: event.formatted_address } });
    };
    UserNewComponent.prototype.createUser = function () {
        var _this = this;
        this.submited = true;
        this._userService.save(this.signupForm.value)
            .subscribe(function (res) {
            if (res.success) {
                _this.submited = false;
                _this.router.navigate(['/dashboard/users', res.user._id]);
            }
            else {
            }
        }, function (err) {
            // caught error
        });
    };
    UserNewComponent.prototype.changeFormStatus = function (event) {
        var content = this.submited;
        event.textContent = content ? "Submiting..." : "Submit";
    };
    UserNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object])
    ], UserNewComponent);
    return UserNewComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/user-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row  grey lighten-3\">\r\n  <div class=\"col s2\">\r\n     <ul id=\"slide-out\" class=\"side-nav fixed\">\r\n      <li><a href=\"#!\">First Sidebar Link</a></li>\r\n      <li><a href=\"#!\">Second Sidebar Link</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"col s10\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/users/users.component.html":
/***/ (function(module, exports) {

module.exports = " <ul id=\"tabs-swipe-demo\"  materialize=\"tabs\" class=\"tabs\">\r\n      <li class=\"tab col s3\"><a href=\"#test-swipe-1\" class=\"active\">All Users</a></li>\r\n      <li class=\"tab col s3\"><a href=\"#test-swipe-2\">Admin</a></li>\r\n      <li class=\"tab col s3\"><a href=\"#test-swipe-3\">Doctors</a></li>\r\n      <li class=\"tab col s3\"><a href=\"#test-swipe-3\">Pharmacies</a></li>\r\n    </ul>\r\n      \r\n      <div align=\"center\" *ngIf=\"loading\">\r\n        <div class=\"preloader-wrapper big active\">\r\n          <div class=\"spinner-layer spinner-blue-only\">\r\n            <div class=\"circle-clipper left\">\r\n              <div class=\"circle\"></div>\r\n            </div><div class=\"gap-patch\">\r\n              <div class=\"circle\"></div>\r\n            </div><div class=\"circle-clipper right\">\r\n              <div class=\"circle\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    <div id=\"test-swipe-1\" class=\"col s12 card-panel\" [hidden]=\"loading\">\r\n          <table class=\"highlight\">\r\n          <thead>\r\n            <tr>\r\n                <th>Username</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Email</th>\r\n                <th>User Group</th>\r\n                <th>Deleted</th>\r\n                <th>ban</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let user of allUsers\">\r\n              <td><a [routerLink]=\"[user._id]\">{{user?.userName}}</a></td>\r\n              <td>{{user?.firstName}}</td>\r\n              <td>{{user?.lastName}}</td>\r\n              <td>{{user?.email}}</td>\r\n              <td>Member</td>\r\n              <td>\r\n                <div class=\"switch\">\r\n                  <label>\r\n                    <input type=\"checkbox\">\r\n                    <span class=\"lever\"></span>\r\n                  </label>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"switch\">\r\n                  <label>\r\n                    <input type=\"checkbox\">\r\n                    <span class=\"lever\"></span>\r\n                  </label>\r\n                </div></td>\r\n              <td>\r\n                <a class=\"btn blue\"><i class=\"tiny material-icons\">remove_red_eye</i></a>\r\n                <a class=\"btn blue accent-2\" [routerLink]=\"[user._id, 'edit']\"><i class=\"tiny material-icons\">edit</i></a>\r\n                <a class=\"btn red\"><i class=\"tiny material-icons\">delete</i></a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <a [routerLink]=\"['../new']\" class=\"btn-floating btn-large waves-effect waves-light blue\"><i class=\"material-icons\">add</i></a>\r\n    </div>\r\n    <div id=\"test-swipe-2\" class=\"col s12 red\">Test 2</div>\r\n    <div id=\"test-swipe-3\" class=\"col s12 green\">Test 3</div>  \r\n"

/***/ }),

/***/ "../../../../../src/app/user/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(_userService) {
        this._userService = _userService;
        this.loading = false;
        this.allUsers = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.loading = true;
        this._userService.getUsers()
            .subscribe(function (res) {
            if (res.success) {
                _this.loading = false;
                _this.allUsers = res.users;
            }
        }, function (err) {
            // caught error 
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/user/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/users/users.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/users.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'https://whisper-admin.herokuapp.com'
};
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Whisper-dev/whisper-admin/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map