import React,{Component} from "react";
import "./TimerSettings.css";

class TimerSettings extends Component {
    constructor(props){
        super(props);
        this.state = {
            countdownValue:0
        }
    }
    

    handleCountdownSubmit = (e) => {
        console.log('form submit detected');
        e.preventDefault();
    }

    handleCountdownChange = (e) => {
        this.setState({countdownValue:e.target.value?e.target.value:''});
        
    }

    handleTimerStartClick = (e) => {
        console.log('start button click detected');
    }

    render(){
        return(
            <div>
                <span>
                <form onSubmit={this.handleCountdownSubmit}>
                    <label>
                        Countdown:
                        <input type="text" value={this.state.countdownValue} onChange={this.handleCountdownChange} />
                    </label>
                    <button >Start</button>
                </form>
                </span>
              
    
            </div>
        )
    }
   
}

export default TimerSettings;