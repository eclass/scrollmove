# @eclass/scrollmove

[![npm](https://img.shields.io/npm/v/@eclass/scrollmove.svg)](https://www.npmjs.com/package/@eclass/scrollmove)
[![Build Status](https://travis-ci.org/eclass/scrollmove.svg?branch=master)](https://travis-ci.org/eclass/scrollmove)
[![downloads](https://img.shields.io/npm/dt/@eclass/scrollmove.svg)](https://www.npmjs.com/package/@eclass/scrollmove)
[![dependencies](https://img.shields.io/david/eclass/scrollmove.svg)](https://david-dm.org/eclass/scrollmove)
[![devDependency Status](https://img.shields.io/david/dev/eclass/scrollmove.svg)](https://david-dm.org/eclass/scrollmove#info=devDependencies)

> Modulo para mover el scroll suave hasta centrar un elemento en pantalla

### 🏠 [Homepage](https://github.com/eclass/scrollmove#readme)

## Prerequisites

- node >=10.16.3

## Install

```sh
npm i @eclass/scrollmove
```

## Run tests

```sh
npm run test
```

## Example 📖

`goTo()` receives two parameters `id` and `options`

```js
import goTo from '@eclass/scrollmove'
...
<Component
  onClick={() => goTo(`#question-98765`)}>
/>
```

```js
import goTo from '@eclass/scrollmove'
...
<Component
  onClick={() => goTo(`#question-98765`, { behavior: 'smooth', block: 'center' })}>
/>
```

### Params

- id: string, that identifies the element in the dom.
- options: object, with the properties `behavior`, `block` and `inline`. Default is set `{ behavior: 'smooth', block: 'center' }`.

More options from api of [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

## Author

👤 **Ender Bonnet**

- Twitter: [@enBonnet](https://twitter.com/enbonnet)
- Github: [@enBonnet](https://github.com/enbonnet)

## 📝 License

Copyright © 2019 [Ender Bonnet <enbonnet@pm.me> (https://enbonnet.me/)](https://github.com/eclass).<br />
This project is [MIT](https://github.com/eclass/scrollmove/blob/master/LICENSE) licensed.
