const service = require('./department.service')

async function createDepartment(req,res){
    try{
        const {name} = req.body;
        if(!name || name.trim()===""){
            return res.status(400).json({ message: "Department name is required" })
        }
        const department = await service.createDepartment(name)
        return res.status(201).json(department)
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
}

async function getAllDepartments(req, res) {
  try {
    const departments = await service.getAllDepartments()
    return res.status(200).json(departments)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

async function getDepartmentById(req, res) {
  try {
    const { id } = req.params

    const department = await service.getDepartmentById(id)

    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    return res.status(200).json(department)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function updateDepartment(req, res) {
  try {
    const { id } = req.params
    const { name } = req.body

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Department name is required" })
    }

    const updated = await service.updateDepartment(id, name)

    if (!updated) {
      return res.status(404).json({ message: "Department not found" });
    }

    return res.status(200).json(updated)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

async function deleteDepartment(req, res) {
  try {
    const { id } = req.params

    const deleted = await service.deleteDepartment(id)

    return res.status(200).json(deleted)
  } catch (error) {
    if (error.message.includes("not found")) {
      return res.status(404).json({ message: error.message })
    }
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
}