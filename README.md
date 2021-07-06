# locally-unique-id-generator #

trivial generator for ids which are unique within an application

**NPM users**: please consider the [Github README](https://github.com/rozek/locally-unique-id-generator/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

## Installation ##

`locally-unique-id-generator` may be used as an ECMAScript module (ESM), a CommonJS or AMD module or from a global variable.

You may either install the package into your build environment using [NPM](https://docs.npmjs.com/) with the command

```
npm install locally-unique-id-generator
```

or load the plain script file directly

```
<script src="https://unpkg.com/locally-unique-id-generator"></script>
```

## Access ##

How to access the package depends on the type of module you prefer

* ESM (or Svelte): `import newUniqueId from 'locally-unique-id-generator'`
* CommonJS: `const newUniqueId = require('locally-unique-id-generator')`
* AMD: `require(['locally-unique-id-generator'], (newUniqueId) => {...})`

Alternatively, you may access the global variable `newUniqueId` directly.

## Usage within Svelte ##

For Svelte it is recommended to import the package within a module context:

```
<script context="module">
  import newUniqueId from 'locally-unique-id-generator'
</script>

<script>
  console.log('next unique id:',newUniqueId())
</script>
```

## Usage as ECMAscript, CommonJS or AMD Module (or as a global Variable) ##

Let's assume that you already "required" or "imported" (or simply loaded) the module according to your local environment. In that case, you may use it as follows:

```
console.log('next unique id:',newUniqueId())
```

## Background Information ##

From time to time, it may be necessary to generate unique ids (e.g., to serve as keys into a dictionary of objects since JavaScript does not allow to use objects themselves as keys). This module provides a trivial solution for this problem by using a counter to generate ids of the form `uid-<counter>`. Within the same application, such keys are guaranteed to be unique (unless more than 2^53 of them are created while that application is running)

## JavaScript API ##

This package offers a JavaScript `default` export, which may be imported (or `required`) as shown in the "Access" section above.

With such an import, the JavaScript API can be used as follows:

* **`newUniqueId()`** - returns a new, unique literal id of the form `uid-<counter>` with "counter" starting at 1

## Example ##

An example is available on the Svelte REPL - feel free to play with it!

* [basic example](https://svelte.dev/repl/34407dd75db14206becd97b1441720c6)

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/locally-unique-id-generator/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

You may also look into the author's [build-configuration-study](https://github.com/rozek/build-configuration-study) for a general description of his build environment.

## License ##

[MIT License](LICENSE.md)
