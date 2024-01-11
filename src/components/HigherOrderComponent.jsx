import {Component} from "react";

export default class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filteredData:[],
            filteredWithName:[],
            filteredWithAge:[],
            total:0
        }
        // console.log(this.state.userData);
        var filteredData = this.state.userData.filter((element) => element.user_type === "Designer")
        var filteredWithName = this.state.userData.filter((element) => element.name[0] == "J")
        var filteredWithAge = this.state.userData.filter((element)=> element.age > 28 && element.age <= 50)
        var sum = this.state.userData.reduce((accumulator,element) => {
            if (element.user_type == "Designer") {
                accumulator += element.years;
            }
            return accumulator
        }, 0);
        this.state.filteredWithName = filteredWithName;
        this.state.filteredWithAge = filteredWithAge;
        this.state.filteredData = filteredData;
        this.state.total = sum;
    }

    render() {
        return (
        <div style={{width : "80%", textAlign : "initial"}}>
            <h1>Display All Items</h1>
            {this.state.userData.map((element) => (
                <div key={element.id} style={{width: "70%"}}>
                    <ul>
                        <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                    </ul>
                </div>
            ))}

            <h1>Display all data based on UserType</h1>
            {this.state.filteredData.map((element) => (
                <div key={element.id} style={{width: "70%"}}>
                    <ul>
                        <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                    </ul>
                </div>
            ))}
                
                <h1>Filtered all data based on greater than 20 and less than 50</h1>
                {this.state.filteredWithAge.map((element) => (
                    <div key={element.id} style={{width: "70%"}}>
                        <ul>
                            <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                        </ul>
                    </div>
                
            ))}

                <h1>Filtered all data starting with letter J</h1>
                {this.state.filteredWithName.map((element) => (
                    <div key={element.id} style={{width: "70%"}}>
                        <ul>
                            <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                        </ul>
                    </div>
                
            ))}
 

            <h1>Find the total years of Designers</h1>
            <h2>{this.state.total}</h2>

        </div>
        )
    }
}
