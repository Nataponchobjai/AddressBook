import React from "react";
import User from "./User";

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }


    componentDidMount() {
        fetch ("https://randomuser.me/api?results=25")
        .then((Response) => Response.json())
        .then((data) => {
            this.setState({
                users: data.results,
            });
        });

    }

    render() {
        return (
            <ul className="users-list">
                {this.state.users.map((user, index) => (
                    <User key={index} user={user} />
                ))}
            </ul>
        );
    }
}

export default Users;