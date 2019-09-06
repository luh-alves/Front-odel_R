import React, { Component } from 'react';
import { Radio } from "react-radio-group";
import './RadioButton.css';


class RadioButton extends Component {
    isCurrentSelected(){
        return this.props.selected === this.props.engine.kwh;
    }
    render() {
        return (
            <div className="RadioLayout">
                <label className={this.isCurrentSelected()? 'Black RadioContainer':'Grey RadioContainer' } >
                    <span className="KilowattsModel">
                        {this.props.engine.kwh}
                        <span className={this.isCurrentSelected()? ' Red ModelType':'Grey ModelType'}> {this.props.engine.type}</span>
                    </span>

                    <span >{this.props.engine.kwh} kwh</span>

                    <span className="MilesRange">{this.props.engine.range} miles range</span>

                    <Radio value={this.props.engine.kwh} id={this.props.engine.id} checked={this.props.engine.id === 1} />
                    <span className="Checkmark" />

                </label>
                {this.props.engine.price > 0 && this.isCurrentSelected() ?
                    <span className="AdditionalPrice">+ {this.props.engine.price}</span> : null}
            </div>
        );
    }
}

export default RadioButton;