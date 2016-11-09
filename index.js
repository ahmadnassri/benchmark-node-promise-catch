// dependencies
const Benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')
const chalk = require('chalk')

// libs
const Bluebird = require('bluebird')
const Smart = require('smart-promise')

class CustomError extends Error {}

new Benchmark.Suite()
  .add({
    name: 'bluebird',
    defer: true,
    fn: deferred => {
      Bluebird.reject(new CustomError())
        .catch(Error, CustomError, _ => deferred.resolve())
    }
  })

  .add({
    name: 'simon-promise',
    defer: true,
    fn: deferred => {
      Smart
        .reject(new CustomError())
        .catch(Error, CustomError, _ => deferred.resolve())
    }
  })

  // add listeners
  .on('cycle', event => benchmarks.add(event.target))

  .on('complete', function () {
    benchmarks.log()

    console.log('Fastest is %s', chalk.green(this.filter('fastest').map('name')))
    console.log('Slowest is %s', chalk.red(this.filter('slowest').map('name')))
  })

  .run({ 'async': true })
