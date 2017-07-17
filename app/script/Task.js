import React, {
	Component
} from 'react'
import '../css/task.css'

class Task extends Component {
	constructor(){
		super();
		this.state={
			task:[]
		}
	}

	componentWillMount(){
		this.setState({
			task:(!this || !this.props.task) ? [] : this.props.task
		})
	}

	render() {
		return(
			<div className="c-content">
				{
					this.state.task.map((item)=>{
						return <TaskItem task={item}/>
					})
				}
			</div>
		)
	}
}

class TaskItem extends Component{
	render(){
		let tk = this.props.task;
		return !tk ? '' :(
			<div className="u-box">
				<span className="own"><img src={require('../imgs/'+tk.from+'.jpg')} className="pic" /><span className="name">{tk.from}</span></span>
				<span className="tit">{tk.title}</span>
				<span className="desc">{tk.descript}</span>
				<ul className="btm">
					<li>{tk.category}</li>
					<li>{tk.point}</li>
				</ul>
			</div>
		)
	}
}

export default Task