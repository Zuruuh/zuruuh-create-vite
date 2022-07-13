# {{capital name space=true}}

## Usage

### Installation

To setup the project locally, you need to meet the following requirements:
* Git
* NodeJS (Version ^17, prefer installation using [NVM](https://github.com/nvm-sh/nvm))
* PNPM (Version ^7 recommended, install with `npm i -g pnpm`)

Once everything is installed, you can clone the project locally with the following command:
```shell
git clone git@github.com:Zuruuh/{{name}}
cd {{name}}
```
Then, install all the npm dependencies with `pnpm install`.

### Development
To run the project locally, use the npm script *dev* with `pnpm run dev`, and the project will be served locally at http://localhost:5173.
You will benefit from ViteJS Hot Module Replacement which will update all your code directly in your browser when you edit it.

### Production
To build the project for production, simply run `pnpm run build` and you will get your prod-ready project in the *./dist* folder.

## Tools

This project has multiple tools setup by default, let's take a look at all of them 🚀
* [Typescript](https://www.typescriptlang.org)
  - Allows to use a typing system during dev time before transpiling to javascript.
* [Sass](https://sass-lang.com)
  - Adds multiple features to css that will be transformed into css during build-time.  
  Example features: Nesting, Functions, Mixins, Variables, Inheritance
* Linters, Formatters, Static-Code Analyzers
  * [Prettier](https://prettier.io)
  * [Eslint](https://eslint.org)
  * [Stylelint](https://stylelint.io)
* [ViteJS](https://vitejs.dev)
  - Very popular module bundler which is known for its speed and fast-growing community.  
    It utilizes Hot Module Replacement to update your code directly in your browser without loosing its state and extremely fast.
* [PostCSS](https://postcss.org)
  - Tool used to apply modifications on css during build time, has a very large plugin ecosystem that can help a lot with common issues.
  * [PurgeCSS](https://purgecss.com)
    - Reduces drastically final css bundle size by making sure every css selector is actually used in final html files, and will get rid of unused ones.
  * [Autoprefixer](https://autoprefixer.github.io)
    - Makes sure our css will support as much browsers as possible by adding custom vendor prefixes to css declarations that might behave differently depending on the browser interpreting it.
* [GitHub Pages](https://pages.github.com)
  - Free web hosting offered by GitHub with easy configuration and access directly from a GitHub repository's settings
* [GitHub Actions](https://github.com/features/actions)
  * Continuous Integration
    - Since this project utilizes a lot ot linters, formatters, static-code analyzers, etc... Making sure they are correctly used is vital!  
      All linters are run whenever someone pushes on a branch, and they need to all pass in order to be able to merge a pull request.
  * Continuous Deployment (w/ GitHub Pages)
    - This project uses GitHub Actions to re-deploy whenever someone updates the main branch.  
      (All assets are built with beforehand using ViteJS)

### Additional notes
This project was scaffolded using [@zuruuh/create-vite](https://github.com/Zuruuh/create-vite), a self-made starter project using ViteJS and it's ecosystem and create-create-app.
