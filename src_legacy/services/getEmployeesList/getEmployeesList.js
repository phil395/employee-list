
const getEmployeesList = async () => {

	const response = await fetch('http://localhost:3020/employees')

	if (!response.ok) {
		return 404
	} else {
		return await response.json()
	}
}


export default getEmployeesList