import React, { useState } from 'react'
import './styles.scss'

const App = () => {
    const nums = []

    for (let i = 0; i < 1001; i++) {
        nums.push(i)
    }

    const [num1, setNum1] = useState(nums[Math.floor(Math.random() * nums.length)])
    const [num2, setNum2] = useState(nums[Math.floor(Math.random() * nums.length)])
    const [message, setMessage] = useState('Can you figure it out?')

    const isLessThan = () => {
        if (num1 < num2) {
            setMessage(`Correct!!! ${num1} is less than ${num2}!`)
            setTimeout(() => {
                setMessage('Can you figure it out?')
                setNum1(nums[Math.floor(Math.random() * nums.length)])
                setNum2(nums[Math.floor(Math.random() * nums.length)])
            }, 2500)
        } else {
            setMessage("Nope, try again!")
        }
    }

    const isEqualTo = () => {
        if (num1 === num2) {
            setMessage(`Correct!!! ${num1} equals ${num2}!`)
            setTimeout(() => {
                setMessage('Can you figure it out?')
                setNum1(nums[Math.floor(Math.random() * nums.length)])
                setNum2(nums[Math.floor(Math.random() * nums.length)])
            }, 2500)
        } else {
            setMessage("Nope, try again!")
        }
    }

    const isGreaterThan = () => {
        if (num1 > num2) {
            setMessage(`Correct!!! ${num1} is greater than ${num2}!`)
            setTimeout(() => {
                setMessage('Can you figure it out?')
                setNum1(nums[Math.floor(Math.random() * nums.length)])
                setNum2(nums[Math.floor(Math.random() * nums.length)])
            }, 2500)
        } else {
            setMessage("Nope, try again!")
        }
    }


    return (
        <div className="app">
            <h1 className="header">Compare Numbers!</h1>
            <p className="subHeader">Click 'less-than', 'equal to', or 'greater-than':</p>

            <div className="game">
                <h2 className="game__message">{message}</h2>
                <div className="game__num1 number">{num1}</div>
                <div className="game__lessThan button" onClick={isLessThan}>&lt;</div>
                <div className="game__equalTo button" onClick={isEqualTo}>&#61;</div>
                <div className="game__greaterThan button" onClick={isGreaterThan}>&gt;</div>
                <div className="game__num2 number">{num2}</div>
            </div>
        </div>
    )
}

export default App