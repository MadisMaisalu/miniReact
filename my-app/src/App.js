import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="container-sm" style={{width: '50%', marginTop: '20%'}}>
            <div className="row">
                <input className="form-control" id="firstNumber" placeholder="Enter first number" />
            </div>
            <div className="row" style={{marginTop: '1%', fontSize: '2rem'}}>
                <p className="text-center">+</p>
            </div>
            <div className="row">
                <input className="form-control" id="secondNumber" placeholder="Enter second number" />
            </div>
            <div className="row" style={{marginTop: '5%'}}>
                <button type="button" className="btn btn-primary">=</button>
            </div>
            <div className="row">
                <input className="form-control" id="secondNumber" placeholder="Answer" disabled/>
            </div>
        </div>
    );
}

export default App;
