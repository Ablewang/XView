import React, {
	Component
} from 'react'
import '../css/index.css'

class Index extends Component {
	render() {
		return (
			<div className="m-continer">
				<div id="m_header" className="m-header">
					<div className="m-search">
						<input type="text" className="u-sec-txt" />
					</div>
				</div>
				<div id="m_content" className="m-content"></div>
				<div id="m_menu" className="m-ft-menu"></div>
			</div>
		)
	}
}

export default Index