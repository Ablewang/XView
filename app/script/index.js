import React, {
	Component
} from 'react'
import '../css/index.css'

class Index extends Component {
	constructor() {
		super()
		this.setCurrent = this.setCurrent.bind(this);
		this.state = {
			curLi: 0,
			menu: []
		}
	}
	componentWillMount() {
		this.setState({
			menu: this.props.menu
		})
	}
	setCurrent(obj) {
		if (obj) {
			this.setState({
				curLi: obj.index
			})
		}
	}
	render() {
		return (
			<div className="m-continer">
				<div id="m_header" className="m-header">
					<div className="m-search">
						<input type="text" className="u-sec-txt" />
						<span className="u-sec-btn"></span>
					</div>
				</div>
				<div id="m_content" className="m-content"></div>
				<Menu menu={this.state.menu} current={this.state.curLi} setCurrent={this.setCurrent}/>
			</div>
		)
	}
}

class Menu extends Component {
	setCurrent(obj) {
		if (this.props.setCurrent) {
			this.props.setCurrent(obj);
		}
	}
	render() {
		let muLi = this.props.menu;
		let curLi = this.props.current;
		return (
			<div id="m_menu" className="m-ft-menu">
			<ul className="u-menu">
				{
					!muLi? '' :(
						muLi.map((item)=>{
							return <li onClick={()=>{this.setCurrent(item);}} key={item.index}><span className={item.class + (item.index == curLi ? ' active' : '')}>{item.text}</span></li>
						})
					)
				}
			</ul>
		</div>
		)
	}
}


export default Index