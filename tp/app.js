function BoilingVerdict({celsius}){
    if (celsius >= 100) {
        return <div className="Alert Alert-success">L'eau bout</div>
    }
    return <div className="Alert Alert-info">L'eau ne bout pas</div>
}

class Calcultor extends React.Component{
    constructor (props){
        super (props)
        this.state = {
            temperature: ""
        }
    }

    render (){
        const {temperature} = this.state
        return <Div>
            <div className="form-group">
                <label htmlFor="celsius">Temperature en (celsius)</label>
            </div>
        </Div>
    }
}

ReactDOM.render(<BoilingVerdict celsius={50}/>, document.getElementById('app'))