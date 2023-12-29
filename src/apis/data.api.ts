import { Data } from './models/data.model'
import { get } from '/@/utils/axios'

export function GetDataApi() {
  return get<Data[]>('/api/data')
}
