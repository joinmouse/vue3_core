let dep = new Set()
// track: 跟踪更改它的函数
function track() {
    dep.add(effect)
}
// tigger: 触发更新
function trigger() {
    dep.forEach(effect => effect())
}
const reactive = (obj) => {
    const handler = {
        get() {
            let result = Reflect.get(...arguments)
            track()
            console.log("track")
            return result
        },
        set() {
            let result = Reflect.set(...arguments)
            trigger()
            console.log("trigger")
            return result
        }
    }
    return new Proxy(obj, handler)
}

// Test
let product = reactive({
    price: 5,
    count: 2
})
let total = 0
let effect = () => {
    total = product.price * product.count
}
effect()
console.log(total)
product.price = 10
console.log(`total is ${total}`)