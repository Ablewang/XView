import React, {
	Component
} from 'react'
import Search from './Search'
import '../css/index.css'

class Index extends Component {
	constructor() {
		super()
		this.setCurrent = this.setCurrent.bind(this);
		this.state = {
			content: '',
			curObj: null,
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
				curObj: obj,
				content: obj.callback()
			})
		}
	}
	render() {
		return (
			<div className="m-continer">
				<div id="m_header" className="m-header">
					{
						!this.state.curObj || !this.state.curObj.hasSearch ? '' :
						(
							<Search />
						)
					}		
				</div>
				<div id="m_content" className="m-c-content">{this.state.content}</div>
				<div className="ft-space"></div>
				<Menu menu={this.state.menu} current={this.state.curObj} setCurrent={this.setCurrent}/>
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
		let curObj = this.props.current;
		return (
			<div id="m_menu" className="m-ft-menu">
			<ul className="u-menu">
				{
					!muLi? '' :(
						muLi.map((item)=>{
							return <li onClick={()=>{this.setCurrent(item);}} key={item.index}><span className={item.class + (item == curObj ? ' active' : '')}>{item.text}</span></li>
						})
					)
				}
			</ul>
		</div>
		)
	}
}


export default Index