# Projekt19 WEBTECH1 FEI STU API

![CSS Framework](https://img.shields.io/badge/type-Vue_Website-blue.svg)
![version](https://img.shields.io/badge/version-0.1.5a-lightgray.svg)
![status](https://img.shields.io/badge/status-development-red.svg)
![licence](https://img.shields.io/badge/licence-MIIT-blue.svg)

Sometext

## Pokyny

* ### Download dependencies

    V root Adresári príkaz:

    ```bash
    npm install
    ```

* ### Spustenie servera

    ```bash
    npm start
    ```

* ### Build webappky

    [Comming soon]

    ```bash
    npm build
    ```

### Prerequisites

![NodeJS](https://img.shields.io/badge/NodeJS-v8.11.4-blue.svg)
![NPM](https://img.shields.io/badge/NPM-v5.6.0-blue.svg)

NPM-ko treba aby vedelo stahovat dependencky. Treba min. tie verzie, kvôli príkazu npx. Poprípade ak nechcete pridávať dependencky cez npm tak Yarn, ale npm musíte mať tak alebo tak.

## Folder and file structure

* **src**       : tu je kód
    * **assets**    : folder na obrázky apod.
    * **components**    : Vue komponenty
        * **partials**  : Moduly, kvazi subkomponenty, napr navbar, header, footer apod, nieje to samostatna stranka
    * **js**    : js files
        * _main.js_ : overall js funkcionalita stránky
        * _vendor.js_   : jeden js file pre všetky js knižnice, lepší page loading
    * **scss**  : scss štýlovanie
* _.babelrc_    : konverter ES6, lebo nie všetky browsre ju podporujú
* _.gitignore_  : súbory ktoré bude git ignorovať pri commitoch
* _index.html_  : file na ktorý bude Vue nalinkovaný
* _LICENCE.md_
* _package.json_    : správca nastavení a dependenciek
* _README.md_

## Vue Workflow

### Vue component structure

.vue subory má easy štruktúru:

```html
<template>
    <!--Tu je html-->
</template>

<script>
    //JS, samozrejme dá sa využívať ES6 import
</script>

<style lang="scss">
    /*CSS/SCSS/LESS ktoré chcete tiež funguje @import*/
</style>
```

### Adding vue components to router

* Otvoriť **src/js/vue.js**
* Pod komentom _//routes_ sú odkazy na cesty, čiže tam pridám aj svoju novú
    ```javascript
    import MyComponent from '../components/MyComponent.vue';
    ```
* Vpravím nový route ako var (kvôli vkladaniu)
    ```javascript
    var myroute = {
        path: 'mypath',
        component: MyComponent,
        name: 'mynavigationname'
        meta: {
            breadcrumb: 'mybreadcrumbname'
        }
        },
    ```
* Pridám ju do const routes[0].children (možno budem ešte meniť ale to potom budem vedieť editovať)
    ```javascript
    const routes = [
        {   path: '/',
            component: Home,
            name: 'Domov',
            meta: {
                breadcrumb: 'Domov'
            },
            children: [
                ...,
                myroute,
                ...
            ]
  },...
    ```

### Nesting vue components

Ak chcem modularizovať svoj komponent je to možné, všetky moduly dávam do _src/components/partials_, aby v tom nebol bordel

Samotný nesting vyzerá takto:

```html

<template>
    <nestedelement></nestedelement>
</template>

<script>
import NestedElement from './partials/NestedElement.vue'

export default {
  components: {
    'nestedelement': NestedElement,
  },
  data () {
  }
}
</script>

<style>
</style>
```

### Vue, vue, v- ...

* aka v-if v-for, class binding, data passing,..

Toto dúfam, že zvládnete z dokumentácie, týka sa to vykreslovania elementov napr v-if je v podstate if statement ak je true tak sa tag v ktorom je vykreslí

Ak nie, tak vysvetlím.

[Dokumentácia](https://vuejs.org/v2/guide/conditional.html)

## Changelog

* _**v0.1.5a**_ - added breadcrumbs and navbar
* _**v0.1.3a**_ - better routing and nested components
* _**v0.1.0a**_ - added routing
* _**v0.0.1a**_ - initial project setup

## Authors

* __Lukáš Odler__ - _development and design_ - [ZukyDesigns](https://github.com/zukydesigns)
* __Ondrej Straka__ - _javascript_ - [Ondros22](https://github.com/Ondros22)
* __Jakub Lazúr__ - _something_ - [Jakub Lazur](https://github.com/lazurj)

## Licence

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/zukydesigns/area19/blob/master/LICENSE) file for details.