
class Home extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            nom: 'Josh'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.setState({
            nom: e.target.value
        })
    }

    render () {
        return <div>
            <label htmlFor="nom">Mon Nom : </label>
            <input type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/> 
        </div>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))

/*class ManualIcrementater extends React.Component{
    constructor (props){
        super(props)
        this.state = {n: 0}
    }

    increment(){
        this.setState((state, props) => ({n: state.n + 1}))
    }
    render(){
        return <div>
            valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrementer</button>
        </div>
    }
}

function Home(){
    return <div>
        <ManualIcrementater />
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#app'))*/

