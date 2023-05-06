const ContactListItem = ({id, name, phone, onRemove}) => {
    return <li>
        {name}: {phone} <button onClick ={()=>onRemove(id)}>X</button>
    </li>
}

const ContactList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null
    return (
        <ul>
            {contacts.map(contact => <ContactListItem {...contacts} onRemove={onRemove}/>)}
        </ul>
    )
}

export default ContactList