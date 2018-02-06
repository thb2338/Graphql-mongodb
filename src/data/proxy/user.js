import User from '../models/user'

// export function getList(conditions, pageNum = 1, pageSize = 10) {
//   const page_num = parseInt(pageNum, 10)
//   const page_size = parseInt(pageSize, 10)
//   const { create_at, ...others } = conditions
//   const where = {}
//   if (create_at) where.create_at = { $gte: create_at[0], $lte: create_at[1] }
//   Object.keys(others).forEach(key => {
//     where[key] = isNaN(others[key]) ? { $regex: others[key] } : others[key]
//   })
//   return new Promise(async (resolve, reject) => {
//     User.find(where, {
//       username: 1,
//       create_at: 1,
//     })
//       .sort({ create_at: 1 })
//       .skip((page_num - 1) * page_size)
//       .limit(page_size)
//       .exec((err, list) => {
//         if (err) reject(err)
//         else {
//           User.count({}).where(where).exec((err1, count) => {
//             if (err) reject(err1)
//             else resolve({ list, count })
//           })
//         }
//       })
//   })
// }

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

// export function getUserById(id) {
//   return new Promise((resolve, reject) => {
//     User.findById(id, {
//       username: 1,
//       password: 1,
//       role: 1,
//       realname: 1,
//       idcard: 1,
//       phone: 1,
//       status: 1,
//     }).exec((err, doc) => {
//       if (err) reject(err)
//       else resolve(doc)
//     })
//   })
// }

// export function getAllUserIdByCondition(conditions) {
//   return new Promise((resolve, reject) => {
//     User.find(conditions, {
//       id: 1,
//     }).exec((err, doc) => {
//       if (err) reject(err)
//       else resolve(doc)
//     })
//   })
// }

export function add(params) {
  return new Promise((resolve, reject) => {
    new User(params).save((err, doc) => {
      if (err) reject(err)
      else resolve(doc)
      console.info(doc)
    })
  })
}

// export function update(id, params) {
//   return new Promise((resolve, reject) => {
//     User.findByIdAndUpdate(
//       id,
//       { $set: { update_at: Date(), ...params } },
//       err => {
//         if (err) reject(err)
//         else resolve('')
//       },
//     )
//   })
// }

export function del(id) {
  return new Promise((resolve, reject) => {
    User.findByIdAndRemove(id, err => {
      if (err) reject(err)
      else resolve('')
    })
  })
}
