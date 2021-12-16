import React, { memo } from 'react';

// class HabitAddForm extends PureComponent {
//     formRef = React.createRef();
//     inputRef = React.createRef();
//     onSubmit = event => {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         // 아래꺼 써도 됨
//         // this.inputRef.current.value = '';
//         this.formRef.current.reset();
//     };
    
//     render() {
//         console.log('habitAddform');
//         return (
//             <form ref={ this.formRef } className="add-form" onSubmit={this.onSubmit}>
//                 <input
//                     ref={this.inputRef}
//                     type="text"
//                     className="add_input"
//                     placeholder="Habit"/>
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }

const HabitAddForm = memo((props) => {
const formRef = React.createRef();
const inputRef = React.createRef();

const onSubmit = (event) => {
    event.preventDefault(); //리프레쉬 안일어남
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = '';
    formRef.current.reset();
};

return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input 
        ref={inputRef}
        type="text" 
        className="add-input" 
        placeholder="Habit"
        />
        <button className="add-button">Add</button>
    </form>
);
});


export default HabitAddForm;