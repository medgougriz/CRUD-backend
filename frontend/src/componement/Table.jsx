import './table.css'

export default function Table({ data }) {

    return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        < tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                            <td><button>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
            )
}