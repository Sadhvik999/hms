const prisma = require("../../../prisma/client")

async function createDepartment(name){
    try{
        return await prisma.department.create({
            data:{name}
        })
    }
    catch(error){
        throw new Error("Failed to create department: " + error.message)
    }
}
async function getAllDepartments(){
    try{
        return await prisma.department.findMany();
    }
    catch(error){
        throw new Error("Failed to fetch department: " + error.message)
    }
}
async function getDepartmentById(id){
    try{
        const department =  await prisma.department.findUnique({
            where:{id : Number(id)}
        })
        
        if (!department){
            throw new Error("Department not found")
        }
    }
    catch(error){
        throw new Error("Failed to get department: " + error.message)
    }
}
async function updateDepartment(id, name){
    try{
        const existing =  await prisma.department.findUnique({
            where:{id : Number(id)}
        })
        if(!existing){
            throw new Error("Department not found")
        }
        return await prisma.department.update({
            where:{id : Number(id)},
            data: {name}
        })
    }
    catch(error){
        throw new Error("Failed to update department: " + error.message)
    }
}
async function deleteDepartment(id){
    try {
        const existing = await prisma.department.findUnique({
        where: { id: Number(id) }
        })

        if (!existing) {
        throw new Error("Department not found")
        }

        return await prisma.department.delete({
        where: { id: Number(id) }
        })
    }
    catch(error){
        throw new Error("Failed to create department: " + error.message)
    }
}


module.exports = {
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment
}