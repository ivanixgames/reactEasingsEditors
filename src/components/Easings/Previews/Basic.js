import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Border = styled.div`
    border: 2px solid rgba(0,0,0,1);

    height: 100px;
    width: 100px;
`;

const preview = (props) => {
    
    const Bar = styled.div`
        height: 10px;
        width: 10px;
        background: #00ff00;

        transition-timing-function: cubic-bezier({props.defaultSet});
        &:hover {
            height: 100px;
            width: 100px;
        }
    `;

    return( 
        <Border><Bar />
        </Border>
    )

}
preview.PropTypes = {
    defaultSet: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default preview;