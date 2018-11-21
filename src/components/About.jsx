import React, { Component } from 'react'
import '../App.css';
import Header from "./Header/Header";

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container borders">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Kirby.png/220px-Kirby.png"></img>
                        </div>
                        <div className="col-sm-10">
                            <div className="textColor">Ore wa Edeandes fgbfflkvbfjlkvjdlfkjv klfjgvl dkfjglk fgbfflkvbfjlkvjdlfkjv lfkjgdlkfjgv
                             ldkfgjldkfjglkd jfkljg ldkfjg lkdjfg ldkjflgkj dflkjg dkfjglk gfkldjg ldkfjg kldf
                              dkfjglkd jfgkljdgl fdkj
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
