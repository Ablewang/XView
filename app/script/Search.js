import React, {
	Component
} from 'react'

class Search extends Component {
	render() {
		return (
			<div className="m-search">
				<input type="text" className="u-sec-txt" />
				<span className="u-sec-btn"></span>
			</div>
		)
	}
}

export default Search