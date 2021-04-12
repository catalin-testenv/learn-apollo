
import React, {FC, useState} from "react";

export type User = {
    firstName: string,
    lastName: string,
    age: number
}
type AddUserProps = {
    onUserAdded: (user: User) => void
};

const AddUser: FC<AddUserProps> = ({ onUserAdded }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);

    const [showForm, setShowForm] = useState(false);
    const _onUserAdded = () => {
        onUserAdded({ firstName, lastName, age });
        setFirstName('');
        setLastName('');
        setAge(0);
    }
    const _onCancel = () => {
        setShowForm(false);
        setFirstName('');
        setLastName('');
        setAge(0);
    }

    const addButton = <button onClick={() => setShowForm(true)} >add</button>;
    const form = <div>
        <input placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input placeholder="age" value={age} onChange={(e) => setAge(+e.target.value)} />
        <br />
        <button onClick={_onUserAdded} disabled={!firstName || !lastName || !age}>submit</button>
        <button onClick={_onCancel}>cancel</button>
    </div>

    return (
        showForm ? form : addButton
    );
};

export default AddUser;
