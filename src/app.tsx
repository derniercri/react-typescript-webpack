import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Button from './components/Button'

class App extends React.Component {
    render() {
        return <Button onClick={() => alert('Hey, you clicked me!')} label="Hello World!" />
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
