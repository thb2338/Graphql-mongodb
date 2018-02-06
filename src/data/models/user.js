import mongoose from 'mongoose'
import db from '../../db'

const UserSchema = new mongoose.Schema({
  username: { type: String }, // 用户名
  password: { type: String }, // 用户密码
  create_at: { type: Date, default: Date() }, // 创建时间
})

export default db.model('User', UserSchema, 'user')