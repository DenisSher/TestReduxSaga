import * as R from 'ramda'

export const pipeP = (...args) => R.pipeWith(R.then)([...args])