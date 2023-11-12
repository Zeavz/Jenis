import {TypeAnimation} from "react-type-animation";
import './App.css'

function App() {
  return (
    <>
      <h1>Jenis Jesuratnam</h1>
      <div className="card">
        <p>
          Welcome to my website! I am a software engineer and manager based in Toronto, leading teams to build incredible performant and modern web applications.
        </p>
        <TypeAnimation
            sequence={[
                'An expert in React',
                1000,
                'An expert in Node',
                1000,
                'An expert in TypeScript',
                1000,
                'An expert in Java',
                1000,
                'An expert in Python',
                1000,
                'An expert in GraphQL',
                1000,
                'An expert in AWS',
                1000,
                'An expert in Docker',
                1000,
            ]}
            wrapper="span"
            speed={50}
            preRenderFirstString={true}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
      </div>
    </>
  )
}

export default App
