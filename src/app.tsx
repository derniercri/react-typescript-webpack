import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Button from './components/Button'

class App extends React.Component {
    render() {
        return <Button label="Hello World!" />
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
