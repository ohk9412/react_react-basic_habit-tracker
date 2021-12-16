import React, { PureComponent } from 'react';
// rcc 치고 탭하면 기본틀만들기
class Habit extends PureComponent {
     
     componentDidMount(){
          console.log(`habit: ${this.props.habit.name} mounted`);
      }
  
     componentWillUnmount(){
          console.log(`habit: ${this.props.habit.name} will unmounted`);
      }

     handleIncrement = () => {
          this.props.onIncrement(this.props.habit);
     };
     handleDecrement = () => {
          this.props.onDecrement(this.props.habit);
     };
     handleDelete = () => {
          this.props.onDelete(this.props.habit);
     };

    render() {
     //    console.log(this.props.habit);
     //    const habitName = this.props.habit.name;
     
     const {name, count} = this.props.habit;
     console.log(`habit : ${name}`);
     // const {count} = this.props;
        return (
            <li className="habit">
            <span className="habit-name">{name}  </span>
            <span className="habit-count"> {count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                 <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                 <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                 <i className="fas fa-trash"></i>
            </button>
            </li>
         );   
    }
}

export default Habit;