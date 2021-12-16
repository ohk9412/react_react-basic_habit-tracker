import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    // 리엑트에서 스테이트 오브젝트를 직접적으로 수정하는건 별로임

    handleIncrement = habit => {
        this.props.onIncrement(habit);
    
    };
    handleDecrement = habit => {
        this.props.onDecrement(habit);
    
    };
    handleDelete = habit => {
        this.props.onDelete(habit);
    };

    handleAdd = name=>{
        this.props.onAdd(name);
    } ;
    
    render() {
        console.log('habits');
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                {this.props.habits.map(habit =>(
                    <Habit
                    key={habit.id} 
                    habit={habit}
                    // count={habit.count}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
            ); 
        } 
    }


export default Habits;