import React, {Component} from 'react';
import axios from 'axios';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  
  
class Assistant extends Component {
    
    state = { 
        datas: [],  // output
        name: "",  // input 1
        text: "",  // input 2
    };

    renderSwitch = (param) => {
        switch (param + 1) {
            case 1:
                return "primary ";
            case 2:
                return "secondary";
            case 3:
                return "success";
            case 4:
                return "danger";
            case 5:
                return "warning";
            case 6:
                return "info";
            default:
                return "yellow";
        }
    };
  
    componentDidMount() {
        axios.get('/app/').then(res => {
            this.setState({datas: res.data});
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        //e.preventDefault();

        axios
            .post("/app/", {
                name: this.state.name,
                text: this.state.text,
            })
            .then((res) => {
                this.setState({
                    name: "",
                    text: "",
                });
            })
            .catch((err) => {});
    };

    render () {
        return (
            <div className="container jumbotron ">
            <h2 className="p-5">AI Assistant Application @Initial stage</h2>
            <form className="p-3" onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"
                                id="basic-addon1">
                            {" "}
                            Megnevezés{" "}
                        </span>
                    </div>
                    <input type="text" className="form-control" 
                            placeholder="Nevezd meg a tárgyat, amiről írni szeretnél!"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.name} name="name"
                            onChange={this.handleInput} />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            Leírás 
                        </span>
                    </div>
                    <textarea className="form-control " 
                                aria-label="With textarea"
                                placeholder="Ird le mire gondolsz ....." 
                                value={this.state.text} name="text" 
                                onChange={this.handleInput}>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-5">
                    Mutat
                </button>
            </form>
                
            <hr
                style={{
                    color: "#000000",
                    backgroundColor: "#000000",
                    height: 0.5,
                    borderColor: "#000000",
                }}
            />

            {this.state.datas.map((data, id) => (
                <div key={id}>
                    <div className="card shadow-lg">
                        <div className={"bg-" + this.renderSwitch(id % 6) + 
                                        " card-header"}>Gondolat {id + 1}</div>
                        <div className="card-body">
                            <blockquote className={"text-" + this.renderSwitch(id % 6) + 
                                                " blockquote mb-0"}>
                                <h1> {data.name} </h1>
                                <footer className="blockquote-footer">
                                    {" "}
                                    <cite title="Source Title">{data.text}</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            ))}
                </div>
        );
    }
}
  
export default Assistant;