const url = 'http://numbersapi.com/'
// Part 1

async function number() {
    let number = 27;
    let res = await axios.get(`${url}${number}`);
    console.log(res.data);
}
number()

// Part 2

async function multNumbers() {
    let numbers = [7, 12, 89, 45];
    let data  = await axios.get(`${url}${numbers}`);
    for(number of numbers){
        $('#num-facts').append(
            `
            <div>${data.data[number]}</div>
            `
        )
    }
}
multNumbers()

// Part 3

async function multFacts(){
    let number = 27;
    let favNumberFacts = await Promise.all([
        axios.get(`${url}${number}`),
        axios.get(`${url}${number}`),
        axios.get(`${url}${number}`),
        axios.get(`${url}${number}`)
    ])
    for(fact of favNumberFacts){
        $('#fav-num-facts').append(
            `
            <div>${fact.data}</div>
            `
        )
        console.log(fact.data)
    }
}

multFacts()
