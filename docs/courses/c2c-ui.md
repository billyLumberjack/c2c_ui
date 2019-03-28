
## Prerequisites

* [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed
* [`@vue/cli`](https://cli.vuejs.org/) installed
* a descent code editor ([Atom](https://atom.io/), [Visual Studio](https://visualstudio.microsoft.com), [Sublime Text](https://www.sublimetext.com/)...)
* and a basic knowledge of [Vue.js](https://vuejs.org/)


## Install

```bash
git clone https://github.com/c2corg/c2c_ui.git
cd c2c_ui
vue ui
```

And then, launch development environment :

* http://localhost:8000
* Import => select your `c2c_ui` folder => Import this folder
* Tasks => serve => Run task button

:heart: http://localhost:8080 :heart:


## Vue UI Tasks

They are defined in package.json

* **serve**: Serve development server, with hot relead.
* **build**: Build production site
* **build:github**: Build demo site
* **lint**: Check code compliance. Have a look on `no-fix` parameter!
* **generate-docs**: Generate code documentation
* **generate-icons**: Generate Font-Awesome custom icons
* **update-c2c-common**: `/src/js/constants/common.json` is build from c2c_common repo. Here is the task for this !


## vue-camptocamp concepts

First of all, have a look on source-structure file : it will provide a good summary of top levels folders.


### Components

Based on vue mono-file component. A component is always a file

* View components : [/src/views](https://github.com/c2corg/c2c_ui/tree/master/src/views)
  * They all finish by `View`
  * They may contain `utils` folder for any component that are related to one view
* Shared components : [/src/components](https://github.com/c2corg/c2c_ui/tree/master/src/views)
  * They are used by many components
* Generics components : [/src/components/generics](https://github.com/c2corg/c2c_ui/tree/master/src/views/components/generics)
  * They are used by plenty components, and they are available everywhere ([Here is the trick](https://github.com/c2corg/c2c_ui/tree/master/src/js/vue-plugins/generic-components.js))


### Styles

The framework used is [Bulma](https://bulma.io/)

* Exception apart, you must always declare them as `scoped`
* you must also use `lang="scss"`
* You can include variable.css if you need any value : `@import '@/assets/sass/variables.scss';`


### Icons

They are all based on [Font Aweseome](https://fontawesome.com/), more precisely on [SVG Javascript Core package](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core)

* in-app javascript info : [bundle](https://c2corg.github.io/c2c_ui/bundle-analyzis.html)
* tree-shaking : [font-awesome-config.js](https://github.com/c2corg/c2c_ui/blob/master/src/js/vue-plugins/font-awesome-config.js)
* and [custom icons](https://github.com/c2corg/c2c_ui/tree/master/src/assets/font-awesome-custom)

Here is a complex example : https://github.com/c2corg/c2c_ui/blob/master/src/components/generics/icons/document/IconOuting.vue
