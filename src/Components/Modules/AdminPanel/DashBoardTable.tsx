
interface IDashBoardTable {
    id: number
    username: string
    email: string
}

export default function DashBoardTable({ id, username, email }: IDashBoardTable) {
    return (
        <tr className=" border-b border-primary odd:hover:bg-primary even:hover:bg-secondary hover:text-black transition-colors duration-200">
            <th scope="row" className="px-6 py-4 font-medium   whitespace-nowrap ">
                {id}
            </th>
            <td className="px-6 py-4">
                {username}
            </td>
            <td className="px-6 py-4 ">
                {email}
            </td>
        </tr>
    )
}
