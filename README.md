# grunt-template-html

> Precomplie templates to HTML.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-template-html --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-template-html');
```

## The "template" task

### Overview
In your project's Gruntfile, add a section named `template` to the data object passed into `grunt.initConfig()`.


### Options

#### engines

#### cwd

#### partials

#### data


### Usage Examples

```js
grunt.initConfig({
  template: {
    dev: {
      engine: 'handlebars',
      cwd: 'test/fixtures/',
      partials: ['test/fixtures/modules/*.hbs'],
      data: 'test/fixtures/data/data.json',
      options: {
      },
      files: [
        {
          expand: true,     // Enable dynamic expansion.
          cwd: 'test/fixtures',      // Src matches are relative to this path.
          src: '*.hbs', // Actual pattern(s) to match.
          dest: 'tmp/',   // Destination path prefix.
          ext: '.html'  // Dest filepaths will have this extension.
        }
      ]
    }
  },
})
```

## Release History
0.1.0 - First Release