import {TypeAnimation} from "react-type-animation";
import './App.css'

function App() {
  return (
    <>
      <h1>Jenis Jesuratnam</h1>
      <div className="card">
        <p>
          Welcome to my website! I am a software engineer and manager based in Toronto, leading teams to build incredible performant web applications.
        </p>
        <TypeAnimation
            sequence={[
                'An expert in',
                1000,
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
            ]}
            wrapper="span"
            speed={50}
            preRenderFirstString={true}
            repeat={Infinity}
        />
      </div>
    </>
  )
}

export default App
