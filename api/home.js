// api/home.js

import { fetch } from '../utils/request'

export const dictAll = () => fetch({ url: '/dict/all' })