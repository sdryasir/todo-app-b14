

// const {abc, name, pqr} = {abc: 'hi', name: 'Ali', n: 90}

import Test1 from "./Test1"

export default function Test({abc, name, n}){
    
    return <div>
        <h1>Test Component - {abc} - {name} - {n}</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium minus, saepe vitae earum aut porro quidem ipsam dolorem voluptates maiores dolore non consectetur nulla, mollitia deleniti beatae deserunt. Debitis, omnis?
        <Test1 abc={abc} name={name} n={n}/>
    </div>
}

export let a = 90