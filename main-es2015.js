(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");









const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'demo',
        component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _exponential_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exponential.pipe */ "./src/app/exponential.pipe.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
        _exponential_pipe__WEBPACK_IMPORTED_MODULE_6__["ExponentialPipe"],
        _highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightDirective"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["DemoComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                    _exponential_pipe__WEBPACK_IMPORTED_MODULE_6__["ExponentialPipe"],
                    _highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightDirective"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["DemoComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BannerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BannerComponent {
    constructor() {
        this.images = [
            'assets/images/banner-1.jpg',
            'assets/images/banner-2.jpg',
            'assets/images/banner-3.jpg',
        ];
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 6, vars: 1, consts: [[1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-scrollbar"], [1, "swiper-slide"], ["alt", "", 3, "src"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BannerComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 3, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _exponential_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exponential.pipe */ "./src/app/exponential.pipe.ts");





function DemoComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este es Jorgi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este es Itati");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este es Ginnio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este no es nadie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nicolas es el profesor del curso de Angular en Platzi.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La lista se encuentra vacia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DemoComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_li_33_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteItem(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", name_r7, " ", i_r8, " ");
} }
class DemoComponent {
    constructor() {
        this.title = 'platzi-store';
        this.power = 1;
        this.items = ['Ginnio', 'Joselyn', 'Damian'];
    }
    addItem() {
        this.items.push('Nuevo item');
    }
    deleteItem(index) {
        this.items.splice(index, 1);
    }
    ngOnInit() {
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 34, vars: 15, consts: [["for", "txtTitle"], ["type", "text", "id", "txtTitle", 3, "ngModel", "ngModelChange"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngFor", "ngForOf"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Demo - Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usando ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_input_ngModelChange_6_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usando ngSwitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Si escribes Jorgi, Itati o Ginnio en el input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DemoComponent_p_13_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DemoComponent_p_14_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DemoComponent_p_15_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DemoComponent_p_16_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DemoComponent_div_17_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Usando Pipes y ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ingresar un valor en el input, pasa por un pipe(tuberia) que lo transforma en un exponencial.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_input_ngModelChange_23_listener($event) { return ctx.power = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "exponential");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "exponential");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lista utilizando ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_29_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DemoComponent_li_32_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DemoComponent_li_33_Template, 4, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Jorgi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Itati");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Ginnio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "Nicolas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.power);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 13, ctx.power)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_exponential_pipe__WEBPACK_IMPORTED_MODULE_3__["ExponentialPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demo',
                templateUrl: './demo.component.html',
                styleUrls: ['./demo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/exponential.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/exponential.pipe.ts ***!
  \*************************************/
/*! exports provided: ExponentialPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExponentialPipe", function() { return ExponentialPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ExponentialPipe {
    transform(value) {
        return Math.pow(value, 2);
    }
}
ExponentialPipe.ɵfac = function ExponentialPipe_Factory(t) { return new (t || ExponentialPipe)(); };
ExponentialPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "exponential", type: ExponentialPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExponentialPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'exponential'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/products", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpbm5pby9Bbmd1bGFyUHJveWVjdG8vcGxhdHppLXN0b3JlL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2ID4gYSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5uYXYgPiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOndoaXRlO1xufVxuIiwibmF2ID4gYSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5uYXYgPiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HighlightDirective {
    constructor(element) {
        element.nativeElement.style.backgroundColor = 'red';
    }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightDirective, selectors: [["", "appHighlight", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appHighlight]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");






class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 13, vars: 0, consts: [[1, "face"], [1, "band"], [1, "red"], [1, "white"], [1, "blue"], [1, "eyes"], [1, "dimples"], [1, "mouth"], [1, "btn"], ["routerLink", "/home"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oops! Algo sali\u00F3 mal!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Regresar a Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: #F2EEE8;\n  font-family: \"Open Sans\";\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: content-box;\n  transform: translate3d(0, 0, 0);\n}\n\n.face[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  border: 4px solid #383A41;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  margin: 0 auto;\n  margin-top: 100px;\n}\n\n@media screen and (max-width: 400px) {\n  .face[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    transform: scale(0.8);\n  }\n}\n\n.face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 27px;\n  border: 4px solid #383A41;\n  border-radius: 5px;\n  margin-left: -25px;\n  margin-top: 50px;\n}\n\n.face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #EB6D6D;\n}\n\n.face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #FFFFFF;\n}\n\n.face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #5E7FDC;\n}\n\n.face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  height: 27px;\n  width: 30px;\n  background-color: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  z-index: 999;\n}\n\n.face[_ngcontent-%COMP%]   .band[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  height: 27px;\n  width: 30px;\n  background-color: rgba(56, 58, 65, 0.3);\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  margin-top: -27px;\n}\n\n.face[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%] {\n  width: 128px;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n\n.face[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  border: 7px solid #383A41;\n  margin-right: 20px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  border-bottom: 0;\n}\n\n.face[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  border: 7px solid #383A41;\n  margin-left: 20px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  border-bottom: 0;\n}\n\n.face[_ngcontent-%COMP%]   .dimples[_ngcontent-%COMP%] {\n  width: 180px;\n  margin: 0 auto;\n  margin-top: 15px;\n}\n\n.face[_ngcontent-%COMP%]   .dimples[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 80px;\n  border-radius: 50%;\n  background-color: rgba(235, 109, 109, 0.4);\n}\n\n.face[_ngcontent-%COMP%]   .dimples[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-left: 80px;\n  border-radius: 50%;\n  background-color: rgba(235, 109, 109, 0.4);\n}\n\n.face[_ngcontent-%COMP%]   .mouth[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: #383A41;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #383A41;\n  text-align: center;\n  font-size: 2.5em;\n  padding-top: 20px;\n}\n\n@media screen and (max-width: 400px) {\n  h1[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 2em;\n  }\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  padding: 20px;\n  background-color: #5e7fdc;\n  color: white;\n  width: 320px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.2em;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 80px;\n  margin-bottom: 50px;\n  transition: all 0.2s linear;\n}\n\n@media screen and (max-width: 400px) {\n  .btn[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    margin-top: 60px;\n    margin-bottom: 50px;\n    width: 200px;\n  }\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(94, 127, 220, 0.8);\n  transition: all 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpbm5pby9Bbmd1bGFyUHJveWVjdG8vcGxhdHppLXN0b3JlL3NyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLHFCQUFBO0FDTko7O0FEUUE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQWZJO0VBZ0JKLHdCQUFBO0FDTEQ7O0FEUUE7RUFDQyx1QkFBQTtFQUNBLCtCQUFBO0FDTEQ7O0FEUUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkE1Qkk7RUE2QkosY0FBQTtFQUNBLGlCQUFBO0FDTEQ7O0FET0M7RUFURDtJQVVFLGdCQUFBO0lBQ0cscUJBQUE7RUNKSDtBQUNGOztBRE1DO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE1FO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBOUNHO0FDMENOOztBRE9FO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdERFO0FDaURMOztBRFFFO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBekRJO0FDbURQOztBRFNFO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1BIOztBRFVFO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQ1JIOztBRFlDO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRFlFO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDRyw2QkFBQTtFQUNILGdCQUFBO0FDVkg7O0FEYUU7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNHLDZCQUFBO0VBQ0gsZ0JBQUE7QUNYSDs7QURlQztFQUNDLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURlRTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDYkg7O0FEZ0JFO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNkSDs7QURrQkM7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBakpLO0VBa0pMLGNBQUE7RUFDQSxnQkFBQTtBQ2hCRjs7QURvQkE7RUFDQyxnQkFBQTtFQUNBLGNBekpNO0VBMEpOLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2pCRDs7QURtQkM7RUFQRDtJQVFFLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VDaEJBO0FBQ0Y7O0FEbUJBO0VBQ0Msd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNoQkQ7O0FEa0JDO0VBaEJEO0lBaUJFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0csWUFBQTtFQ2ZIO0FBQ0Y7O0FEaUJDO0VBQ0MseUNBQUE7RUFDQSwyQkFBQTtBQ2ZGIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRnYjogI0YyRUVFODtcbiR3aDogI0ZGRkZGRjtcbiRkYXJrOiAjMzgzQTQxO1xuJHJlZDogI0VCNkQ2RDtcbiRibHVlOiAjNUU3RkRDO1xuXG4kYnJlYWs6IDQwMHB4O1xuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaHRtbCwgYm9keSB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0d2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ2I7XG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbn1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLmZhY2Uge1xuXHR3aWR0aDogMzAwcHg7XG5cdGhlaWdodDogMzAwcHg7XG5cdGJvcmRlcjogNHB4IHNvbGlkICRkYXJrO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2g7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRtYXJnaW4tdG9wOiAxMDBweDtcblx0XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhaykge1xuXHRcdG1hcmdpbi10b3A6IDQwcHg7XG4gICAgXHR0cmFuc2Zvcm06IHNjYWxlKC44KTtcbiAgXHR9XG5cdFxuXHQuYmFuZCB7XG5cdFx0d2lkdGg6IDM1MHB4O1xuXHRcdGhlaWdodDogMjdweDtcblx0XHRib3JkZXI6IDRweCBzb2xpZCAkZGFyaztcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IC0yNXB4O1xuXHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XG5cdFx0LnJlZCB7XG5cdFx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xuXHRcdH1cblx0XHRcblx0XHQud2hpdGUge1xuXHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHdoO1xuXHRcdH1cblx0XHRcblx0XHQuYmx1ZSB7XG5cdFx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcblx0XHR9XG5cdFx0XG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdGhlaWdodDogMjdweDtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2gsMC4zKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcdFxuXHRcdFx0ei1pbmRleDogOTk5O1xuXHRcdH1cblx0XHRcblx0XHQmOmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRoZWlnaHQ6IDI3cHg7XG5cdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmssMC4zKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcdFxuXHRcdFx0ei1pbmRleDogOTk5O1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRtYXJnaW4tdG9wOiAtMjdweDtcblx0XHR9XG5cdH1cblx0XG5cdC5leWVzIHtcblx0XHR3aWR0aDogMTI4cHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHRcblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRoZWlnaHQ6IDE1cHg7XG5cdFx0XHRib3JkZXI6IDdweCBzb2xpZCAkZGFyaztcblx0XHRcdG1hcmdpbi1yaWdodDogMjBweDsgXG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMnB4O1xuICAgIFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjJweDtcblx0XHRcdGJvcmRlci1ib3R0b206IDA7XG5cdFx0fVxuXHRcdFxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0aGVpZ2h0OiAxNXB4O1xuXHRcdFx0Ym9yZGVyOiA3cHggc29saWQgJGRhcms7XG5cdFx0XHRtYXJnaW4tbGVmdDogMjBweDtcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XG4gICAgXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMnB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMDtcblx0XHR9XG5cdH1cblx0XG5cdC5kaW1wbGVzIHtcblx0XHR3aWR0aDogMTgwcHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHRcblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0d2lkdGg6IDEwcHg7XG5cdFx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDgwcHg7IFxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcmVkLDAuNCk7XG5cdFx0fVxuXHRcdFxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDgwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRyZWQsMC40KTtcblx0XHR9XG5cdH1cblx0XG5cdC5tb3V0aCB7XG5cdFx0d2lkdGg6IDQwcHg7XG5cdFx0aGVpZ2h0OiA1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG1hcmdpbi10b3A6IDI1cHg7XG5cdH1cbn1cblxuaDEge1xuXHRmb250LXdlaWdodDogODAwO1xuXHRjb2xvcjogJGRhcms7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAyLjVlbTtcblx0cGFkZGluZy10b3A6IDIwcHg7XG5cdFxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWspIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMjBweDtcblx0XHRmb250LXNpemU6IDJlbTtcbiAgXHR9XG59XG5cbi5idG4ge1xuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0cGFkZGluZzogMjBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYmx1ZSwxLjApO1xuXHRjb2xvcjogd2hpdGU7XG5cdHdpZHRoOiAzMjBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxLjJlbTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7IFxuXHRtYXJnaW4tdG9wOiA4MHB4O1xuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhaykge1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG1hcmdpbi10b3A6IDYwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBcdHdpZHRoOiAyMDBweDtcbiAgXHR9XG5cdFxuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlLDAuOCk7XG5cdFx0dHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cdH1cbn0iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5odG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkVFRTg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uZmFjZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzM4M0E0MTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmZhY2Uge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG59XG4uZmFjZSAuYmFuZCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjMzgzQTQxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5mYWNlIC5iYW5kIC5yZWQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCNkQ2RDtcbn1cbi5mYWNlIC5iYW5kIC53aGl0ZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLmZhY2UgLmJhbmQgLmJsdWUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFN0ZEQztcbn1cbi5mYWNlIC5iYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyN3B4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5mYWNlIC5iYW5kOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI3cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1OCwgNjUsIDAuMyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTI3cHg7XG59XG4uZmFjZSAuZXllcyB7XG4gIHdpZHRoOiAxMjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uZmFjZSAuZXllczpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogN3B4IHNvbGlkICMzODNBNDE7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4uZmFjZSAuZXllczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyOiA3cHggc29saWQgIzM4M0E0MTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMnB4O1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLmZhY2UgLmRpbXBsZXMge1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmZhY2UgLmRpbXBsZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDEwOSwgMTA5LCAwLjQpO1xufVxuLmZhY2UgLmRpbXBsZXM6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LCAxMDksIDEwOSwgMC40KTtcbn1cbi5mYWNlIC5tb3V0aCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzQTQxO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzM4M0E0MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuXG4uYnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTdmZGM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmJ0biB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDEyNywgMjIwLCAwLjgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class ProductComponent {
    constructor() {
        this.productClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.today = new Date();
        console.log('1. constructor');
    }
    // ngOnChanges(changes: SimpleChanges) {
    //   console.log('2. ngOnChanges');
    //   console.log(changes);
    // }
    ngOnInit() {
        console.log('3. ngOnInit');
    }
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }
    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }
    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, outputs: { productClicked: "productClicked" }, decls: 15, vars: 16, consts: [["appHighlight", ""], ["alt", "", 3, "src"], [3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_13_listener() { return ctx.addCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.product.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, ctx.today, "HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 12, ctx.product.description, 0, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n  margin: 2px;\n  border: 1px solid black;\n  border-radius: 5px;\n  display: block;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpbm5pby9Bbmd1bGFyUHJveWVjdG8vcGxhdHppLXN0b3JlL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBtYXJnaW46IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH0iLCI6aG9zdCB7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");





function ProductsComponent_app_product_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productClicked", function ProductsComponent_app_product_2_Template_app_product_productClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickProduct($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class ProductsComponent {
    constructor() {
        this.productClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.products = [
            {
                id: '1',
                image: 'assets/images/camiseta.png',
                title: 'Camiseta',
                price: 80000,
                description: 'bla bla bla bla bla'
            },
            {
                id: '2',
                image: 'assets/images/hoodie.png',
                title: 'Hoodie',
                price: 80000,
                description: 'bla bla bla bla bla'
            },
            {
                id: '3',
                image: 'assets/images/mug.png',
                title: 'Mug',
                price: 80000,
                description: 'bla bla bla bla bla'
            },
            {
                id: '4',
                image: 'assets/images/pin.png',
                title: 'Pin',
                price: 80000,
                description: 'bla bla bla bla bla'
            },
            {
                id: '5',
                image: 'assets/images/stickers1.png',
                title: 'Stickers',
                price: 80000,
                description: 'bla bla bla bla bla'
            },
            {
                id: '6',
                image: 'assets/images/stickers2.png',
                title: 'Stickers',
                price: 80000,
                description: 'bla bla bla bla bla'
            },
        ];
        this.today = new Date();
        console.log('1. Constructor');
    }
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes)
    // }
    ngOnInit() {
        console.log('3. ngOnInit');
    }
    ngDoCheck() {
        console.log('4. doCheck');
    }
    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
    ngOnDestroy() {
        console.log('onDestroy');
    }
    clickProduct(id) {
        console.log('product');
        console.log(id);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], inputs: { product: "product" }, outputs: { productClicked: "productClicked" }, decls: 3, vars: 1, consts: [[1, "product-grid"], [3, "product", "productClicked", 4, "ngFor", "ngForOf"], [3, "product", "productClicked"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_app_product_2_Template, 1, 1, "app-product", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ginnio/AngularProyecto/platzi-store/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map