import React from 'react';

function Card(props) {
    const {person} = props

    // hash table to hold email letters and counts
    const hash = {}

    // grabbing letters in  email before the @ 
    let email = person.email_address.split("@")[0];

    // looping  through and adding the count for the letters
    for(let i = 0; i < email.length; i++) {
        if(hash[email[i]]) {
            hash[email[i]] += 1
        } else {
            hash[email[i]] = 1
        }
    }
    // get the letters of the email 
    const letters = Object.keys(hash)

    // loop thru and make sure it is a letter
    for(let x = 0; x < letters.length; x++) {
        if(!letters[x].match(/[a-z]/i)) {
            // delete  if it is not
            delete hash[letters[x]]
        }
    }

    // array of letter and counts for the email
    const values = Object.keys(hash).map(function(letter) {
        return { letter: letter, count: this[letter] };
    }, hash);

    // sorting the array of letters and values
    values.sort(function(letter1, letter2) { 
        return letter2.count - letter1.count; });

    // grapping the top three values after sorting
    const top = values.slice(0, 3);

    // mapping over and creating the letter and count  pairs
    const topThree = top.map(el => {
        console.log(el)
        return (
            <div key={el.letter + Math.random()}  className='letterContainer'>
                <p>{el.letter}</p>
                <p>{el.count}</p>
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