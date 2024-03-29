import {useState} from 'react'
import tw from 'twin.macro';
import reactLogo from './assets/react.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div css={tw`flex flex-col`}>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button css={tw`text-white bg-blue-500`} onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p css={tw`text-white bg-blue-500`}>
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
