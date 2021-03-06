import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products </div>
                <div className="filter-sort">
                    Order {"  "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>All</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Chicken">Chicken</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter {"  "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>
            </div>
        )
    }
}
