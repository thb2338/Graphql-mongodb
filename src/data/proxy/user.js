import User from '../models/user'

export function get(conditions) {
  return new Promise((resolve, reject) => {
    User.findOne(conditions, {
      username: 1,
      password: 1,
    }).exec((err, doc) => {
      if (err) reject(err)
      else resolve(doc)
      console.info(232322323232)
      console.info(doc)
    })
  })
}

export function add(params) {
  return new Promise((resolve, reject) => {
    new User(params).save((err, doc) => {
      if (err) reject(err)
      else resolve(doc)
      console.info(doc)
    })
  })
}


export function del(id) {
  return new Promise((resolve, reject) => {
    User.findByIdAndRemove(id, err => {
      if (err) reject(err)
      else resolve('')
    })
  })
}
