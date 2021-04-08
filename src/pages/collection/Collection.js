import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import './collection.styles.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'

const Collection = ({ collection }) => (
    <div className='collection-page'>
        <h2>Catgro</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)