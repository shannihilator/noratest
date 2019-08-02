import React from 'react';

function Card(props) {
    const {person} = props
    const hash = {}
    let email = person.email_address.split("@")[0];
    for(let i = 0; i < email.length; i++) {
        if(hash[email[i]]) {
            hash[email[i]] += 1
        } else {
            hash[email[i]] = 1
        }
    }
    const letters = Object.keys(hash)
    for(let x = 0; x < letters.length; x++) {
        if(!letters[x].match(/[a-z]/i)) {
            delete hash[letters[x]]
        }
    }
    const values = Object.keys(hash).map(function(key) {
        return { key: key, value: this[key] };
    }, hash);
    values.sort(function(p1, p2) { return p2.value - p1.value; });
    const top = values.slice(0, 3);
    const topThree = top.map(el => {
        return (
            <div key={el.key + Math.random()} className='letterContainer'>
                <p>{el.key}</p>
                <p>{el.value}</p>
            </div>  
        )
    })

    return (
        <div className="card">
            <h1>{person.first_name}</h1>
            <p>{person.email_address}</p>
            <p>{person.title}</p>
            <h1>{props.isLoading ? <h1>YEs</h1> : null}</h1>
            <div className="topThree">
            {props.show && 
                <div>
                    <h2>Letters</h2>
                    <h2>Count</h2>
                    {topThree}
                </div>
                }
            </div>
        </div>
    )
    
};

export default Card;