import React from 'react';
import PropTypes from "prop-types";
import Draggable from 'react-draggable';
import styled from 'styled-components';


const Circle = styled.div`
    border: 0px solid #00aa00;

    background: rgba(0,255,0,0.75);
    width: 12px;
    height: 12px;
    border-radius: 12px;
    left: -6px;
    top: -6px;
    position: absolute;
`;

const dragPoint = (props) => {
    return(
        <Draggable defaultPosition={{x: props.x, y: props.y}} onStart={props.onStart} onDrag={props.onDrag} onStop={props.onStop}>
            <Circle />
        </Draggable>
    );
}

dragPoint.PropTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    onStart: PropTypes.func,
    onDrag: PropTypes.func,
    onStop: PropTypes.func
};
export default dragPoint;