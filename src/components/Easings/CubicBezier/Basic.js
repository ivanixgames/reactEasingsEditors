import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import DragPoint from '../Common/DragPoint';


const Border = styled.div`
    border: 1px solid rgba(200,200,200,0.5);
    height: 100px;
    width: 100px;
    position: relative;
`;


class CubicBezier extends React.Component {

    componentDidMount() {
        window.bz = this;
        this.ctx = this.refs.canvas.getContext('2d');
        this.draw();
    }


    draw () {
        const ctx = this.ctx;

        let points  = this.points;

        ctx.clearRect(0, 0, 100, 100);
        ctx.beginPath();
        ctx.strokeStyle='#00ff00';
        ctx.moveTo(0,100);
        ctx.lineTo(points[0][0], points[0][1]);

        ctx.moveTo(100,0);
        ctx.lineTo(points[1][0], points[1][1]);
        ctx.stroke();


        ctx.beginPath();
        ctx.strokeStyle='#0000ff';
        ctx.moveTo(0,100);
        ctx.bezierCurveTo(points[0][0], points[0][1], points[1][0], points[1][1], 100, 0);
        ctx.stroke();

    }
    onDrag (event, loc, idx) {
        this.points[idx]=[loc.x, loc.y];
        this.draw();
    }
    onStop() {
        console.log('CubicBezier.onStop: ');
        const set = this.points.reduce((prev, cur) => {
            return prev.concat(cur);
        }, []);
        this.props.onChanged(set);
    }
    render() {

        const mapSet = this.props.defaultSet.map(
            (current, idx, arr) => {
                if (!(idx % 2)) {
                    return current * 100;
                } else {
                    return (100 - current * 100);
                }
            }
        );

        this.points = [
            [mapSet[0], mapSet[1]],
            [mapSet[2], mapSet[3]]
        ];

        return (
            <Border>
                <canvas ref='canvas'  width="100" height="100" />
                <DragPoint x={mapSet[0]} y={mapSet[1]} onDrag={(event,loc) => {this.onDrag(event,loc,0)}} onStop={this.onStop.bind(this)}/>
                <DragPoint x={mapSet[2]} y={mapSet[3]} onDrag={(event,loc) => {this.onDrag(event,loc,1)}} onStop={this.onStop.bind(this)}/>
            </Border>
        );
    }

}

CubicBezier.PropTypes = {
    defaultSet: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChanged: PropTypes.func
};
export default CubicBezier;