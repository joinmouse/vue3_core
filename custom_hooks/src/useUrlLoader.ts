import { reactive } from 'vue'
import axios from 'axios'

interface DataProps<T> {
    result: T | null,
    loading: boolean,
    loaded: boolean,
    error: any
}

const useUrlLoader = <T = any>(url: string) => {
    const data = reactive<DataProps<T>>({
        result: null,
        loading: true,
        loaded: false,
        error: null
    })
    axios.get(url).then(res => {
        data.result = res.data
        data.loaded = true
    }).catch(e => {
        data.error = e
    }).finally(() => {
        data.loading = false
    })
    return data
}

export default useUrlLoader