import React, { Component } from 'react'


export class FullMoonCalc extends Component {

    state={
        age:''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit =(e) => {
    e.preventDefault();
    this.props.fullMoonCalc(this.state.age);
    
}

    render() {
        return (
            <div style={{display:'flex',justifyContent:'center'}}>
                <form style={{display:'flex', marginBottom: '25px', maxWidth: '60%',}} onSubmit={this.onSubmit}>
                    <input
                        type="number"
                        name="age"
                        style={{flex:'10',padding:'10px'}}
                        placeholder="Insert your age..."
                        onChange = {this.onChange}
                    >
                    </input>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{flex:'1'}}
                    >
                    </input>
                    </form>

            </div>
        )
    }
}

export default FullMoonCalc
