import React, {
	Component
} from 'react'
import '../css/usercenter.css'

class UserCenter extends Component {
	constructor() {
		super()
		this.state = {
			user: null
		}
	}
	componentWillMount() {
		this.setState({
			user: this.props.user
		})
	}
	render() {
		return (
			<div className="c-center">
				<div className="m-hd"></div>
				<div className="m-my">
					{
						<User user={this.state.user}/>
					}
					<div className="m-action"></div>
				</div>
			</div>
		)
	}
}

class User extends Component {
	constructor() {
		super()
		this.state = {
			default: {
				name: 'React',
				img: '../imgs/React.jpg',
				level: 5,
				tasks: 99,
				point: 999,
				rate: 5
			}
		}
	}
	getStar(num) {
		let stars = [];
		for (var i = 0; i < num; i++) {
			stars.push(<li key={i}></li>);
		}
		return stars;
	}
	render() {
		let user = !this.props.user ? this.state.default : this.props.user;
		return (
			<div className="m-info">
				<img src={require('../imgs/'+user.name+'.jpg')} alt="" />
				<span>{user.name}</span>
				<ul className="star">
					{this.getStar(user.level)}
				</ul>
				<ul className="info">
					<li>{user.tasks}</li>
					<li>{user.point}</li>
					<li>{user.rate}</li>
				</ul>
			</div>
		)
	}
}


export default UserCenter