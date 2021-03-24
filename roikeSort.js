let arr = [4396, 480, 556, 430, 1660, 1066, 1080, 660, 421, 329]
let arr2 = [
    4396, 480, 556, 430, 1660, 1066, 1080, 660, 421, 329, 
    -4396, -480, -556, -430, -1660, -1066, -1080, -660, -421, -329
]

function roikeSort(arr, n) {
    // 初始化二维数组作为桶
    let bucket = Array.from(new Array(n), () => new Array(0))
    // 数据的最大长度
    let maxLength = Math.max(...arr).toString().length
    // 两层遍历
    for(let j=0; j<maxLength; j++) {
        for(let i=0; i<arr.length; i++) {
            // 取位置
            let val = (arr[i] / Math.pow(10, j) >= 1) ? Math.floor((arr[i] / Math.pow(10, j))) % 10 : 0
            bucket[val] = [...bucket[val], arr[i]]
        }
        arr = bucket.flat()
        bucket = Array.from(new Array(n), () => new Array(0))
    }
    return arr
}

// Test
let res = roikeSort(arr, 10)
console.log(res)
let res2 = roikeSort(arr2, 19)
console.log(res2)

// 负数 -> 无符号型排序
console.log(-1 >>> 0)
console.log(Math.pow(2, 32))
let arr_unsigned = arr2.map(item => item >>> 0)
let arr_signed = roikeSort(arr_unsigned, 10).map(item => item << 0)
let left = arr_signed.filter(item => item < 0)
let right = arr_signed.filter(item => item > 0)
console.log([...left, ...right])