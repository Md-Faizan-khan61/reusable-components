//  a component that overlays other content on a webpage

import React from 'react'
import propTypes from 'prop-types';

const Modal = ({children ,isopen , onclose}) => {
    if(!isopen) return null;
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
            <button onClick={onclose} style={styles.closeButton}>
                &times;
            </button>
            {children}
        </div>
      </div>
    )
}

Modal.propTypes = {
    children:propTypes.node.isRequired,
    onclose:propTypes.func.isRequired,
    isopen:propTypes.bool.isRequired
}

const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      background: '#242424',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '100%',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      
      background: 'transparent',
      border: 'none',
      fontSize: '1.5em',
      cursor: 'pointer',
      color:'#fff'
    },
  };

export default Modal