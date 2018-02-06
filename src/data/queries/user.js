/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
} from 'graphql'
import UserAddType from '../types/UserAddType'
import UserType from '../types/UserType'
import { User } from '../proxy'

// 查询一条数据，请求方法：query={mes(id: id ){username}}
export const mes = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(_, params) {
    const  data = await User.get({ _id: params.id })
    return data
  },
}

// 分页方法，请求方法：query={mepage(options:"", page_no:1,page_items:10){username,password}}
export const mepage = {
  type: new GraphQLList(UserType),
  args: {
    options: {
      name: 'options',
      type: new GraphQLNonNull(GraphQLString),
    },
    page_no: {
      name: 'page_no',
      type: new GraphQLNonNull(GraphQLInt),
    },
    page_items: {
      name: 'page_items',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  async resolve(_, params) {
    const data = await User.getList(
      params.options,
      params.page_no,
      params.page_items,
    )
    return data.list
  },
}

// 删除方法，请求方式：query={del(id: id ){username}}
export const del = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(_, params) {
    await User.del({ _id: params.id })
    return ''
  },
}

//添加方法
export const add = {
  type: UserType,
  args: {
    username: {
      name: 'username',
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      name: 'password',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  async resolve(_, params) {
    console.info(params)
    const data = await User.add(params)
    return data
  },
}
