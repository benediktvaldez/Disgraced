const gulp = require('gulp')
const gutil = require('gulp-util')
const _ = require('lodash')
const config = require('./config')

_.forOwn(require('@kolibridev/gulp-tasks')(config).tasks, (task) => {
  gutil.log(gutil.colors.green(`Registered ${gutil.colors.blue(task.name)} task`))
  gulp.task(task.name, task.dep, task.fn)
})
