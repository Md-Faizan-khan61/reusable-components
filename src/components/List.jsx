import React from 'react'
import propTypes from 'prop-types'

const ListItem = ({items , renderItem}) => {

    return (
        <div>
            <ul style={styles.list}>
                {items.map((item,index)=>
                <li key={index} style={styles.listItem}>
                  {renderItem(item)}
                </li>
                )}
            </ul>
        </div>
    )
}

ListItem.propTypes = {
    items:propTypes.array.isRequired,
    renderItem:propTypes.func.isRequired
}

const styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '8px',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
  }
export default ListItem