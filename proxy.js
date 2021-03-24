const dinner = {
    meal: "tacos"
}

const handler = {
    get(target, prop, receiver) {
        console.log("trigger get")
        return Reflect.get(...arguments)
    },
    set(target, prop, value, receiver) {
        console.log("trigger set")
        return Reflect.set(...arguments)
    }
}

const proxy = new Proxy(dinner, handler)
proxy.meal = "maomao"
console.log(proxy.meal)
console.log(dinner.meal)