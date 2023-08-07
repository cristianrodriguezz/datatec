import Avatar from "../components/Avatar"
import Add from "../components/icons/Add"
import Delete from "../components/icons/Delete"
import Search from "../components/icons/Search"

const Users = () => {
  return (
    <>
        <div className="flex justify-between my-6 mx-5  xl:mx-auto max-w-screen-xl gap-3  ">
            <div className=" flex justify-center items-center gap-2 pl-5 lg:mr-36 rounded-lg basis-[30rem] bg-victoria-heading text-gray-300">
                <label htmlFor="searchUsers">
                    <Search/>
                </label>
                <input placeholder="Buscar por nombre..." type="search" id="searchUsers" className="w-full h-full rounded-lg bg-victoria-heading focus:no-underline focus:outline-none"/>
            </div>
            <div className="flex gap-3 ">
                <select name="status" id="status" className="focus:outline-none bg-victoria-heading text-white px-3 rounded-lg">
                    <option value="none" selected hidden>Estado</option>
                    <option value="all">Todos</option>
                    <option value="connected">Conectado</option>
                    <option value="desconnected">Desconectado</option>
                </select>
                <button className="flex justify-center items-center p-2 gap-2 bg-[#0070f0] font-semibold text-white rounded-xl px-3" >Agregar nuevo <Add/></button>
            </div>
        </div>
        <div className=" overflow-x-auto my-6 mx-5  xl:mx-auto sm:rounded-xl  max-w-screen-xl ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rol
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[250px]">
                        <Avatar image={'https://i.pravatar.cc/150?u=a042581f4e29026024d'} name='Tony' lastName='Reichert' email='tony.reichert@example.com'/>
                        </th>
                        <td className="px-6 py-4">
                            CEO
                            Management
                        </td>
                        <td className="px-6 py-4">
                            <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium border-default bg-transparent px-1 h-6 text-small rounded-full capitalize border-none gap-1 text-default-600">
                                <span className="w-2 h-2 ml-1 rounded-full bg-green-500"></span><span className="flex-1 text-inherit font-normal px-1">conectado</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-red-600 cursor-pointer active:opacity-50">
                            <Delete/>
                        </td>
                    </tr>
                    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[250px]">
                        <Avatar image={'https://i.pravatar.cc/150?u=a042581f4e29026704d'} name='Tony' lastName='Reichert' email='tony.reichert@example.com'/>
                        </th>
                        <td className="px-6 py-4">
                            CEO
                            Management
                        </td>
                        <td className="px-6 py-4">
                            <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium border-default bg-transparent px-1 h-6 text-small rounded-full capitalize border-none gap-1 text-default-600">
                                <span className="w-2 h-2 ml-1 rounded-full bg-green-500"></span><span className="flex-1 text-inherit font-normal px-1">conectado</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-red-600 cursor-pointer active:opacity-50">
                            <Delete/>
                        </td>

                    </tr>
                    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[250px]">
                        <Avatar image={'https://i.pravatar.cc/150?u=a048581f4e29026701d'} name='Tony' lastName='Reichert' email='tony.reichert@example.com'/>
                        </th>
                        <td className="px-6 py-4">
                            CEO
                            Management
                        </td>
                        <td className="px-6 py-4">
                            <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium border-default bg-transparent px-1 h-6 text-small rounded-full capitalize border-none gap-1 text-default-600">
                                <span className="w-2 h-2 ml-1 rounded-full bg-green-500"></span><span className="flex-1 text-inherit font-normal px-1">conectado</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-red-600 cursor-pointer active:opacity-50">
                            <Delete/>
                        </td>

                    </tr>
                    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[250px]">
                            <Avatar image={'https://i.pravatar.cc/150?img=20'} name='Tony' lastName='Reichert' email='tony.reichert@example.com'/>
                        </th>
                        <td className="px-6 py-4">
                            CEO
                            Management
                        </td>
                        <td className="px-6 py-4">
                            <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium border-default bg-transparent px-1 h-6 text-small rounded-full capitalize border-none gap-1 text-default-600">
                                <span className="w-2 h-2 ml-1 rounded-full bg-green-500"></span><span className="flex-1 text-inherit font-normal px-1">conectado</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-red-600 cursor-pointer active:opacity-50">
                            <Delete/>
                        </td>

                    </tr>
                    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[250px]">
                            <Avatar image={'https://i.pravatar.cc/150?img=45'} name='Tony' lastName='Reichert' email='tony.reichert@example.com'/>
                        </th>
                        <td className="px-6 py-4">
                            CEO
                            Management
                        </td>
                        <td className="px-6 py-4">
                            <div className="relative max-w-fit inline-flex items-center justify-between box-border border-medium border-default bg-transparent px-1 h-6 text-small rounded-full capitalize border-none gap-1 text-default-600">
                                <span className="w-2 h-2 ml-1 rounded-full bg-red-500"></span><span className="flex-1 text-inherit font-normal px-1">Desconectado</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-red-600 cursor-pointer active:opacity-50">
                            <Delete/>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Users