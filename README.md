# grunt-tbp-win8encode

> Fix file encoding in Windows 8 Javascript apps.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tbp-win8encode --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tbp-win8encode');
```

## The "tbp_win8encode" task

### Overview
In your project's Gruntfile, add a section named `tbp_win8encode` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tbp_win8encode: ['bower_components/**/*.*','js/**/*.*, 'pages/**/*.*']
  },
});
```

### Usage Examples

#### Default Options
In this example, the task is passed the directories/files that should be checked for the correct encoding (UTF-8 with BOM) for a Windows 8 JS project.

```js
grunt.initConfig({
  tbp_win8encode: ['bower_components/**/*.*','js/**/*.*, 'pages/**/*.*']
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
